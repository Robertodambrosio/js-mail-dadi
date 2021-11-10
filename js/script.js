// Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.


// chiedo la mail all'utente 
const mailUtente = prompt("Inserisci la tua mail");
// inserisco nell'array le mail valide
const mailOk = ["luca00@gmail.com", "paolo121@gmail.com", "info@test.it"];
let verify = false

// controllo l'array con un ciclo per vedere se la mail è corretta 
for (let i = 0; i < mailOk.length; i++) {
    if (mailOk[i] == mailUtente) {
        verify = true;
    }
}

//mando un alert per dare all'utente l'esito
if (verify) {
    alert('Accesso consentito');
} else {
    alert('Accesso negato');
}