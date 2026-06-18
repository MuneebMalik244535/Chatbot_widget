'use client';

interface WidgetChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
  primaryColor?: string;
}

export const WidgetChatButton = ({
  onClick,
  isOpen,
  primaryColor = '#0284c7',
}: WidgetChatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-4 right-4 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center md:bottom-6 md:right-6 ${
        isOpen ? 'bg-red-500 hover:bg-red-600' : 'animate-bounce-subtle'
      }`}
      style={
        !isOpen ? { backgroundColor: primaryColor } : {}
      }
      onMouseOver={(e) => {
        if (!isOpen) {
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}
      aria-label="Chat with us"
    >
      {isOpen ? (
        <svg
          className="w-8 h-8 text-white"
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
      ) : (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.5 2H3.5C2.12 2 1 3.12 1 4.5v15C1 20.88 2.12 22 3.5 22h17C21.88 22 23 20.88 23 19.5v-15C23 3.12 21.88 2 20.5 2zm-4 12h-8v2h8v-2zm6-2H3.5V4.5h17v7.5z" />
        </svg>
      )}
    </button>
  );
};
