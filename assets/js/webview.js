window.onload = doLayout;
window.onresize = doLayout;

onload = () => {
  doLayout();
  // Topbar functions
  // homeButton();
  // printButton();
};

function doLayout() {
  let webview = document.querySelector('webview');
  let windowWidth = document.documentElement.clientWidth;
  let windowHeight = document.documentElement.clientHeight;
  let controlsHeight = getControlsHeight();
  let webviewHeight = windowHeight - controlsHeight;

  webview.style.width = windowWidth + 'px';
  webview.style.height = webviewHeight + 'px';

  webview.openDevTools();
  webview.insertCSS('.drum-games-container {margin: 0px auto;} #fb-root, #nav-back, .drum-games-container header, .drum-games-container article, .drum-games-container footer, .drum-games-container .drum-games-more { display: none !important; }');
}
