const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers'); //Codigo para incluir los helpers que como son funciones que se registran en el hbs no
//es necesario exportarlos en module

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

//Express hbd. This line sets the default view render of express as using hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
            nombre: 'riCarDO bibIEcA'
        })
        // Ademas de mandarle el archivo a renderizar, podemos mandarle objetos y variables para que puedan ser usadas en el archivo
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto: ${port}`)
});