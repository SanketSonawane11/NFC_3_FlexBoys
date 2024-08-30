const express = require('express');
// const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const accountRouter = require('./routes/account');
const connectDb = require('./db');
require('dotenv').config();
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

const port = process.env.PORT


app.use(express.json());
app.use(express.static('public'));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/account", accountRouter);

app.listen(port, () => {
    connectDb();
    console.log(`Server live on http://localhost:${port}`);
})