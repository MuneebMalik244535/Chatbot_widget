'use client';

import { Chatbot } from '@/components/Chatbot';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      
      {/* Content section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Bright Smile Dental Clinic
        </h1>
        <p className="text-xl text-gray-600">
          Chat with our AI Assistant 👇
        </p>
      </div>

      {/* Chatbot Widget */}
      <Chatbot />
    </div>
  );
}
