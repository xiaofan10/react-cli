const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // 禁用Node.js集成，以便加载远程URL
    },
  })
  let url = 'http://localhost:8080'
  if (!process.env.NODE_ENV) {
    url = 'http://123.60.216.236'
  }

  win.loadURL(url).catch(err => {
    console.log(err)
  })
}

app.whenReady().then(() => {
  createWindow()
})
