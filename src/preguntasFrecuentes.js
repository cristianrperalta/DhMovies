let fs=require('fs');
let data=fs.readFileSync('./data/faqs.json', 'utf8');
let preguFreq=JSON.parse(data);

function listadoPreguntasFrecuentes (){
    let arrPreguFreq = [];
    let totalPreg = preguFreq.total_faqs;
    for (let i = 0; i < preguFreq.total_faqs; i++) {
        let objPreguFreq = {
            title: preguFreq.faqs[i]['faq_title'],
            answer: preguFreq.faqs[i]['faq_answer']
        };
        arrPreguFreq.push(objPreguFreq);
     }
     arrPreguFreq.unshift(totalPreg);
     arrPreguFreq.sort(function (a, b) {
        if (a.title> b.title) return 1
        if (a.title< b.title) return -1
        return 0
    });

    return arrPreguFreq
}

function listadoParaLista(){
    let arrPregFrecu = listadoPreguntasFrecuentes()
    let vPreguntasFrecuentes = ' ';
    for (let i = 1; i < arrPregFrecu.length; i++){
        vPreguntasFrecuentes = `<li> <h4>Pregunta: ${arrPregFrecu[i].title} </h4>
                                     <p>Respuesta: ${arrPregFrecu[i].answer} </p>
                                </li>` + vPreguntasFrecuentes;
    }
    return vPreguntasFrecuentes;
}

function preguntasFrecuentesBuildXML(){
    let listado = listadoPreguntasFrecuentes();
    let listado2 = listadoParaLista();
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
            <h1>Preguntas Frecuentes.</h1>
        </header>
        <body>
            <h3>Total de preguntas: ${listado[0]}</h3>
            <h3>Listados de preguntas: </h3>
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

exports.preguntasFrecuentesBuildXML = preguntasFrecuentesBuildXML;