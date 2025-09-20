import React, { useEffect, useMemo, useRef, useState } from 'react';
import './EbookReader.css';
import { ebookContent } from './ebookContent';

interface EbookReaderProps {
  onClose: () => void;
}

const EbookReader: React.FC<EbookReaderProps> = ({ onClose }) => {
  // Toggle for showing the right-side "On this page" panel
  const showOnThisPage = true; // visible on desktop; CSS hides it on mobile
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Helpers
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

  const chapterTitle = ebookContent[currentChapter]?.title ?? 'Chapter';
  const chapterSlug = useMemo(() => `chapter-${currentChapter + 1}-${slugify(chapterTitle)}`, [currentChapter, chapterTitle]);

  const nextChapter = () => {
    if (currentChapter < ebookContent.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setIsMobileMenuOpen(false); // Close mobile menu when navigating
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setIsMobileMenuOpen(false); // Close mobile menu when navigating
    }
  };

  const goToChapter = (index: number) => {
    setCurrentChapter(index);
    setIsMobileMenuOpen(false); // Close mobile menu when selecting chapter
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll to top of the content area and focus the chapter heading when chapter changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (headingRef.current) {
      headingRef.current.focus({ preventScroll: true });
    }
    // Update hash and document title for deep-linking
    const newHash = `#${chapterSlug}`;
    if (window.location.hash !== newHash) {
      // Use replaceState to avoid polluting history on rapid nav
      const url = `${window.location.pathname}${newHash}`;
      window.history.replaceState(null, '', url);
    }
    document.title = `${chapterTitle} · Future Wealth & Legacy Preservation`;
  }, [currentChapter, chapterSlug, chapterTitle]);

  // On first mount, honor incoming hash deep-link if present
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    // Accept formats: chapter=3, chapter-3, chapter-3-title
    const byEq = hash.match(/^chapter=(\d+)$/i);
    const byDash = hash.match(/^chapter-(\d+)(?:-.+)?$/i);
    const idxStr = byEq?.[1] ?? byDash?.[1];
    if (idxStr) {
      const idx = Math.max(1, Math.min(ebookContent.length, parseInt(idxStr, 10))) - 1;
      setCurrentChapter(idx);
    } else {
      // Try slug match by title
      const found = ebookContent.findIndex(c => slugify(`chapter-${ebookContent.indexOf(c) + 1}-${c.title}`) === hash);
      if (found >= 0) setCurrentChapter(found);
    }
  }, []);

  // (Copy feature removed) — no text extraction needed currently

  // Build "On this page" from h3/h4 headings and add ids/anchors
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;
    const nodes = Array.from(container.querySelectorAll('.chapter-content h3, .chapter-content h4')) as HTMLElement[];
    const list = nodes.map((n) => {
      const text = n.innerText.trim();
      const level = n.tagName.toLowerCase() === 'h3' ? 3 : 4;
      const id = slugify(text);
      n.id = id;
      // Insert anchor link for better discoverability of deep links
      if (!n.querySelector('a.anchor')) {
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.className = 'anchor';
        a.setAttribute('aria-label', `Link to ${text}`);
        a.textContent = '#';
        n.prepend(a);
      }
      return { id, text, level };
    });
    setHeadings(list);

    const onScroll = () => {
      let active = list[0]?.id ?? '';
      const contentBox = container.getBoundingClientRect();
      for (const h of nodes) {
        const rect = h.getBoundingClientRect();
        const topWithin = rect.top - contentBox.top;
        if (topWithin <= 40) active = h.id;
      }
      setActiveHeading(active);
    };
    container.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    // Intercept in-content anchor clicks to scroll the container, not the window
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute('href') || '';
      const id = hash.replace('#', '');
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const offset = el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop - 8;
      container.scrollTo({ top: offset, behavior: 'smooth' });
      const newHash = `#${id}`;
      if (window.location.hash !== newHash) {
        const url = `${window.location.pathname}${newHash}`;
        window.history.replaceState(null, '', url);
      }
    };
    container.addEventListener('click', onClick);
    return () => {
      container.removeEventListener('scroll', onScroll);
      container.removeEventListener('click', onClick);
    };
  }, [currentChapter]);

  const scrollToHeading = (id: string) => {
    const container = contentRef.current;
    if (!container) return;
    const el = document.getElementById(id);
    if (!el) return;
    const offset = el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop - 8;
    container.scrollTo({ top: offset, behavior: 'smooth' });
    // Reflect in URL hash without adding a new history entry
    const newHash = `#${id}`;
    if (window.location.hash !== newHash) {
      const url = `${window.location.pathname}${newHash}`;
      window.history.replaceState(null, '', url);
    }
  };

  return (
    <div className="ebook-container dark">
      <header className="ebook-header">
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
        <h1 className="ebook-title">Future Wealth & Legacy Preservation System</h1>
        <button className="close-button" onClick={onClose} aria-label="Close eBook">✕</button>
      </header>

      <div className="ebook-layout">
        {/* Table of Contents - Left Sidebar */}
        <div className={`table-of-contents ${isMobileMenuOpen ? 'show' : ''}`}>
          <h2 className="toc-title">Table of Contents</h2>
          <ul className="toc-list">
            {ebookContent.map((chapter, index) => (
              <li key={index} className={`toc-item ${index === currentChapter ? 'active' : ''}`}>
                <button 
                  className="toc-button"
                  onClick={() => goToChapter(index)}
                >
                  {chapter.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

    {/* Main Content Area */}
  <div className="ebook-content" ref={contentRef}>
          {/* Progress Indicator */}
          <div className="progress-indicator">
            Reading Progress: {Math.round((currentChapter + 1) / ebookContent.length * 100)}%
          </div>
          
          <div className="chapter-content prose">
            <div className="reading-time">
              📖 Estimated reading time: {Math.ceil((ebookContent[currentChapter]?.content?.toString().length || 0) / 1000)} minutes
            </div>
            <h2 ref={headingRef} tabIndex={-1}>{ebookContent[currentChapter].title}</h2>
            {ebookContent[currentChapter].content}
            
            {/* Chapter Navigation */}
            <div className="chapter-navigation">
              <button 
                className="nav-button prev" 
                onClick={prevChapter}
                disabled={currentChapter === 0}
              >
                ← Previous
              </button>
              
              <span className="chapter-indicator">
                Chapter {currentChapter + 1} of {ebookContent.length}
              </span>
              
              <button 
                className="nav-button next" 
                onClick={nextChapter}
                disabled={currentChapter === ebookContent.length - 1}
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* On This Page - Right Sidebar */}
        {showOnThisPage && (
          <aside className="on-this-page">
            <h2 className="otp-title">On this page</h2>
            <ul className="otp-list">
              {headings.map((h) => (
                <li key={h.id} className={`otp-item level-${h.level} ${activeHeading === h.id ? 'active' : ''}`}>
                  <button className="otp-link" onClick={() => scrollToHeading(h.id)}>{h.text}</button>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
};

export default EbookReader;
