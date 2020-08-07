var socket = io();

// Escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servido');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Se disparo el callback');
    console.log(resp);
});


socket.on('enviarMensaje', function(mensaje) {
    console.log('Cliente: ', mensaje);
});