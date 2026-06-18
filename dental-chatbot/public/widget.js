/**
 * Bright Smile Dental Clinic - Embeddable Widget
 * 
 * Usage:
 * <script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
 */

(function () {
  'use strict';

  // Configuration
  const WIDGET_ID = 'bright-smile-widget';
  const IFRAME_ID = 'bright-smile-widget-iframe';
  const BUTTON_ID = 'bright-smile-widget-button';

  // Get configuration from script tag
  function getWidgetConfig() {
    const scripts = document.getElementsByTagName('script');
    let clientId = 'dental-clinic-1';
    let widgetUrl = '';

    for (let i = 0; i < scripts.length; i++) {
      const script = scripts[i];
      if (
        script.src.includes('widget.js') ||
        script.getAttribute('data-client')
      ) {
        clientId = script.getAttribute('data-client') || clientId;
        widgetUrl = script.src.replace('widget.js', 'widget');
        break;
      }
    }

    return { clientId, widgetUrl };
  }

  // Create widget container
  function createWidget() {
    const config = getWidgetConfig();

    // Create main container
    const container = document.createElement('div');
    container.id = WIDGET_ID;
    container.style.cssText = `
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 2147483647;
      font-family: system-ui, -apple-system, sans-serif;
    `;

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.id = IFRAME_ID;
    iframe.src = `${config.widgetUrl}?clientId=${config.clientId}`;
    iframe.style.cssText = `
      position: fixed;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: none;
      z-index: 2147483647;
      background: transparent;
    `;
    iframe.title = 'Chat Widget';
    iframe.allow = 'microphone; camera';

    container.appendChild(iframe);
    document.body.appendChild(container);

    return { container, iframe, clientId: config.clientId };
  }

  // Initialize widget
  function init() {
    // Check if already initialized
    if (document.getElementById(WIDGET_ID)) {
      return;
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        createWidget();
      });
    } else {
      createWidget();
    }

    // Add minimal styles to page
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { transform: translateY(10px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes bounceSubtle {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-4px); }
      }
    `;
    document.head.appendChild(style);
  }

  // Initialize when loaded
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }

  // Also try to init immediately
  if (document.body) {
    init();
  }
})();
