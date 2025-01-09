import { useState } from "react";
import NewsletterModal, {
  NewsletterModalData,
} from "./components/NewsletterModal/NewsletterModal";
import "./App.css";

const App = () => {
  const [isNewsletterModalOpen, setNewsletterModalOpen] =
    useState<boolean>(false);

  // Example default data (could be fetched from an API)
  const defaultNewsletterModalData: NewsletterModalData = {
    email: "",
    digestType: "weekly",
  };

  const [newsletterFormData, setNewsletterFormData] =
    useState<NewsletterModalData>(defaultNewsletterModalData);

  const handleSubmit = (data: NewsletterModalData): void => {
    setNewsletterFormData(data); // Store subscription data
    setNewsletterModalOpen(false); // Close modal
    // Optionally, send updated data to the server or database here
  };

  const handleOpenNewsletterModal = () => {
    setNewsletterModalOpen(true);
  };

  const handleCloseNewsletterModal = () => {
    setNewsletterModalOpen(false);
  };

  return (
    <div className="App">
      {/* Open Modal Button */}
      <button onClick={handleOpenNewsletterModal}>
        Open Newsletter Form (Modal)
      </button>

      {/* Display Subscription Data */}
      {newsletterFormData && newsletterFormData.email && (
        <div className="msg-box">
          <b>{newsletterFormData.email}</b> requested a{" "}
          <b>{newsletterFormData.digestType}</b> newsletter.
        </div>
      )}

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={isNewsletterModalOpen}
        modalData={newsletterFormData}
        onClose={handleCloseNewsletterModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
