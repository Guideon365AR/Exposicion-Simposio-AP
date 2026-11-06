export interface CalendarEventData {
  title: string;
  description: string;
  location: string;
  startDate: Date; // e.g. 2026-11-04 16:00
  endDate: Date;   // e.g. 2026-11-04 18:00
}

export function formatIcsDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

export function generateIcsContent(event: CalendarEventData): string {
  const start = formatIcsDate(event.startDate);
  const end = formatIcsDate(event.endDate);
  const now = formatIcsDate(new Date());
  
  // Escape newlines and commas for RFC 5545
  const cleanDescription = event.description.replace(/\n/g, '\\n').replace(/,/g, '\\,');
  const cleanTitle = event.title.replace(/,/g, '\\,');
  const cleanLocation = event.location.replace(/,/g, '\\,');

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Congreso Democracia UNR//Ponencia SRP//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:ponencia-srp-unr-2026-${event.startDate.getTime()}@unr.edu.ar`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${cleanTitle}`,
    `DESCRIPTION:${cleanDescription}`,
    `LOCATION:${cleanLocation}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}

export function generateGoogleCalendarUrl(event: CalendarEventData): string {
  const start = formatIcsDate(event.startDate);
  const end = formatIcsDate(event.endDate);
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${start}/${end}`,
    details: event.description,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
