const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('webTorrent', {
	getTorrents: () => ipcRenderer.invoke('dialog:getTorrents'),
	addTorrent: (magnetUrl) => ipcRenderer.invoke('dialog:addTorrent', magnetUrl),
	addTorrentOnFile: () => ipcRenderer.invoke('dialog:addTorrentOnFile'),
	openDownloadFolder: () => ipcRenderer.invoke('dialog:openDownloadFolder'),
	minCloseWindow: (action) => ipcRenderer.invoke('dialog:windowDrive', action)
})