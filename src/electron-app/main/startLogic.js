const { app, BrowserWindow } = require('electron')
const path = require("path");
const { ipcHandler } = require("./ipcMain");
const { createNewSavDir } = require('./webtorrent/firstStartLogic')
const { loadHistoryTorrent } = require("./webtorrent/driveWebTorrent");

class StartApp {

	#window
	#AppType
	#devUrl = 'http://localhost:3000'
	#prodUrl = path.join(__dirname, '..', '..', '..', 'build', 'index.html')

	constructor(type) {
		this.#AppType = type
	}

	// Private
	#createWindow() {

		this.#window = new BrowserWindow({
			webPreferences:{
				devTools: true,
				contextIsolation: true,
				nodeIntegration: true,
				preload: path.join(__dirname, '..', 'renderer', 'preload.js')
			},
			frame: false,
			autoHideMenuBar: true,
			resizable: false,
			width: 1062,
			height: 768,
		})

		switch (this.#AppType) {

			case 'dev': this.#window.loadURL(this.#devUrl).catch(err => console.error(err))
				break
			case 'prod': this.#window.loadFile(this.#prodUrl).catch(err => console.error(err))
				break
		}

		// other logic
		createNewSavDir().catch(err => console.error(err))
		loadHistoryTorrent()
	}

	async #appEventHandler() {
		app.on('ready', () => { this.#createWindow(); ipcHandler()})
		app.on('window-all-closed', () => app.quit())

	}


	// public
	start() {
		this.#appEventHandler()
			.catch(err => alert(JSON.stringify(err)))
	}
}

module.exports = { StartApp, BrowserWindow }