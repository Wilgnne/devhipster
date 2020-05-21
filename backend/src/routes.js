const { Router } = require('express');

const Cursos = require('./controllers/Cursos');

const routes = Router();

routes.get('/devs', Cursos.index);

module.exports = routes;
