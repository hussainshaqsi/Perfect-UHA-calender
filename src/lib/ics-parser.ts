import ICAL from 'ical.js';

export interface ParsedEvent {
  uid: string;
  summary: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  location?: string;
}

export async function parseICS(icsUrl: string): Promise<ParsedEvent[]> {
  try {
    const response = await fetch(icsUrl);
    const icsData = await response.text();
    
    const jcalData = ICAL.parse(icsData);
    const comp = new ICAL.Component(jcalData);
    const vevents = comp.getAllSubcomponents('vevent');

    return vevents.map((vevent) => {
      const event = new ICAL.Event(vevent);
      return {
        uid: event.uid,
        summary: event.summary,
        description: event.description,
        startDate: event.startDate.toJSDate(),
        endDate: event.endDate.toJSDate(),
        location: event.location,
      };
    });
  } catch (error) {
    console.error('Error parsing ICS:', error);
    return [];
  }
}
