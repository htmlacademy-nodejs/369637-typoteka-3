'use strict';

const path = require(`path`);
const express = require(`express`);
const DEFAULT_PORT = 8080;
const mainRoutes = require(`./routes/main-routes`);
const myRoutes = require(`./routes/main-routes`);
const articlesRoutes = require(`./routes/articles-routes`);
const PUBLIC_DIR = `public`;

const app = express();

app.use(`/articles`, articlesRoutes);
app.use(`/my`, myRoutes);
app.use(`/`, mainRoutes);

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.listen(DEFAULT_PORT);

