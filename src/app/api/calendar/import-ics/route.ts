import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';
import { parseICS } from '@/lib/ics-parser';

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { icsUrl } = await request.json();
    const events = await parseICS(icsUrl);

    // Delete existing events
    await prisma.calendarEvent.deleteMany({ where: { userId: user.id } });

    // Create new events
    await prisma.calendarEvent.createMany({
      data: events.map((event) => ({
        userId: user.id,
        externalId: event.uid,
        title: event.summary,
        description: event.description,
        startDate: event.startDate,
        endDate: event.endDate,
        location: event.location,
        isCancelled: false,
      })),
    });

    return NextResponse.json({ success: true, count: events.length });
  } catch (error) {
    console.error('Error importing ICS:', error);
    return NextResponse.json({ error: 'Failed to import ICS' }, { status: 500 });
  }
}
