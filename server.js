const express = require('express');
const PORT = process.env.PORT || 3000
// import sequelize connection
const db = require('./config/connection');
const api_routes = require('./routes/api_routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api_routes);

// sync sequelize models to the database, then turn on the server
db.sync({ force: false }). then(() => {
  app.listen(PORT, () => console.log('App listening on port %s', PORT));
});
