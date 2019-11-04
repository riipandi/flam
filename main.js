require('v8-compile-cache');

const electron = require("electron")
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const session = electron.session

const path = require("path")
const fs = require("fs")

// Menu (for standard keyboard shortcuts)
const { Menu } = require("electron")

// Adblocker
const fetch = require("cross-fetch")
const { ElectronBlocker, Request } = require("@cliqz/adblocker-electron")

const template = [
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      { role: "pasteandmatchstyle" },
      { role: "delete" },
      { role: "selectall" }
    ]
  },
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { role: "forcereload" },
      { role: "toggledevtools" },
      { type: "separator" },
      { role: "resetzoom" },
      { role: "zoomin" },
      { role: "zoomout" },
      { type: "separator" },
      { role: "togglefullscreen" }
    ]
  },
  {
    role: "window",
    submenu: [{ role: "minimize" }, { role: "close" }]
  }
]

if (process.platform === "darwin") {
  template.unshift({
    label: app.name,
    submenu: [
      { role: "about" },
      { type: "separator" },
      { role: "services", submenu: [] },
      { type: "separator" },
      { role: "hide" },
      { role: "hideothers" },
      { role: "unhide" },
      { type: "separator" },
      { role: "quit" }
    ]
  })

  // Edit menu
  template[1].submenu.push(
    { type: "separator" },
    {
      label: "Speech",
      submenu: [{ role: "startspeaking" }, { role: "stopspeaking" }]
    }
  )

  // Window menu
  template[3].submenu = [
    { role: "close" },
    { role: "minimize" },
    { role: "zoom" },
    { type: "separator" },
    { role: "front" }
  ]
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let initPath

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on("ready", () => {

  initPath = path.join(app.getPath("userData"), "init.json")

  try {
    data = JSON.parse(fs.readFileSync(initPath, "utf8"))
  } catch (e) {}

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 620,
    minHeight: 500,
    darkTheme: true,
    plugins: true,
    icon: path.join(__dirname, "assets/icons/png/64x64.png"),
    //titleBarStyle: 'hidden',
    //frame: false,
    backgroundColor: "#000000",
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      zoomFactor: 1.0
    }
  })

  if (session.defaultSession === undefined) {
    throw new Error('defaultSession is undefined');
  }

  // adblocker
  const blocker = ElectronBlocker.parse(fs.readFileSync(path.join(__dirname, "easylist.txt"), 'utf-8'));
  // const blocker = ElectronBlocker.fromLists(fetch, ['https://easylist.to/easylist/easylist.txt']);
  blocker.enableBlockingInSession(session.defaultSession);

  // load the page
  mainWindow.loadURL("file://" + __dirname + "/index.html")

  // Strore session
  const ses = mainWindow.webContents.session
  console.log(ses.getUserAgent())

  // Customization
  mainWindow.webContents.on("did-finish-load", function() {
    fs.readFile(path.join(__dirname, "assets/css/custom.css"), "utf-8", function(error, data) {
      if (!error) {
        var formatedData = data.replace(/\s{2,10}/g, " ").trim()
        mainWindow.webContents.insertCSS(formatedData)
      }
    })
  })

  // Display Dev Tools
  //mainWindow.openDevTools();

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  data = {
    bounds: mainWindow.getBounds()
  }
  fs.writeFileSync(initPath, JSON.stringify(data))
  app.quit()
})
