console.log("background service worker alive");

chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.type === "FILL_FORM") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, msg);
    });
  }
});
