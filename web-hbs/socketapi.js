const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
     console.log( "A user connected" );
     
     socket.on('play_sound', function(message){
        console.log("play_sound: " + message);
        io.emit('play_sound', message); 
     });
     
     });
     // end of socket.io logic

 module.exports = socketapi;
