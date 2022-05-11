// const { client } = require('./database');

// function initNotifications(io) {
//     io.on('connection', function (socket) {
//         console.log(socket.handshake.query.token);
//         socket.emit('connected', { "id": socket.id });
//         socket.emit(socket.handshake.query.token, { 'title': 'this is a test message' });
//         client.on('notification', function (title) {
//             var token = JSON.parse(title.payload)['token'];
//             socket.emit(token, { title: title });
//         });
//         socket.on('user', async function (data) {
//             var result = await database.query(`SELECT * FROM public.realtime where token= '${data.name}' and read=false`);
//             if (result.rowCount > 0)
//                 io.sockets.emit(data.name, { title: result.rows });
//         });
//         socket.on('disconnect', async function (socket) {
//             console.log('disconnect');
//         })
//     });
// }

// module.exports = initNotifications;