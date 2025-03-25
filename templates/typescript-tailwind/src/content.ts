import './index.css';

// Create a container for the content
const container = document.createElement('div');
container.id = 'chrome-extension-content-root';
container.className = 'fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg';
container.innerHTML = '<p class="text-sm text-gray-600">Content script loaded</p>';
document.body.appendChild(container);

// Example of sending a message to the background script
chrome.runtime.sendMessage({ type: 'GET_DATA' }, (response) => {
  if (response.success) {
    console.log('Data received from background script');
  }
}); 