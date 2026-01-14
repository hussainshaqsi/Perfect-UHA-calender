import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';
import { detectCancellation } from '@/lib/cancellation-detector';

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const signals = await prisma.emailSignal.findMany({
      where: { userId: user.id },
      orderBy: { receivedAt: 'desc' },
    });

    return NextResponse.json(signals);
  } catch (error) {
    console.error('Error fetching email signals:', error);
    return NextResponse.json({ error: 'Failed to fetch signals' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { emailBody } = await request.json();
    const cancellation = detectCancellation(emailBody);

    if (!cancellation) {
      return NextResponse.json({ detected: false });
    }

    const signal = await prisma.emailSignal.create({
      data: {
        userId: user.id,
        subject: cancellation.eventTitle,
        body: emailBody,
        reason: cancellation.reason,
        confidence: cancellation.confidence,
        receivedAt: new Date(),
      },
    });

    return NextResponse.json({ detected: true, signal });
  } catch (error) {
    console.error('Error processing email signal:', error);
    return NextResponse.json({ error: 'Failed to process signal' }, { status: 500 });
  }
}
