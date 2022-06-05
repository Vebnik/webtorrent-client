const { ipcMain } = require('electron')
const { getCurrentTorrent, addNewTorrent } = require('./webtorrent/driveWebTorrent')


const ipcHandler = () => {
	ipcMain.handle('dialog:getTorrents', async (event, args) => {
		console.log('in dialog:getTorrents handled')
		return getCurrentTorrent()
	})
	//
	ipcMain.handle('dialog:addTorrent', async (event, args) => {
		console.log('in dialog:addTorrent handled', args)
		addNewTorrent(args)
	})
}

module.exports = { ipcHandler }