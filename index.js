const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 5000;


app.get('/', (req, res) => {
     res.send('my phone server coming soonnnnnnnn')
})

app.get('/phones', (req, res) => {
    res.send(phones);
})


app.get('/phones/:id', (req,res) =>{
   const id = parseInt(req.params.id); // data show korano process
   console.log('i need for id: ', id);
   const phone = phones.find(phone => phone.id === id) || {};
   res.send(phone);
})

app.listen(port, () => {
    console.log(`My phone server is running on port: ${port}`);
})
