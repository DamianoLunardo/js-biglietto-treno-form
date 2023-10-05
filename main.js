//Scrivere un programma che chieda all’utente:
//Il numero di chilometri da percorrere
//Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//La differenza è che i dati dell’utente li prenderemo da degli input, e calcoleremo il prezzo quando l’utente clicca su un pulsante ‘calcola’

document.getElementById('btn-calc').addEventListener('click', function () {
    // Recupera i valori inseriti dall'utente
    var km = parseFloat(document.getElementById('km').value);
    var age = parseInt(document.getElementById('age').value);

    // Calcola il prezzo del biglietto
    var basePrice = km * 0.21;
    var discount = 0;

    if (age === 0) {
        // Sconto del 20% per i minorenni
        discount = basePrice * 0.20;
    } else if (age === 2) {
        // Sconto del 40% per gli over 65
        discount = basePrice * 0.40;
    }

    var totalPrice = basePrice - discount;

    // Stampa il prezzo totale sulla console
    console.log('Il prezzo del biglietto è: ' + totalPrice.toFixed(2) + ' €');
});