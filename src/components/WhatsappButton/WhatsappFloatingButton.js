// components/WhatsappFloatingButton.js
"use client";
import React from 'react';
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';

const WhatsappFloatingButton = () => {
  return (
    <FloatingWhatsApp
        phoneNumber='+254726462757' // Required
        accountName='CAWA Kenya Tours & Travel' // Optional
        avatar='/images/avatar.webp' // Optional
        initialMessageByServer='Hi there! How can I assist you?' // Optional
        statusMessage='Available' // Optional
        placeholder='Write here...' // Optional
        allowEsc={true} // Optional
        style={{ left: '20px', right: 'unset' }}
        buttonStyle={{ left: '20px', right: 'unset' }}
        // Explore all available props below
      />
  );
};

export default WhatsappFloatingButton;
