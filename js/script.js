// ========================ESERCIZIO MAIL


// Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.

// // chiedo la mail all'utente 
 const mailUtente = prompt("Inserisci la tua mail");
// // inserisco nell'array le mail valide
const mailOk = ["luca00@gmail.com", "paolo121@gmail.com", "info@test.it"];
let verify = false

// // controllo l'array con un ciclo per vedere se la mail è corretta 
 for (let i = 0; i < mailOk.length; i++) {
     if (mailOk[i] == mailUtente) {
         verify = true;
     }
 }

// //mando un alert per dare all'utente l'esito
 if (verify) {
     alert('Accesso consentito');

// =========================LANCIO DADI

     // inserisco le variabili

        let user;
        let pc;
        let result;

        // apro un ciclo per lanciare i dati

        for (let i = 1; i <= 1; i++){
            user=Math.floor(Math.random()* 6) +1;
            console.log("il dato dell'utente ha come risultato " + user);
            pc=Math.floor(Math.random()* 6) +1;  
            console.log("il dato del pc ha come risultato " + pc); 
        // con una condizione verifico il vincitore tramite il risultato 
            if (user > pc){
                alert("user win")
                console.log("L'utente ha vinto" + result);
            } else if (user < pc) {
                alert("pc win")
                console.log("Il computer ha vinto" + result);
            } else {
                alert("pareggio")
                console.log("pareggio" + result);
            }
            
        }
  } else {
    alert('Accesso negato');
    }






