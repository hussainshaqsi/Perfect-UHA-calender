import { Assessment } from '@prisma/client';

export interface PriorityScore {
  score: number;
  urgency: number;
  importance: number;
  workload: number;
}

export function calculatePriority(
  assessment: Assessment,
  currentDate: Date = new Date()
): PriorityScore {
  const daysUntilDue = Math.max(
    0,
    Math.ceil((assessment.dueDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24))
  );

  // Urgency: 0-100 (higher = more urgent)
  const urgency = daysUntilDue === 0 ? 100 : Math.min(100, (30 / (daysUntilDue + 1)) * 10);

  // Importance: 0-100 (based on weight)
  const importance = Math.min(100, assessment.weight * 2);

  // Workload: 0-100 (estimated hours)
  const workload = Math.min(100, (assessment.estimatedHours / 10) * 100);

  // Final score: weighted average
  const score = urgency * 0.5 + importance * 0.3 + workload * 0.2;

  return {
    score: Math.round(score),
    urgency: Math.round(urgency),
    importance: Math.round(importance),
    workload: Math.round(workload),
  };
}
