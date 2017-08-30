var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();


console.log("AppDispatcher =>",  AppDispatcher)

module.exports = AppDispatcher;