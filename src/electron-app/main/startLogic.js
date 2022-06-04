const { app, BrowserWindow } = require('electron')


class StartApp {

	#window
	#AppType
	#devUrl = 'http://localhost:3000'
	#prodUrl = ''

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
				preload: ''
			},
			autoHideMenuBar: true,
			resizable: false,
			width: 1362,
			height: 768,
		})

		switch (this.#AppType) {

			case 'dev': this.#window.loadURL(this.#devUrl).catch(err => console.error(err))
				break
			case 'prod': this.#window.loadFile().catch(err => console.error(err))
				break
		}

	}

	async #appEventHandler() {
		app.on('ready', () => this.#createWindow())
		app.on('window-all-closed', () => app.quit())

	}


	// public
	start() {
		this.#appEventHandler()
			.catch(err => alert(JSON.stringify(err)))
	}
}

module.exports = { StartApp }