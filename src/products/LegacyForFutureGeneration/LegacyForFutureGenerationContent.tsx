import React from 'react';
import './LegacyForFutureGeneration.css';

const LegacyForFutureGenerationContent: React.FC = () => {
  const handleOpenEbook = () => {
    const url = '/ebook';
    // Open in the same tab for a focused reading experience
    window.location.href = url;
  };

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
          <div className="lf-note">Loads a full-page reader in this tab for easy reading.</div>
        </div>
      </section>
    </div>
  );
};

export default LegacyForFutureGenerationContent;
