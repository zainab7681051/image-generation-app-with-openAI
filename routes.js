const controller = require('./controller')

module.exports = (app) => {
	app.post('/openAI/create', controller.generateImage)
}