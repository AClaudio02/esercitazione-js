// CONSEGNA:
/\*

- Link per prendere i dati https://cataas.com/#/
- Scrivere uno script che recupera i tags dall'api, di questi ne prende dal quinto al decimo e dal quindicesimo al ventesimo
- creare un menù dropdown (select - option) con i 10 tag recuperati e alla selezione di un elemento del menù
- effettua una seconda chiamata all'api recuperando un elemento con il tag selezionato
- di questo elemento, bisogna mostrare nella pagina html la foto del gatto e i tags di quell'elemento
- formattati in questo modo "tag1 - tag2 - tag3"
-
- TIP:
- Gli endpoint da chiamare sono:
- /api/tags
- /cat/:tag?json=true
-
- TIP 2:
- Per recuperare il valore selezionato nella select, bisogna aggiungere l'eventListner a quest'ultima e recuperarne il value
  \*/

/\*\*

- ***
- Se non si riuscisse a fare la chiamata per recuperare i tag, questa è una risposta di esempio:
- const tagsResponse = ["","#christmascat","2cats","3","4","@Beardlyness","Beer","Belfast","BelfastMet","Black","Buckley","Cat","Cat in a faucet","Catto","Chair","CryptoWorld Cat","Curious","Cute","Dark","FAT","Female","Friends","Fulgencio","Going shopping?","Grumpy","Hiding"];
-
-
- Invece questa è una risposta di esempio del gatto:
- const catResponse = { "id":"61584d73a978ca001140353c", "created_at":"2021-10-02T12:15:47.129Z", "tags":["Orange","Lay","Chair"], "url":"/cat/61584d73a978ca001140353c" }
- ***
  \*/
