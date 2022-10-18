const UserController = require('../controllers/user.controller')
// will need to later require authentication

module.exports = function(app) {
    app.post('/api/users/register', UserController.register);
    app.post('/api/users/login', UserController.login);

    // authenticated routes
}