'use client';

import { useEffect, useRef, useState } from 'react';
import { ChatMessage } from '@/lib/chatbotAI';

interface WidgetChatWindowProps {
  messages: ChatMessage[];
  isLoading: boolean;
  onSendMessage: (message: string) => void;
  onClose: () => void;
  clinicName: string;
  primaryColor?: string;
}

export const WidgetChatWindow = ({
  messages,
  isLoading,
  onSendMessage,
  onClose,
  clinicName,
  primaryColor = '#0284c7',
}: WidgetChatWindowProps) => {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div
      className="fixed bottom-20 right-4 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 animate-slide-up md:bottom-24 md:right-6"
      style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Header */}
      <div
        className="text-white p-4 flex justify-between items-center"
        style={{ backgroundColor: primaryColor }}
      >
        <div>
          <h2 className="font-bold text-lg">{clinicName}</h2>
          <p className="text-sm opacity-90">AI Assistant</p>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:opacity-80 transition"
          aria-label="Close chat"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-4xl mb-4">😊</div>
            <p className="text-gray-600 font-semibold">
              Welcome to {clinicName}!
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Ask me about services, pricing, hours, or book an appointment.
            </p>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            } animate-fade-in`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-lg whitespace-pre-wrap ${
                message.sender === 'user'
                  ? 'text-white rounded-br-none'
                  : 'bg-white text-gray-800 shadow-sm border border-gray-200 rounded-bl-none'
              }`}
              style={
                message.sender === 'user'
                  ? { backgroundColor: primaryColor }
                  : {}
              }
            >
              {message.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white text-gray-800 shadow-sm border border-gray-200 rounded-lg rounded-bl-none px-4 py-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 disabled:bg-gray-100"
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !inputValue.trim()}
            className="text-white rounded-lg px-4 py-2 transition flex items-center space-x-2 disabled:bg-gray-300"
            style={{ backgroundColor: primaryColor }}
            onMouseOver={(e) =>
              (e.currentTarget.style.opacity = '0.9')
            }
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
