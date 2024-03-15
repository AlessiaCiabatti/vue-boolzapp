const { createApp } = Vue;

createApp({
  data(){
    // è la zona in cui definisco lo stato di tutte le cose
    
    return{
      
      contacts: [
        {
            name: 'Michele',
            avatar: './img/avatar_1.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: './img/avatar_2.png',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: './img/avatar_3.png',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: './img/avatar_6.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Federico',
            avatar: './img/avatar_7.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Davide',
            avatar: './img/avatar_8.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
        },
      ],
      // in questo caso 0 si riferisce all'indice del primo contatto dell'array
      // devo far si che il mio primo utente sia attivo, quindi il primo indicie del primo utente è uguale ad utenteAttivo?
      utenteAttivo: 0,
      newMsg: '',
      //   4
      contactToSearch: '',
      msgCancellato: '',
      toggleChevron: false,
      optionsChevron: false,
    }
  },
  // 2
  methods:{
    // gli do il parametro ma passo index come parametro perchè index è in HTML e non è dentro i parametri che ho
    attivareUtente(index){
      this.utenteAttivo = index;
      console.log('cliccato')
    },

    toggleOptions() {
        console.log('cliccato')
        this.optionsVisible = !this.optionsVisible;
      },

    // 5
    cancellaMsg(messageIndex){
        console.log('cliccato')
        // splice, 1: elimina solo un solo elemento e restituisce l'array con gli elementi rimanenti
        // prendo i messaggi dell'utente di contacts
        this.contacts[this.utenteAttivo].messages.splice(messageIndex, 1);
        this.msgCancellato = '';
    },

    // 3
    addNewMsg(event){
      console.log('aggiungi');
      // 3
      // Quando si utilizza JavaScript per gestire gli eventi della tastiera, si può controllare direttamente se event.key è uguale a 'Enter' senza bisogno di dichiarare alcuna costante
      if (event.key === 'Enter') {
        // devo aggiungere il nuovo messaggio alla lista dei messaggi del contatto attivo
        this.contacts[this.utenteAttivo].messages.push({
          // imposta la data e l'ora corrente
          date: new Date().toLocaleString(),
          message: this.newMsg,
          status: 'sent'
        });
        // reset: cancella il testo dall'input dopo l'invio
        this.newMsg = '';
      }

      // invia "OK" dopo 1 secondo
      setTimeout(() => {
        // aggiungi un nuovo messaggio di risposta "OK"
        this.contacts[this.utenteAttivo].messages.push({
          date: new Date().toLocaleString(),
          message: 'OK',
          status: 'received'
        });
      }, 1000);
    }
  },

// 4
  computed:{
    // sono dei metodi che devono avere un return
    // NON accettano parametri
    //  reagiscano al modificarsi di un dato in essa contenuto
    ricercaUtenti(){
        // filtro su contacts, il ciclo lo faccio sulla computed
        return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.contactToSearch.toLowerCase()));
    },
  },
}).mount('#app')