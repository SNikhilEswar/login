const express = require('express');
const api = require('./routes/api');
const PORT = 3000;
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api', api)
require('./db/config')
app.use('/', (req,res) => {
    res.send('hello from server')
})

app.listen(PORT, () => {
    console.log('runing' + PORT);
})