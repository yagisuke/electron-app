const {app, BrowserWindow } = require('electron')

let win

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(`file://${__dirname}/index.html`)
    win.on('closed', () => { win = null })
 }

 /**
  * Electronが起動し、初期化処理が完了したとき
  */
 app.on('ready', createWindow)

/**
 * すべてのウィンドウが閉じられた時
 */
 app.on('window-all-closed', () => {
    if (process.platform === 'darwin') return
    app.quit()
})

/**
 * アプリケーションが非活性状態から活性化した時。
 * macOS限定のライフサイクルで、アプリケーションドックからアイコンをクリックしたときに発生
 */
app.on('activate', () => {
    if (win !== null) return
    createWindow()
})