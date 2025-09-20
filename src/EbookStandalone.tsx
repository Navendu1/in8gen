import React from 'react';
import EbookReader from './products/LegacyForFutureGeneration/ebook/EbookReader';

const EbookStandalone: React.FC = () => {
  const handleClose = () => {
    // Try to close if this tab was opened via script; fallback to navigate home
    window.close();
    // If window.close() is blocked or no-op, navigate back/home
    if (!window.opener) {
      window.location.href = '/';
    }
  };

  return <EbookReader onClose={handleClose} />;
};

export default EbookStandalone;
