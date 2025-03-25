import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const Content: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
      <p className="text-sm text-gray-600">Content script loaded</p>
    </div>
  );
};

// Create a container for the React app
const container = document.createElement('div');
container.id = 'chrome-extension-content-root';
document.body.appendChild(container);

// Render the React app
const root = createRoot(container);
root.render(<Content />);

// Example of sending a message to the background script
chrome.runtime.sendMessage({ type: 'GET_DATA' }, (response) => {
  if (response.success) {
    console.log('Data received from background script');
  }
}); 