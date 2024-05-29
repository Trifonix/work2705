const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('Пользователь подключен');
    socket.on('message', (msg) => {
        console.log('Сообщение с клиента: ' + msg);
    })
    socket.on('disconnect', () => {
        console.log('Пользователь отключен');
    }); 
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен. Порт: ${PORT}`);
});