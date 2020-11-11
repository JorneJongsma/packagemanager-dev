import { app, BrowserWindow, ipcMain, Menu } from 'electron'

let win: BrowserWindow | null

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#ffffff',
    // icon: `${__dirname}/assets/moobels.ico`,
    show: false, // Dit zet de Browserwindow uit, gevolgd door later een event dat zodra de render ready is op true wordt gezet; Dit voorkomt het showen van een leeg window.
    frame: false,
    transparent: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (process.env.NODE_ENV === 'production') {
    win.loadURL(`file://${__dirname}/index.html`)
    // win.webContents.openDevTools()
  } else {
    const HOST = require('os').hostname().toLowerCase()
    const PORT = 3000
    win.loadURL(`http://${HOST}:${PORT}/`)
    win.webContents.openDevTools()
  }


  win.once('ready-to-show', () => {
    (win as BrowserWindow).show()
  })


  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => {
  createWindow()
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})