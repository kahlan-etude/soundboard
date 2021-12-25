const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
     console.log( "connected, ioClients: " + io.engine.clientsCount);
     
     socket.on('play_sound', function(message){
        console.log("play_sound: " + message);
        io.emit('play_sound', message); 
     });

     socket.on("disconnect", function(reason) {
        console.log( "disconnected, ioClients: " + io.engine.clientsCount);
        io.emit('get_count', io.engine.clientsCount);
     });

     io.emit('get_count', io.engine.clientsCount);
});


// end of socket.io logic

 module.exports = socketapi;
