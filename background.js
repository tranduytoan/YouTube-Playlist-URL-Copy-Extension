chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "tdt",
    title: "Copy all video links",
    targetUrlPatterns: ["https://www.youtube.com/*"]
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "tdt") {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (activeTabs) {
        chrome.tabs.sendMessage(activeTabs[0].id, { action: "executeCode" });
      }
    );
  }
});
