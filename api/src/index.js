const app = require('./components/app'); // the actual Express app
const http = require('http');
const socketIo = require('socket.io');
const { PORT } = require('./utils/config');

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  const interval = setInterval(() => socket.emit('hello-world', `Hello World ${new Date()}`), 1000);
  socket.on('disconnect', () => {
    clearInterval(interval);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
