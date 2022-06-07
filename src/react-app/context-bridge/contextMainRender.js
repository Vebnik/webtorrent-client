
export const ContextMainRender = {
	getTorrents: async () => {
		return await window.webTorrent.getTorrents()
	},
	addTorrentOnFile: async () => {
		await window.webTorrent.addTorrentOnFile()
	},
	openDownloadFolder: async () => {
		await window.webTorrent.openDownloadFolder()
	},
	minCloseWindow: async (action) => {
		console.log('in ContextMainRender')
		await window.webTorrent.minCloseWindow(action)
	}
}