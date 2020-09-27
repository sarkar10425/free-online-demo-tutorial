const express=require('express')
const app = express()
const Slots = require('./api/models/slots')
const slots = new Slots()
const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/slots', (req, res) => {
    slots.get()
    .then((response) => {
        res.status(200).send(response.data);
    }).catch((error) => {
        res.send(400).send(error);
    })
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}/api/slots`)
})
