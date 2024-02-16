// background.js
// Listen for messages from popup.js and store blocked URLs
let blockedURLs = [];

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "add") {
    blockedURLs.push(message.url);
  } else if (message.action === "remove") {
    const index = blockedURLs.indexOf(message.url);
    if (index !== -1) {
      blockedURLs.splice(index, 1);
    }
  }
});

// Function to check if URL is blocked
function isURLBlocked(url) {
  return blockedURLs.some(blockedURL => url.includes(blockedURL));
}

// Event listener to block web requests
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (isURLBlocked(details.url)) {
      return {cancel: true};
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
