console.log("content script is ready", window.location.href);

chrome.runtime.onMessage.addListener((msg, sender, messageResponse) =>{
if(msg.type === "FILL_FORM"){
    console.log("FILL_FORM message received", msg.data);
}});