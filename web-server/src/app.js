const path = require('path');
const express = require('express');
const hbs = require('hbs'); 

const app = express();

// Define path for express
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup for handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather app',
        name: 'Razvan'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Razvan'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Razvan'
    });
})

app.get('/weather', (req, res) => {
    res.send('Wheater page');
});

app.listen(3000, () => {
    console.log('Serve is up on port 3000');
});