const userRoutes = require('./users.js');

const appRouter = (app, fs) => {
    
    //default route
    app.get('/', (req, res) => {
        res.send('Hello from Node Server API');
    });
    //user routes
    userRoutes(app, fs);

};


module.exports = appRouter;