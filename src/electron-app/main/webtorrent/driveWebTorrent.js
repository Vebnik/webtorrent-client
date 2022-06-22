const WebTorrent = require('webtorrent')
const { dialog, app } = require('electron')
const parseTorrent = require('parse-torrent')
const fs = require('fs')
const path = require('path')
const client = new WebTorrent()


const addTorrentDownloadList = (torrentModel) => {
	const savePathDir = path.join(app.getPath('documents'), 'webTorrentClient', 'historyTorrent.json')

	fs.readFile(savePathDir, 'utf8', async (err, data) => {
		const dataList = JSON.parse(data)
		dataList.push(torrentModel)
		fs.writeFile(savePathDir, JSON.stringify(dataList), (err) => console.error(err))
	})

}

const addNewTorrent = (magnet, savePath) => {
	console.log('add torrent')
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
				.then(savePath => {
					addTorrentDownloadList({magnet: magnetURI, path: savePath.filePaths[0]})
					addNewTorrent(magnetURI, savePath.filePaths[0])
				})
		})
}

const loadHistoryTorrent = () => {
	console.log('Load history')
	const savePathDir = path.join(app.getPath('documents'), 'webTorrentClient', 'historyTorrent.json')

	fs.readFile(savePathDir, 'utf8', async (err, data) => {

		console.log(data)

		const dataList = JSON.parse(data)
		dataList.forEach(el => {
			addNewTorrent(el?.magnet, el?.path)
		})
	})
}

module.exports = { addNewTorrent, getCurrentTorrent, addNewTorrentOnFile, loadHistoryTorrent}


