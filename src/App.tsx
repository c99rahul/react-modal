import React, { useState } from 'react';
import NewsletterModal, {
  NewsletterModalData,
} from './components/NewsletterModal/NewsletterModal';
import './App.css';

const App: React.FC = () => {
  const [isNewsletterModalOpen, setNewsletterModalOpen] = useState<boolean>(false);
  const [newsletterFormData, setNewsletterFormData] = useState<NewsletterModalData | null>(null);

  const handleOpenNewsletterModal = () => {
    setNewsletterModalOpen(true);
  };

  const handleCloseNewsletterModal = () => {
    setNewsletterModalOpen(false);
  };

  const handleFormSubmit = (data: NewsletterModalData): void => {
    setNewsletterFormData(data);
    handleCloseNewsletterModal();
  };

  return (
    <>
      <div style={{ display: "flex", gap: "1em" }}>
        <button onClick={handleOpenNewsletterModal}>Open Newsletter Form (Modal)</button>
      </div>

      {newsletterFormData && newsletterFormData.email && (
        <div className="msg-box msg-box--success">
          <b>{newsletterFormData.email}</b> requested a <b>{newsletterFormData.digestType}</b> newsletter.
        </div>
      )}

      <NewsletterModal
        isOpen={isNewsletterModalOpen}
        onSubmit={handleFormSubmit}
        onClose={handleCloseNewsletterModal} />
    </>
  );
};

export default App;