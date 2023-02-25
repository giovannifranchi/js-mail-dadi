Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

------------

//Si crea un Array di mail autorizzate
//Si crea variabile isPresent settata a false
//Si Crea una variabile con la mail di input
//Si fa un ciclo for con index a 0 che dura fino a quando è minore della lunghezza di iscritti Array
    //Se dentro il ciclo array iscritti ha un valore uguale all'email di input si setta isPresent a true e si rompe il ciclo
//Si stampa in console isPresent
//Se isPresent è false allora si logga il messaggio che l'utente non è abilitato a giocare
//Altrimenti 
    //Si crea la variabile giocatore 1 uguale a un numero randomico da 1 a 6 (math.floor(math.Random(6-1)+1)) 
    //Si crea la variabile giocatore 2 uguuale a un numero randomico da 1 a 6 (math.floor(math.Random(6-1)+1)) 
    //Se giocatore 1 è uguale a giocatore 2
        //Stampa in console 'pareggio'
    //O se giocatore 1 è maggiore giocatore 2 
        //Stampa in console 'vince giocatore 1'
    //Altrimenti
        //Stampa in console 'vince giocatore 2'



-------