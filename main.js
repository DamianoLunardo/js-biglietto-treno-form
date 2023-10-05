//Scrivere un programma che chieda all’utente:
//Il numero di chilometri da percorrere
//Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//La differenza è che i dati dell’utente li prenderemo da degli input, e calcoleremo il prezzo quando l’utente clicca su un pulsante ‘calcola’

document.getElementById('btn-calc').addEventListener('click', function () {
    // Recupera i valori inseriti dall'utente
    const name = document.getElementById('name').value;
    const km = parseFloat(document.getElementById('km').value);
    const age = parseInt(document.getElementById('age').value);

      // Verifica se i campi sono stati compilati correttamente
      if (!name || !km || isNaN(km) || km <= 0) {
        alert('Inserisci correttamente il nome del passeggero e il numero di chilometri.');
        return;
    }

    // Calcola il prezzo del biglietto e altri dettagli
    const basePrice = km * 0.21;
    let discount = 0;

    if (age === 0) {
        // Sconto del 20% per i minorenni
        discount = basePrice * 0.20;
    } else if (age === 2) {
        // Sconto del 40% per gli over 65
        discount = basePrice * 0.40;
    }

    const totalPrice = basePrice - discount;



    // Aggiorna i contenuti della sezione "output"
    document.querySelector('.output-name').textContent = name;
    document.querySelector('.output-offer').textContent = age === 0 ? 'Minorenne' : age === 2 ? 'Over 65' : 'Maggiorenne';
    document.querySelector('.output-train').textContent = 'Carrozza';
    document.querySelector('.output-code').textContent = 'Codice PC';
    document.querySelector('.output-cost').textContent = totalPrice.toFixed(2) + ' €';
});

document.getElementById('btn-reset').addEventListener('click', function () {
    // Reimposta i valori dei campi input
    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('age').value = '';

    // Svuota i contenuti della sezione "output"
    document.querySelector('.output-name').textContent = '';
    document.querySelector('.output-offer').textContent = '';
    document.querySelector('.output-train').textContent = '';
    document.querySelector('.output-code').textContent = '';
    document.querySelector('.output-cost').textContent = '';
});

