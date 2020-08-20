let fs=require('fs');
let data=fs.readFileSync('./data/theaters.json', 'utf8');
let sucursales=JSON.parse(data);

function fSucursales (){
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
    if (a.name> b.name) {
        return 1;
    }
    if (a.name< b.name) {
        return -1;
    }
    // a must be equal to b
    return 0;
    });

    return arrSucursales
}

exports.fSucursales = fSucursales;