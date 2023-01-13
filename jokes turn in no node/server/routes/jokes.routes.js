const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/Jokes', JokeController.getAllJokes);
    app.post('/api/Jokes', JokeController.createNewJoke);
    app.get('/api/Jokes/:_id', JokeController.getJokeById);
    app.put('/api/Jokes/:_id', JokeController.updateJoke);
    app.delete('/api/Jokes/:_id', JokeController.deleteJoke);
}
