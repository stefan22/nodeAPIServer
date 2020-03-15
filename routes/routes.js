//test route
const testRoute = require('./test-routes.js');

const appRouter = (app, fs) => {
    
    //default test route at base API URL
    app.get('/', (req,res) => {
        res.send('Hello from Node Server API');
    });
    //route module
    testRoute(app, fs);

};


module.exports = appRouter;