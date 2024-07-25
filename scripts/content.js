const playlistSelector = "#columns #secondary #secondary-inner #playlist #container #items #playlist-items #wc-endpoint";

chrome.runtime.onMessage.addListener(function(request) {
    if(request.action === 'executeCode') {
        getAllUrl();
    }
});

function getAllUrl() {
  let videoLinks = [];
  let playlist = document.querySelectorAll(playlistSelector);
  playlist.forEach((link) => {
    if (link.href.includes("/watch")) {
      videoLinks.push(link.href);
      // if (videoLinks.length > 300) {
      //   copyToClipboard(videoLinks);
      //   return;
      // }
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