const app = require('./app'); // the actual Express app
const http = require('http');
const socketIo = require('socket.io');
const config = require('./utils/config');

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  const interval = setInterval(() => socket.emit('hello-world', `Hello World ${new Date()}`), 1000);
  socket.on('disconnect', () => {
    clearInterval(interval);
  });
});

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
