const { app, BrowserWindow } = require('electron')
const childProc = require('child_process')


// other Logic
const openDownloadFolder = (path = app.getPath('downloads')) => {
	childProc.exec(`explorer ${path}`)
}

const minCloseWindow = (action) => {
	const win = BrowserWindow.getFocusedWindow()

	if (action === 'min') return win.minimize()
	return win.close()
}

module.exports = { openDownloadFolder, minCloseWindow }