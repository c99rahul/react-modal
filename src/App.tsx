import { useState } from "react";
import NewsletterModal, {
  NewsletterModalData,
} from "./components/NewsletterModal/NewsletterModal";
import "./App.css";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Example default data (could be fetched from an API)
  const defaultSubscriptionData: NewsletterModalData = {
    email: "",
    digestType: "weekly",
  };

  const [subscriptionData, setSubscriptionData] = useState<NewsletterModalData>(
    defaultSubscriptionData
  );

  const handleSubmit = (data: NewsletterModalData): void => {
    setSubscriptionData(data); // Store subscription data
    setModalOpen(false); // Close modal
    // Optionally, send updated data to the server or database here
  };

  return (
    <div className="App">
      {/* Open Modal Button */}
      <button onClick={() => setModalOpen(true)}>
        Open Newsletter Form (Modal)
      </button>

      {/* Display Subscription Data */}
      {subscriptionData && subscriptionData.email && (
        <div className="msg-box">
          <b>{subscriptionData.email}</b> requested a{" "}
          <b>{subscriptionData.digestType}</b> newsletter.
        </div>
      )}

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={isModalOpen}
        modalData={subscriptionData}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
