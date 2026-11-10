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
import { AudioPlayer } from './components/AudioPlayer';
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
        {/* Hero with Event Summary */}
        <Hero />

        {/* Video Presentation Hub */}
        <VideoHub />

        {/* Audio Player Strip (Full Width) */}
        <section className="py-12 md:py-16 bg-slate-950 border-t border-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AudioPlayer
              src="/assets/aistudio/ElevenLabs_2026-11-06T15_56_49_Guideon_ivc_s50_sim95_v4_4b8892c2.mp3"
              title="Audio Oficial de la Ponencia · Locución completa de Gustavo Núñez en el Congreso"
            />
          </div>
        </section>

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
