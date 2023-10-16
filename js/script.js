// MILESTONE 1 - CREAZIONE DI UNA LISTA DELLA SPESA
// - Chiediamo (prompt) all'utente i prodotti da acquistare e mettiamoli da qualche parte (dove?)
// - Continuiamo a chiedere prodotti fino a quando l'utente non inserisce "stop"

// MILESTONE 2 - STAMPA DELLA LISTA DELLA SPESA
// // Data la lista della spesa creata in precedenza, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente. 


let list = [];
let product = '';
while (product !== 'stop') {
    product = prompt('Aggiungi un elemento alla lista, se hai finito scrivi "stop"');
    product = product.toLocaleLowerCase().trim();
    if (product !== 'stop' && product !== '') {
        console.log (product);
        list.push (product);
    }
}
console.log (list);


for (let i = 0; i < list.length; i++) {
    const elemList = document.createElement('div');
    const listPrint = document.getElementById('list');
    elemList.innerHTML = '-' + ' ' + list[i];
    listPrint.append(elemList);
}
