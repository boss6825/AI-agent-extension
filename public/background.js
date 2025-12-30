console.log("background service worker alive");

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "FILL_FORM") {
    chrome.tabs.sendMessage(msg.tabId, msg);
  }
});