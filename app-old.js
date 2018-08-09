const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'content-Type': 'application/json' });

        let salida = {
            nombre: 'Ricardo',
            edad: 20,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola mundo'); //Para crear la respuesta
        res.end(); //Para indicar que terminamos de crear la respuesta
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');