const { dialog, app } = require('electron')
const fs = require('fs')
const path = require('path')



const checkDir = async () => {
	const savePathDir = path.join(app.getPath('documents'), 'webTorrentClient')

	const dir = new Promise(resolve => {
		fs.mkdir(savePathDir, err => err ? resolve(true) : resolve(false) )
	})

	await Promise.all([dir])
	return dir
}

const createNewSavDir = async () => {

	const wait = new Promise(async resolve => {
		await checkDir().then(async isCreate => {
			if (isCreate) {
				resolve('Is have')
				return console.log('Root dir is exist')
			}

			const savePathDir = path.join(app.getPath('documents'), 'webTorrentClient', 'historyTorrent.json')
			await fs.mkdir(savePathDir, err => console.log(err))
			await fs.writeFile(path.join(savePathDir), JSON.stringify([]),
				(err) => console.error(err))

			resolve('Is have')
		})
	})

	await Promise.all([wait])
	return wait
}


module.exports = { createNewSavDir }