document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("tdt");
    button.addEventListener("click", function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (activeTabs) {
            chrome.tabs.sendMessage(activeTabs[0].id, { action: "executeCode" });
        });
    });
});