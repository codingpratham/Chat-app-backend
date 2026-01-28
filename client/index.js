const { log } = require("console");

const socket = io('http://localhost:3000');

socket.on('connect', (res) => {
    log('connected to server',res);

})