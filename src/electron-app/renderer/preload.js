const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('webTorrent', {
	getTorrents: () => ipcRenderer.invoke('dialog:getTorrents'),
	addTorrent: (magnetUrl) => ipcRenderer.invoke('dialog:addTorrent', magnetUrl),
})