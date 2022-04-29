const express = require("express");
const app = express();

const TaskRouter = require('./routes/task');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/task', TaskRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log("nodejs api running...");
});