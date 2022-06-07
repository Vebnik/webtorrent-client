const WebTorrent = require('webtorrent')
const client = new WebTorrent()


const addNewTorrent = (magnet) => {
	client.add(magnet, { path: '../../dist-media' }, (torrent) => {
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

module.exports = { addNewTorrent, getCurrentTorrent }

