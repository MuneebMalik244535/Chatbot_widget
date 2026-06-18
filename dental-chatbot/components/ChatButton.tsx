'use client';

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
  unreadCount?: number;
}

export const ChatButton = ({
  onClick,
  isOpen,
  unreadCount = 0,
}: ChatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-4 right-4 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center md:bottom-6 md:right-6 ${
        isOpen
          ? 'bg-red-500 hover:bg-red-600'
          : 'bg-gradient-to-br from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 animate-bounce-subtle'
      }`}
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
        <>
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.5 2H3.5C2.12 2 1 3.12 1 4.5v15C1 20.88 2.12 22 3.5 22h17C21.88 22 23 20.88 23 19.5v-15C23 3.12 21.88 2 20.5 2zm-4 12h-8v2h8v-2zm6-2H3.5V4.5h17v7.5z" />
          </svg>
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {unreadCount}
            </span>
          )}
        </>
      )}
    </button>
  );
};
