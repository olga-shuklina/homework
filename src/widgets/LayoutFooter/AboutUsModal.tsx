import React, { useState } from 'react';
import Modal from '../../shared/ui/Modal/Modal';

const AboutUsModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>About Us</button> 
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Привет, это модальное окно!</h2>
        <p>Здесь информация об организации!</p>
      </Modal>
    </div>
  );
};

export default AboutUsModal;