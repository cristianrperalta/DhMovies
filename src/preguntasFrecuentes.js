let fs=require('fs');
let data=fs.readFileSync('./data/faqs.json', 'utf8');
let preguFreq=JSON.parse(data);

function fPreguFreq (){
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
    if (a.title> b.title) {
        return 1;
    }
    if (a.title< b.title) {
        return -1;
    }
    // a must be equal to b
    return 0;
    });

    return arrPreguFreq
}

exports.fPreguFreq = fPreguFreq;