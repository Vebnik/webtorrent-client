const { ipcMain } = require('electron')
const { getCurrentTorrent, addNewTorrent, addNewTorrentOnFile } = require('./webtorrent/driveWebTorrent')
const { openDownloadFolder, minCloseWindow } = require("./windowDrive");


const ipcHandler = () => {
	ipcMain.handle('dialog:getTorrents', async (event, args) => {
		//console.log('in dialog:getTorrents handled')
		return getCurrentTorrent()
	})
	//
	ipcMain.handle('dialog:addTorrent', async (event, args) => {
		console.log('in dialog:addTorrent handled', args)
		addNewTorrent(args)
	})
	//
	ipcMain.handle('dialog:addTorrentOnFile', async (event, args) => {
		console.log('in dialog:addTorrentOnFile handled', args)
		await addNewTorrentOnFile()
	})
	//
	ipcMain.handle('dialog:openDownloadFolder', async (event, args) => {
		openDownloadFolder()
	})
	//
	ipcMain.handle('dialog:windowDrive', async (event, args) => {
		minCloseWindow(args)
	})
}

module.exports = { ipcHandler }