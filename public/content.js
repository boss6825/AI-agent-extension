console.log("content script is ready", window.location.href);

chrome.runtime.onMessage.addListener((msg) => {
    if (msg.type === "FILL_FORM") {
        const fields = document.querySelectorAll("input, textarea, select");

        console.log("Found", fields.length, "form fields");

        fields.forEach((el, i) => {
            console.log(i, {
                tag: el.tagName,
                type: el.type,
                name: el.name,
                placeholder: el.placeholder,
                id: el.id,
                value: el.value,
                label: el.labels ? [...el.labels].map(l => l.innerText) : []
            });
        });
    }
});