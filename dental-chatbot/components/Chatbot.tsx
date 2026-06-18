'use client';

import { useEffect, useState } from 'react';
import { ChatMessage, generateBotResponse, simulateBotResponse } from '@/lib/chatbotAI';
import { ChatWindow } from './ChatWindow';
import { ChatButton } from './ChatButton';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // Load initial greeting
  useEffect(() => {
    if (!isOpen && messages.length === 0) {
      // Only show greeting when closed and no messages
    }
  }, []);

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
      // Simulate AI response
      const botResponseText = await simulateBotResponse(userMessage);

      const botMsg: ChatMessage = {
        id: `msg-${Date.now()}-bot`,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Error generating response:', error);
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
    setUnreadCount(0);

    // Show greeting if first time opening
    if (messages.length === 0) {
      const greetingMsg: ChatMessage = {
        id: `msg-greeting-${Date.now()}`,
        text: `👋 Welcome to Bright Smile Clinic!\n\nI'm your AI assistant. How can I help you today?\n\nYou can ask about:\n✓ Services we offer\n✓ Pricing\n✓ Clinic hours\n✓ Booking appointments\n✓ Our doctors\n✓ Location`,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([greetingMsg]);
    }
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ChatButton
        onClick={handleOpenChat}
        isOpen={isOpen}
        unreadCount={unreadCount}
      />

      {isOpen && (
        <ChatWindow
          messages={messages}
          isLoading={isLoading}
          onSendMessage={handleSendMessage}
          onClose={handleCloseChat}
        />
      )}
    </>
  );
};
