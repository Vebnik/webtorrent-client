const { StartApp } = require('./electron-app/main/startLogic')
const app = new StartApp('prod')
//////////////////////////////////////
app.start()
