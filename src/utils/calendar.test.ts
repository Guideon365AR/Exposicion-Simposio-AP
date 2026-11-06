import test from 'node:test';
import assert from 'node:assert/strict';
import { formatIcsDate, generateIcsContent, generateGoogleCalendarUrl } from './calendar';

test('formatIcsDate formats ISO date to ICS standard YYYYMMDDTHHmmssZ', () => {
  const d = new Date('2026-11-04T16:00:00.000Z');
  const formatted = formatIcsDate(d);
  assert.equal(formatted, '20261104T160000Z');
});

test('generateIcsContent returns valid VCALENDAR with event metadata', () => {
  const event = {
    title: 'Transformación Digital SRP',
    description: 'Ponencia en el Congreso sobre Democracia',
    location: 'Aula 5, Aulario, UNR, Rosario',
    startDate: new Date('2026-11-04T19:00:00.000Z'), // 16:00 UTC-3
    endDate: new Date('2026-11-04T21:00:00.000Z'),
  };

  const ics = generateIcsContent(event);
  assert.ok(ics.includes('BEGIN:VCALENDAR'));
  assert.ok(ics.includes('SUMMARY:Transformación Digital SRP'));
  assert.ok(ics.includes('DTSTART:20261104T190000Z'));
  assert.ok(ics.includes('DTEND:20261104T210000Z'));
  assert.ok(ics.includes('END:VCALENDAR'));
});

test('generateGoogleCalendarUrl generates correct calendar link', () => {
  const event = {
    title: 'Panel IA Administración Pública',
    description: 'Detalle de la ponencia',
    location: 'Aula 5 UNR',
    startDate: new Date('2026-11-04T19:00:00.000Z'),
    endDate: new Date('2026-11-04T21:00:00.000Z'),
  };

  const url = generateGoogleCalendarUrl(event);
  assert.ok(url.startsWith('https://calendar.google.com/calendar/render?'));
  assert.ok(url.includes('text=Panel+IA+Administraci%C3%B3n+P%C3%BAblica'));
  assert.ok(url.includes('dates=20261104T190000Z%2F20261104T210000Z'));
});
