const DreamController = require('../controllers/dream.controller')

module.exports = function(app){
    app.get('/api/dreams', DreamController.getAllDreams)
    app.post('/api/dreams', DreamController.createDream)
    app.get('/api/dreams/:id', DreamController.findOneDream)
    app.put('/api/dreams/:id', DreamController.addComment)
}