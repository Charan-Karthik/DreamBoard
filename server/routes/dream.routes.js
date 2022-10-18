const DreamController = require('../controllers/dream.controller')

module.exports = function(app){
    app.get('/api/dreams', DreamController.getAllDreams)
    app.post('/api/dreams', DreamController.createDream)
    app.get('/api/thoughts/:id', DreamController.findOneDream)
}