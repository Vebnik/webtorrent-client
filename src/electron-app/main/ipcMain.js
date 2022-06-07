const { ipcMain } = require('electron')
const { getCurrentTorrent, addNewTorrent, addNewTorrentOnFile, openDownloadFolder } = require('./webtorrent/driveWebTorrent')


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
}

module.exports = { ipcHandler }