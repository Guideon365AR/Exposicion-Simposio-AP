/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoHub } from './components/VideoHub';
import { SolowParadoxSection } from './components/SolowParadoxSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { PillarsAndMetrics } from './components/PillarsAndMetrics';
import { ProgramSection } from './components/ProgramSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CalendarModal } from './components/CalendarModal';
import { PaperModal } from './components/PaperModal';
import { PanelSession } from './data/congresoData';

export default function App() {
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);
  const [selectedSessionForCalendar, setSelectedSessionForCalendar] = useState<PanelSession | null>(null);
  const [paperModalOpen, setPaperModalOpen] = useState(false);

  const handleOpenCalendar = (session?: PanelSession) => {
    setSelectedSessionForCalendar(session || null);
    setCalendarModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar onOpenCalendar={() => handleOpenCalendar()} />

      {/* Main Content Sections */}
      <main className="flex-1" id="ponencia">
        {/* Hero with Event Summary & Audio Player */}
        <Hero
          onOpenCalendar={() => handleOpenCalendar()}
          onOpenAbstract={() => setPaperModalOpen(true)}
        />

        {/* Video Presentation Hub */}
        <VideoHub />

        {/* The Theoretical Challenge: Solow's Paradox in Public Admin */}
        <SolowParadoxSection />

        {/* 3-Layer Sequential Architecture & Before/After */}
        <ArchitectureSection />

        {/* 3 Institutional Pillars & 6 Empirical Metrics */}
        <PillarsAndMetrics onOpenAbstract={() => setPaperModalOpen(true)} />

        {/* Complete Symposium Schedule & Official Graphic Gallery */}
        <ProgramSection onSelectSession={(session) => handleOpenCalendar(session)} />

        {/* Academic & Public Sector Collaboration Form */}
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Modals */}
      <CalendarModal
        isOpen={calendarModalOpen}
        onClose={() => setCalendarModalOpen(false)}
        session={selectedSessionForCalendar}
      />

      <PaperModal
        isOpen={paperModalOpen}
        onClose={() => setPaperModalOpen(false)}
      />
    </div>
  );
}
