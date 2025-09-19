import React, { useState } from 'react';
import './LegacyForFutureGeneration.css';
import EbookReader from './ebook/EbookReader';

const LegacyForFutureGenerationContent: React.FC = () => {
  const [showEbook, setShowEbook] = useState(false);

  const handleOpenEbook = () => {
    setShowEbook(true);
  };

  const handleCloseEbook = () => {
    setShowEbook(false);
  };

  if (showEbook) {
    return <EbookReader onClose={handleCloseEbook} />;
  }

  return (
    <div className="lf-container">
      <section className="lf-hero">
        <div aria-hidden>🏛️</div>
        <h1 className="lf-title">Legacy for the Future Generation</h1>
        <p className="lf-subtitle">
          Preserve your values and pass down your vision with a simple, beautiful experience.
        </p>
      </section>

      <section className="lf-card" role="region" aria-labelledby="ebook-title">
        <h2 id="ebook-title">E‑book</h2>
        <p>Learn about building generational wealth and creating lasting legacies.</p>
        <div className="lf-actions">
          <button className="lf-button" onClick={handleOpenEbook}>
            <span aria-hidden>📚</span>
            Open: Future Wealth & Legacy Preservation System
          </button>
          <div className="lf-note">Full-screen reading with app theme.</div>
        </div>
      </section>
    </div>
  );
};

export default LegacyForFutureGenerationContent;
