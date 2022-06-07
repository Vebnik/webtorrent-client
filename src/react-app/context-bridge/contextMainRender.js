
export const ContextMainRender = {
	getTorrents: async () => {
		return await window.webTorrent.getTorrents()
	},
}