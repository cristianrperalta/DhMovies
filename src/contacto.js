function contactoBuildXML(){
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
            <h1>Contáctanos.</h1>
        </header>
        <body>
            <h3>Contenido</h3>
            <p>¿Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes. <br>
            Si deseas contactarnos podés escribirnos al siguiente email: dhmovies@digitalhouse.com o en las redes sociales. <br>
            Envianos tu consulta,sugerencia o reclamo y será respondido a la brevedad posible. <br>
            Recordá quetambién podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.
            </p>
        <footer>
            <h3>Recordá que podés visitar las secciones:</h3>
            <ol>
            <li> <a href="http://localhost:3030/en-cartelera">En Cartelera </li>
            <li> <a href="http://localhost:3030/mas-votadas">Más Votadas </li>
            <li> <a href="http://localhost:3030/sucursales">Sucursales </li>
            <li> <a href="http://localhost:3030/contacto">Contacto </li>
            <li> <a href="http://localhost:3030/preguntas-frecuentes">preguntas-frecuentes </li>
            <ol>
        </footer>
    </html>`
    return txtContent;
};

exports.contactoBuildXML = contactoBuildXML;