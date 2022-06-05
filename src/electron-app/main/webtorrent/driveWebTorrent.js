const WebTorrent = require('webtorrent')
const client = new WebTorrent()


const addNewTorrent = (magnet) => {
	client.add(magnet, { path: '../../dist-media' }, (torrent) => {

		setInterval(() => {
			const progress = Math.trunc(torrent.progress * 100)
			const speed =  Math.trunc(torrent.downloadSpeed / 1024 / 1024)

			console.log(`${progress} %  || ${speed} mb/sec`)
		}, 200)

		torrent.on('done', () => console.log('torrent download finished'))
	})
}

const getCurrentTorrent = () => { // Ретёрнить никак. Нужно распарсить активные торренты и вернуть копию оюъекта. Чекнуть соединение типа WS между main и renderer
	return client.torrents.map(el => el)
}

module.exports = { addNewTorrent, getCurrentTorrent }

