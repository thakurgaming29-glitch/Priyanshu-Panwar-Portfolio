/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <PhotoProvider>
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300 relative">
        {/* Sticky Top Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Photo Upload / Selection Modal */}
        <PhotoUploadModal />
      </div>
    </PhotoProvider>
  );
}

