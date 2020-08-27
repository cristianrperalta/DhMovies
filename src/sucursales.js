let fs=require('fs');
let data=fs.readFileSync('./data/theaters.json', 'utf8');
let sucursales=JSON.parse(data);

function listadoSucursales(){
    let arrSucursales = [];
    let totalRooms = 0;
    for (let i = 0; i < sucursales.total_theaters; i++) {
        totalRooms = sucursales.theaters[i]['total_rooms'] + totalRooms;
        let objSucursal = {
            name: sucursales.theaters[i]['name'],
            address: sucursales.theaters[i]['address'],
            description: sucursales.theaters[i]['description']
        };
        arrSucursales.push(objSucursal);
     }
    arrSucursales.unshift(totalRooms);
    arrSucursales.sort(function (a, b) {
        if (a.name< b.name) return 1
        if (a.name> b.name) return -1
        return 0
    });

    return arrSucursales
}


function listadoSucursales2(){
    let arrSucu = listadoSucursales()
    let vSucu = ' ';
    for (let i = 1; i < arrSucu.length; i++){
        vSucu = `<li> <h3>Nombre: ${arrSucu[i].name} </h3>
                        <p>Dirección: ${arrSucu[i].address} </p>
                        <p>Descripción: ${arrSucu[i].description} </p>
                    </li>` + vSucu;
    }

    return vSucu;
}

function sucursalesBuildXML(){
    let listado = listadoSucursales();
    let listado2 = listadoSucursales2();
    let txtContent = '';
    txtContent = `
    <!DOCTYPE html>
    <html>
        <head>
            <style>
            header {
                text-align: center;
                padding: 3px;
                background-color: lightGrey;
                color: black;
                }
            body {
                text-align: left;
                padding: 3px;
                background-color: grey;
                color: white;
            }
            footer {
                text-align: left;
                padding: 3px;
                background-color: lightGrey;
                color: black;
            }
            </style>
        </head>
        <header>
            <h1>Nuestras Salas.</h1>
        </header>
        <body>
            <h3>Total de salas: ${listado[0]}</h3>
            <h3>Listados de salas: </h3>
            <ol>
                ${listado2}
            </ol>
        </body>
        <footer>
            <h3>Recordá que podés visitar las secciones:</h3>
            <ol>
                <li> <a href="http://localhost:3030/en-cartelera">En Cartelera </li>
                <li> <a href="http://localhost:3030/mas-votadas">Más Votadas </li>
                <li> <a href="http://localhost:3030/sucursales">Sucursales </li>
                <li> <a href="http://localhost:3030/contacto">Contacto </li>
                <li> <a href="http://localhost:3030/preguntas-frecuentes">preguntas-frecuentes </li>
            </ol>
        </footer>
    </html>`
    return txtContent;
};

exports.sucursalesBuildXML = sucursalesBuildXML;