const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/item')
const path = require('path')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const db = require('./config/keys').mongoURL;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => console.log('logged in mongo'))
    .catch(err => console.log(err));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization,Accept,Content-Type,Origin,X-Requested-With"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({})
    }
    next();
})
app.use('/api/blogs', items);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('blogger/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'blogger', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`Server mounted at Port ${port}`) })
