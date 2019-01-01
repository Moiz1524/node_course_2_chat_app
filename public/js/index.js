var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Moiz',
    text: 'It should work!.'
  });
});
socket.on('disconnect', function () {
  console.log('Disconnected from server');
});
socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
