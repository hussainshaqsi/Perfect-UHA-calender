import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { iCalUrl } = await request.json();

    await prisma.user.update({
      where: { id: user.id },
      data: { iCalUrl },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving iCal URL:', error);
    return NextResponse.json({ error: 'Failed to save iCal URL' }, { status: 500 });
  }
}
