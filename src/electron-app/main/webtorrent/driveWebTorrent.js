const WebTorrent = require('webtorrent')
const { dialog, app } = require('electron')
const parseTorrent = require('parse-torrent')
const fs = require('fs')
const childProc = require('child_process')
const client = new WebTorrent()


const addNewTorrent = (magnet, savePath) => {
	client.add(magnet, { path: savePath }, (torrent) => {
		torrent.on('done', () => console.log('torrent download finished'))
	})
}

const getCurrentTorrent = () => { // Возможно WS есть // port1 port2

	return client.torrents.map(el => {
		return {
			hash: el.infoHash,
			name: el.name,
			speed: Math.trunc(el.downloadSpeed / 1024 / 1024),
			progress: Math.trunc(el.progress * 100)
		}
	})
}

const addNewTorrentOnFile = async () => {

	await dialog.showOpenDialog({properties: ['openFile'], filters: [ { name: 'torrent', extensions: ['torrent'] }]})
		.then(async filePath => {
			const magnetURI = parseTorrent.toMagnetURI({
				infoHash: parseTorrent(fs.readFileSync(filePath.filePaths[0])).infoHash
			})

			dialog.showOpenDialog({properties: ['openDirectory']})
				.then(savePath => addNewTorrent(magnetURI, savePath.filePaths[0]))
		})
}

// other Logic
const openDownloadFolder = (path = app.getPath('downloads')) => {
	childProc.exec(`explorer ${path}`)
}
module.exports = { addNewTorrent, getCurrentTorrent, addNewTorrentOnFile, openDownloadFolder }


