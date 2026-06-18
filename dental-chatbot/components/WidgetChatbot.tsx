'use client';

import { useState } from 'react';
import { ChatMessage } from '@/lib/chatbotAI';
import { WidgetChatWindow } from './WidgetChatWindow';
import { WidgetChatButton } from './WidgetChatButton';
import { ClinicData } from '@/data/clinicData';

interface WidgetChatbotProps {
  clinicData: ClinicData;
  clientId: string;
}

export const WidgetChatbot = ({ clinicData, clientId }: WidgetChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (userMessage: string) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      text: userMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // Call the mock-chat API
      const response = await fetch('/api/mock-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          clientId,
        }),
      });

      const data = await response.json();

      if (data.success) {
        const botMsg: ChatMessage = {
          id: `msg-${Date.now()}-bot`,
          text: data.message,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMsg: ChatMessage = {
        id: `msg-${Date.now()}-error`,
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChat = () => {
    setIsOpen(true);

    // Show greeting if first time opening
    if (messages.length === 0) {
      const greetingMsg: ChatMessage = {
        id: `msg-greeting-${Date.now()}`,
        text: `👋 Welcome to ${clinicData.name}!\n\nI'm your AI assistant. How can I help you today?\n\nYou can ask about:\n✓ Services we offer\n✓ Pricing\n✓ Clinic hours\n✓ Booking appointments\n✓ Our doctors\n✓ Location`,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([greetingMsg]);
    }
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const primaryColor = clinicData.theme?.primaryColor || '#0284c7';

  return (
    <>
      <WidgetChatButton
        onClick={handleOpenChat}
        isOpen={isOpen}
        primaryColor={primaryColor}
      />

      {isOpen && (
        <WidgetChatWindow
          messages={messages}
          isLoading={isLoading}
          onSendMessage={handleSendMessage}
          onClose={handleCloseChat}
          clinicName={clinicData.name}
          primaryColor={primaryColor}
        />
      )}

      {/* Global styles for widget */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-in; }
        .animate-slide-up { animation: slideUp 0.3s ease-out; }
        .animate-bounce-subtle { animation: bounceSubtle 2s infinite; }
      `}</style>
    </>
  );
};
