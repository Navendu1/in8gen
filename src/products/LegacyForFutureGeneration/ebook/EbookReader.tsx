import React, { useEffect, useRef, useState } from 'react';
import './EbookReader.css';
import { ebookContent } from './ebookContent';

interface EbookReaderProps {
  onClose: () => void;
}

const EbookReader: React.FC<EbookReaderProps> = ({ onClose }) => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

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
  }, [currentChapter]);

  return (
    <div className="ebook-container dark">
      <header className="ebook-header">
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
        <h1 className="ebook-title">Future Wealth & Legacy Preservation System</h1>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
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
          
          <div className="chapter-content">
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
      </div>
    </div>
  );
};

export default EbookReader;
