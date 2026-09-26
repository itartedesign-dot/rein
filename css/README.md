# Rein — Beyond styles of rèsonance

Sito ufficiale del pittore **Rein** (Sicilia): galleria e vendita di opere originali dipinte a mano, in italiano e inglese.

## Pubblicazione su GitHub Pages
1. Crea un nuovo repository, **`rein`**.
2. Carica **tutto il contenuto** di questa cartella mantenendo la struttura: `index.html`, `README.md`, `og-image.jpg` e le cartelle `css/`, `js/`, `img/`, `media/`. Dal browser: **Add file → Upload files** e trascina le cartelle.
3. **Settings → Pages →** *Deploy from a branch*, branch `main`, cartella `/ (root)`.
4. Dopo un paio di minuti il sito è online su `https://itartedesign-dot.github.io/rein/`.

## Da fare una volta sola
- **Moduli (ordini e contatti):** usano il servizio gratuito FormSubmit verso itartedesign@gmail.com. Al primo invio dal nuovo sito arriva un'email di attivazione: clicca il link e da lì in poi ordini e messaggi arrivano direttamente.
- **PayPal:** i pagamenti vanno a buono.p@alice.it. Per vendere opere è consigliato un conto **PayPal Business** (gratuito). La conferma certa di ogni pagamento arriva da PayPal via email: controllala sempre prima di spedire.

## Come funziona l'acquisto
1. Il cliente preme **Acquista** sotto l'opera (o nella scheda dell'opera).
2. Nel modulo l'opera è già indicata con prezzo, 100 € di spedizione e totale; il cliente inserisce i dati di spedizione.
3. Premendo **Invia e paga con PayPal**, i dati dell'ordine arrivano via email e si apre PayPal con l'importo esatto.
4. A pagamento concluso PayPal riporta il cliente sul sito, dove compare il riepilogo con il ringraziamento. Se il pagamento viene annullato, il sito lo segnala e permette di riprovare.

## Gestire le opere
Tutte le opere sono nel file `js/data.js`:
- **Opera venduta:** metti `sold: true` → compare il badge "Venduta" e il pulsante d'acquisto si disattiva.
- **Cambiare un prezzo:** modifica `price`.
- **Nuova opera:** copia un blocco, cambia titoli e testi (IT/EN), misure, prezzo e metti le immagini in `img/` con lo stesso schema di nomi (`id.jpg`, `id-sm.jpg`, `id-d1.jpg`…, `id-room.jpg`).

## Contenuti
- 5 opere con foto intera, dettagli e ambientazione in salotto. Toccando qualsiasi immagine della scheda si apre lo **zoom** (dita, rotella del mouse, doppio tocco, pulsanti + e −; la X riporta alla scheda).
- Sezione **L'evoluzione di «Confidenze di Maggio»**: sei fasi (`img/evo-1.jpg` … `evo-6.jpg`), ricostruite con Paintstep dalla foto dell'opera.
- Biografia dell'artista, sezione **Paintstep** con video demo, informazioni su acquisto e spedizione, modulo contatti, icona Pinterest (da collegare in seguito in `index.html`).

© 2026 Rein · itartedesign@gmail.com

## SEO
- Titolo, descrizione, H1 e testi in italiano sono già scritti nella pagina, leggibili da Google anche senza JavaScript.
- Dati strutturati (schema.org): sito, artista, app Paintstep e ogni opera come prodotto con prezzo, disponibilità e spedizione.
- `sitemap.xml` e `robots.txt` inclusi. Per farti trovare prima: registra il sito su **Google Search Console** e invia `https://itartedesign-dot.github.io/rein/sitemap.xml`.
- Quando vendi un'opera o cambi un prezzo, aggiorna anche lo stesso valore nel blocco `application/ld+json` di `index.html` (oppure chiedimi di rigenerarlo).
