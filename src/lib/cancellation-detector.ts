export interface CancellationSignal {
  eventTitle: string;
  reason: string;
  confidence: number; // 0-1
}

const CANCELLATION_PATTERNS = [
  /annul[ée]/i,
  /cancel+[ée]d?/i,
  /report[ée]/i,
  /postponed/i,
  /déplacé/i,
  /moved/i,
  /pas de cours/i,
  /no class/i,
];

const EVENT_PATTERNS = [
  /cours\s+(?:de\s+)?([^,\n]+)/i,
  /class\s+([^,\n]+)/i,
  /examen\s+(?:de\s+)?([^,\n]+)/i,
  /exam\s+([^,\n]+)/i,
];

export function detectCancellation(emailBody: string): CancellationSignal | null {
  const hasCancellation = CANCELLATION_PATTERNS.some(pattern => pattern.test(emailBody));
  
  if (!hasCancellation) {
    return null;
  }

  // Try to extract event title
  let eventTitle = 'Unknown Event';
  for (const pattern of EVENT_PATTERNS) {
    const match = emailBody.match(pattern);
    if (match) {
      eventTitle = match[1].trim();
      break;
    }
  }

  // Calculate confidence based on keyword strength
  const cancellationMatches = CANCELLATION_PATTERNS.filter(p => p.test(emailBody)).length;
  const confidence = Math.min(1, cancellationMatches * 0.3 + 0.4);

  return {
    eventTitle,
    reason: 'Detected from email',
    confidence,
  };
}
