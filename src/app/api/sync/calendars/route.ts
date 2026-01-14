import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { parseICS } from '@/lib/ics-parser';

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      where: {
        iCalUrl: { not: null },
      },
    });

    for (const user of users) {
      if (!user.iCalUrl) continue;

      try {
        const events = await parseICS(user.iCalUrl);

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
      } catch (error) {
        console.error(`Error syncing calendar for user ${user.id}:`, error);
      }
    }

    return NextResponse.json({ success: true, syncedUsers: users.length });
  } catch (error) {
    console.error('Error in calendar sync:', error);
    return NextResponse.json({ error: 'Sync failed' }, { status: 500 });
  }
}
