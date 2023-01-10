const express = require('express');
const app_routes = express();

//mounting routes
const auth_routes = require("./auth.routes");
app_routes.use(auth_routes);

module.exports = app_routes;
