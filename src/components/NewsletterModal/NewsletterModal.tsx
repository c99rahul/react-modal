import React, { useRef, useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import "./NewsletterModal.css";

export interface NewsletterModalData {
  email: string;
  digestType: "daily" | "weekly" | "monthly";
}

interface NewsletterModalProps {
  isOpen: boolean;
  modalData: NewsletterModalData;
  onClose: () => void;
  onSubmit: (data: NewsletterModalData) => void;
}

const NewsletterModal = ({
  isOpen,
  modalData,
  onClose,
  onSubmit,
}: NewsletterModalProps) => {
  const focusInputRef = useRef<HTMLInputElement>(null);

  // Local state to manage form values
  const [formData, setFormData] = useState<NewsletterModalData>(modalData);

  // Focus on the email field when modal opens
  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current!.focus();
      }, 0);
    }
  }, [isOpen]);

  // Update local form state
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleClose = () => {
    setFormData(modalData);
    onClose();
  };

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            ref={focusInputRef}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Digest Type Select */}
        <div className="form-row">
          <label htmlFor="digestType">Digest Type</label>
          <select
            id="digestType"
            name="digestType"
            value={formData.digestType}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select a digest type
            </option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default NewsletterModal;
