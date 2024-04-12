chrome.runtime.onMessage.addListener(function(request) {
    if(request.action === 'executeCode') {
        getAllUrl();
    }
});

function getAllUrl() {
  let videoLinks = [];
  let tdt = document.querySelectorAll("#playlist #container #items a");
  tdt.forEach((link) => {
    if (link.href.includes("/watch")) {
      videoLinks.push(link.href);
      if (videoLinks.length > 300) {
        copyToClipboard(videoLinks);
        return;
      }
    }
  });
  copyToClipboard(videoLinks);
}

function copyToClipboard(videoLinks) {
  console.log(videoLinks);
  if (videoLinks.length > 0) {
    const videoLinksText = videoLinks.join("\n");
    const textarea = document.createElement("textarea");
    textarea.textContent = videoLinksText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Đã sao chép các liên kết video vào Clipboard!");
  } else {
    alert("Không có liên kết video để sao chép!");
  }
}