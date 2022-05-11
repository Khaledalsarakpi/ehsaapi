const { auth, app, server, list_router, request_router, notification, io } = require('./lib')

app.use(list_router);
app.use(request_router);
app.use(auth);
app.all("*", function (req, res) {
    res.json('not found '+req.method+' '+req.path);
});
server.listen(8000, function () {
    console.log("listening on port:8000");
});
