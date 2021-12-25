var express = require('express');
var router = express.Router();
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('client', { title: 'client' });
});

router.get('/client', function(req, res, next) {

  res.render('client', { title: 'client' });
});

router.get('/server', function(req, res, next) {

  res.render('server', { title: 'server' });
});

router.get('/about', function(req, res, next) {

  res.render('about', { title: 'about' });
});

io.sockets.on('connection', function(socket) {
  socket.on('play_sound', function(sound) {
    io.emit('play_sound', sound);
  });
});

module.exports = router;
