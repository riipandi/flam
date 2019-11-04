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

  // https://discuss.atom.io/t/inject-css-to-loadurl/26845/4
  // webview.insertCSS('@import url("css/custom.css")');
  webview.insertCSS('html, body { height: 100%; } #fb-root, #nav-back, .drum-games-container header, .drum-games-container article, .drum-games-container footer, .drum-games-container .drum-games-more { display: none !important; }');
  // webview.openDevTools();
}
