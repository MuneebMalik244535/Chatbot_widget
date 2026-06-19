(function() {
  // Prevent multiple injections
  if (window.BrightSmileChatbotLoaded) return;
  window.BrightSmileChatbotLoaded = true;

  // Configuration - Ensure this URL matches your deployed Vercel URL
  var WIDGET_URL = 'https://chatbot-widget-7y1o.vercel.app'; 

  // Create iframe element
  var iframe = document.createElement('iframe');
  iframe.src = WIDGET_URL;
  
  // Set initial styles for the floating button state
  iframe.style.position = 'fixed';
  iframe.style.bottom = '0';
  iframe.style.right = '0';
  iframe.style.width = '100px';
  iframe.style.height = '100px';
  iframe.style.border = 'none';
  iframe.style.zIndex = '2147483647'; // Maximum z-index to ensure it stays on top
  iframe.style.backgroundColor = 'transparent';
  iframe.allowTransparency = 'true';
  
  // Add iframe to body
  document.body.appendChild(iframe);

  // Listen for messages from the widget to resize the iframe
  window.addEventListener('message', function(event) {
    // Basic security check (optional but recommended in production)
    // if (event.origin !== WIDGET_URL) return;

    if (event.data === 'chat-open') {
      // Expand iframe when chat is opened
      // Use max-width/max-height for responsive behavior on mobile
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.maxWidth = '450px';
      iframe.style.maxHeight = '800px';
    } else if (event.data === 'chat-close') {
      // Collapse iframe when chat is closed
      iframe.style.width = '100px';
      iframe.style.height = '100px';
      iframe.style.maxWidth = 'none';
      iframe.style.maxHeight = 'none';
    }
  });
})();
