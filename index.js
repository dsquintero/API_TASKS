const express = require("express");
const app = express();

const TaskRouter = require('./routes/task');
const UserRouter = require('./routes/user');

const config = require('./config');
const database = require('./services/database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/task', TaskRouter);
app.use('/api/user', UserRouter);

database.connect(config.database);

app.listen(config.port, () => {
    console.log(`nodejs api running at ${config.port}...`);
});