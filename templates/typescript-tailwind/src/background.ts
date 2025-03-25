chrome.runtime.onInstalled.addListener(() => {
  console.log('Chrome Extension Template installed');
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_DATA') {
    // Handle data requests
    sendResponse({ success: true });
  }
  return true;
}); 