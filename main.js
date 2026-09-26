/* Rein — logica del sito */
'use strict';
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- testi ---------- */
  const T = {
    it: {
      navWorks: 'Opere', navArtist: "L'artista", navBuy: 'Acquisto e spedizione', navContact: 'Contatti',
      heroEyebrow: 'Opere originali · Sicilia',
      heroTitle: "Dove l'anima vulcanica della Sicilia incontra la luce dell'Impressionismo francese.",
      heroCta: 'Scopri le opere', heroCta2: "Conosci l'artista",
      pt1: 'Pezzi unici dipinti a mano', pt2: 'Spedizione in tutto il mondo', pt3: 'Pagamento sicuro PayPal',
      manifesto: "«Ogni tela è un momento intimo: un legame silenzioso tra me, il pennello e il colore.»",
      worksEyebrow: 'Collezione 2026', worksTitle: 'Le opere',
      worksLead: "Originali unici, dipinti a mano in acrilico e firmati. Tocca un'opera per vederla da vicino, nei dettagli e ambientata in una stanza in scala reale.",
      artistEyebrow: "L'artista", artistTitle: 'Rein',
      bio1: "Ho 53 anni e vivo in Sicilia. Sono un autodidatta: nessuna accademia, solo anni di pittura e di scultura imparate con le mani, la pazienza e lo sguardo.",
      bio2: "Quando lavoro, il mondo intorno si spegne. Resta la passione, che diventa un legame profondo tra me, il pennello e la tela: un momento intimo, quasi un dialogo silenzioso.",
      bio3: "Amo la storia francese e da sempre mi affascina la vita di Maria Antonietta: la luce dei giardini di Versailles, l'eleganza e la malinconia di un'epoca. Nei miei quadri quella luce incontra l'anima vulcanica della mia terra. È da questo incontro che nasce la mia pittura: beyond styles of rèsonance, oltre gli stili, alla ricerca di una risonanza.",
      psEyebrow: "L'app dell'artista", psTitle: 'Paintstep: dipingi passo dopo passo',
      psLead: "Paintstep è l'app gratuita che ho ideato per chi vuole imparare a dipingere. Carichi l'immagine di un dipinto e l'app la scompone negli step di un vero pittore, suggerendo per ogni passaggio i colori, le miscele e i pennelli.",
      ps1t: 'Gli step di un pittore', ps1: 'Disegno, sfondo, masse scure, colori, chiari e bianchi: nello stesso ordine in cui si dipinge davvero.',
      ps2t: 'Le miscele dei colori', ps2: 'Per ogni tinta, le dosi dei colori primari per ottenerla, con olio, acrilico o acquerello.',
      ps3t: 'Zoom su ogni dettaglio', ps3: "Dividi l'opera in parti, ingrandisci e confronta ogni zona con l'originale.",
      ps4t: 'Il tuo video da condividere', ps4: 'Crea un video del tuo quadro step dopo step e condividi il risultato sui social.',
      psCta: 'Apri Paintstep', psFree: 'Gratis · 5 lingue · funziona nel browser, la tua immagine non lascia il dispositivo',
      buyEyebrow: 'Acquisto e spedizione', buyTitle: 'Dalla mia Sicilia alla tua parete',
      b1t: 'Originale unico', b1: "Ogni opera è un pezzo unico, dipinto a mano e firmato dall'artista. Non esistono copie.",
      b2t: 'Spedizione in tutto il mondo', b2: 'Spediamo ovunque nel mondo. Costo della spedizione: 100 € per opera.',
      b3t: 'Box a prova di rottura', b3: "Ogni tela viaggia protetta in un box rinforzato a prova di rottura, pensato per arrivare intatta.",
      b4t: 'Partenza entro 2 settimane', b4: "L'opera viene spedita entro 2 settimane dalla conferma del pagamento.",
      b5t: 'Pagamento sicuro', b5: "Paghi con PayPal all'indirizzo ufficiale dell'artista: i tuoi dati di pagamento restano protetti.",
      b6t: 'Senza cornice', b6: 'Le opere sono vendute solo su tela, senza cornice: pronte da incorniciare secondo il tuo gusto.',
      dutyNote: "Per spedizioni fuori dall'Unione Europea, eventuali dazi e tasse doganali del Paese di destinazione sono a carico dell'acquirente.",
      contactEyebrow: 'Contatti', contactTitle: 'Scrivimi',
      contactLead: "Per informazioni su un'opera, una dedica, o semplicemente per parlare di pittura. Rispondo personalmente.",
      fName: 'Nome', fEmail: 'Email', fWork: 'Opera di interesse', fMsg: 'Messaggio', fSend: 'Invia il messaggio',
      buy: 'Acquista', discover: "Scopri l'opera", zoomHint: 'Guarda da vicino',
      orderEyebrow: 'Acquisto', orderTitle: 'Il tuo ordine', shipData: 'Dati di spedizione',
      fFull: 'Nome e cognome', fPhone: 'Telefono', fCountry: 'Paese', fAddr: 'Indirizzo e numero civico', fCity: 'Città', fZip: 'CAP', fProv: 'Provincia / Stato', fNote: 'Note per la consegna (facoltative)',
      fAgree: "Confermo i dati: l'opera è venduta senza cornice e viene spedita entro 2 settimane in box a prova di rottura. Fuori dall'UE eventuali dazi sono a mio carico.",
      fPay: 'Invia e paga con PayPal',
      payNote: 'Verrai indirizzato a PayPal per il pagamento sicuro. Al termine tornerai qui per il riepilogo.',
      close: 'Chiudi', retry: 'Riprova',
      lWork: 'Opera', lShip: 'Spedizione in box a prova di rottura', lTotal: 'Totale',
      sTech: 'Tecnica', sSize: 'Misure', sYear: 'Data', sFrame: 'Cornice', sFrameV: 'Venduta senza cornice', sShip: 'Spedizione', sShipV: 'In tutto il mondo · 100 €', sLeave: 'Partenza', sLeaveV: 'Entro 2 settimane',
      plusShip: '+ 100 € spedizione',
      capWhole: 'Opera intera', capRoom: 'Ambientazione · in scala reale ({s} cm)', capDetail: 'Dettaglio {n}', capGallery: 'In galleria · la cornice è solo nella foto',
      pair: 'Dittico ideale con «{t}»', sold: 'Venduta', workAny: 'Nessuna in particolare',
      sending: 'Invio in corso…', errFill: 'Compila tutti i campi obbligatori con dati validi.', errAgree: 'Conferma i dati per proseguire.',
      errNet: "Non è stato possibile inviare il messaggio. Scrivimi direttamente a itartedesign@gmail.com.",
      okContact: 'Grazie, {n}. Il tuo messaggio è arrivato: ti risponderò al più presto.',
      thTitle: 'Grazie, {n}!',
      thIntro: "Il pagamento per <b>«{t}»</b> è stato completato. Ecco il riepilogo del tuo ordine <b>{id}</b>:",
      thTo: 'Spedizione a', thAfter: "L'opera partirà entro 2 settimane, protetta in un box a prova di rottura. Ti scriverò all'indirizzo <b>{e}</b> per ogni aggiornamento; riceverai anche la ricevuta di PayPal.",
      thQ: 'Per qualsiasi domanda: <a href="mailto:itartedesign@gmail.com">itartedesign@gmail.com</a>.',
      thSig: "Grazie per aver scelto di portare a casa un'opera di Rein: da oggi un frammento della mia Sicilia vive con te.",
      thGeneric: 'Grazie!', thGenericBody: "Il pagamento è stato completato. Riceverai la ricevuta di PayPal e ti scriverò per confermare la spedizione, che partirà entro 2 settimane in un box a prova di rottura.",
      cnTitle: 'Pagamento non completato', cnBody: "Il pagamento non è stato concluso e non è stato addebitato nulla. L'opera è ancora disponibile: puoi riprovare quando vuoi.",
      noFrameShort: 'Senza cornice',
    },
    en: {
      navWorks: 'Artworks', navArtist: 'The artist', navBuy: 'Purchase & shipping', navContact: 'Contact',
      heroEyebrow: 'Original artworks · Sicily',
      heroTitle: 'Where the volcanic soul of Sicily meets the light of French Impressionism.',
      heroCta: 'Discover the artworks', heroCta2: 'Meet the artist',
      pt1: 'Unique hand-painted pieces', pt2: 'Worldwide shipping', pt3: 'Secure PayPal payment',
      manifesto: '“Every canvas is an intimate moment: a silent bond between me, the brush and the colour.”',
      worksEyebrow: 'Collection 2026', worksTitle: 'The artworks',
      worksLead: 'Unique originals, hand-painted in acrylic and signed. Tap an artwork to see it up close, in detail and hung in a room at its real size.',
      artistEyebrow: 'The artist', artistTitle: 'Rein',
      bio1: "I am 53 and I live in Sicily. I am self-taught: no academy, just years of painting and sculpture learned with my hands, patience and a careful eye.",
      bio2: 'When I work, the world around me switches off. What remains is passion, which becomes a deep bond between me, the brush and the canvas: an intimate moment, almost a silent dialogue.',
      bio3: "I love French history and I have always been fascinated by the life of Marie Antoinette: the light of the gardens of Versailles, the elegance and melancholy of an era. In my paintings that light meets the volcanic soul of my land. My painting is born from this encounter: beyond styles of rèsonance, beyond styles, in search of a resonance.",
      psEyebrow: "The artist's app", psTitle: 'Paintstep: paint step by step',
      psLead: 'Paintstep is the free app I created for anyone who wants to learn to paint. Upload an image of a painting and the app breaks it down into the steps a real painter would follow, suggesting the colours, mixes and brushes for each one.',
      ps1t: "A painter's steps", ps1: 'Drawing, background, dark masses, colours, lights and whites: in the same order painting really happens.',
      ps2t: 'Colour mixes', ps2: 'For every tint, the amounts of primary colours to mix it, in oil, acrylic or watercolour.',
      ps3t: 'Zoom into every detail', ps3: 'Split the artwork into parts, zoom in and compare each area with the original.',
      ps4t: 'Your video to share', ps4: 'Create a step-by-step video of your painting and share the result on social media.',
      psCta: 'Open Paintstep', psFree: 'Free · 5 languages · runs in your browser, your image never leaves your device',
      buyEyebrow: 'Purchase & shipping', buyTitle: 'From my Sicily to your wall',
      b1t: 'Unique original', b1: 'Every artwork is a one-of-a-kind piece, hand-painted and signed by the artist. There are no copies.',
      b2t: 'Worldwide shipping', b2: 'We ship anywhere in the world. Shipping cost: €100 per artwork.',
      b3t: 'Break-proof box', b3: 'Every canvas travels in a reinforced, break-proof box designed to arrive intact.',
      b4t: 'Ships within 2 weeks', b4: 'The artwork is shipped within 2 weeks of payment confirmation.',
      b5t: 'Secure payment', b5: "Pay with PayPal to the artist's official account: your payment details stay protected.",
      b6t: 'Unframed', b6: 'Artworks are sold on canvas only, without a frame: ready to be framed to your taste.',
      dutyNote: 'For shipments outside the European Union, any customs duties and taxes of the destination country are paid by the buyer.',
      contactEyebrow: 'Contact', contactTitle: 'Write to me',
      contactLead: 'For information about an artwork, a dedication, or simply to talk about painting. I reply personally.',
      fName: 'Name', fEmail: 'Email', fWork: 'Artwork of interest', fMsg: 'Message', fSend: 'Send message',
      buy: 'Buy', discover: 'Discover the artwork', zoomHint: 'See up close',
      orderEyebrow: 'Purchase', orderTitle: 'Your order', shipData: 'Shipping details',
      fFull: 'Full name', fPhone: 'Phone', fCountry: 'Country', fAddr: 'Street address', fCity: 'City', fZip: 'Postal code', fProv: 'State / Province', fNote: 'Delivery notes (optional)',
      fAgree: 'I confirm my details: the artwork is sold unframed and ships within 2 weeks in a break-proof box. Outside the EU, any duties are paid by me.',
      fPay: 'Send and pay with PayPal',
      payNote: "You'll be taken to PayPal for secure payment. Afterwards you'll come back here for your summary.",
      close: 'Close', retry: 'Try again',
      lWork: 'Artwork', lShip: 'Shipping in a break-proof box', lTotal: 'Total',
      sTech: 'Technique', sSize: 'Size', sYear: 'Date', sFrame: 'Frame', sFrameV: 'Sold unframed', sShip: 'Shipping', sShipV: 'Worldwide · €100', sLeave: 'Dispatch', sLeaveV: 'Within 2 weeks',
      plusShip: '+ €100 shipping',
      capWhole: 'Full artwork', capRoom: 'In a room · real scale ({s} cm)', capDetail: 'Detail {n}', capGallery: 'In a gallery · the frame is only in the photo',
      pair: 'Ideal diptych with “{t}”', sold: 'Sold', workAny: 'None in particular',
      sending: 'Sending…', errFill: 'Please fill in all required fields with valid details.', errAgree: 'Please confirm your details to continue.',
      errNet: 'The message could not be sent. Please write directly to itartedesign@gmail.com.',
      okContact: 'Thank you, {n}. Your message has arrived: I will reply as soon as possible.',
      thTitle: 'Thank you, {n}!',
      thIntro: 'Your payment for <b>“{t}”</b> is complete. Here is the summary of your order <b>{id}</b>:',
      thTo: 'Shipping to', thAfter: "The artwork will ship within 2 weeks, protected in a break-proof box. I'll write to <b>{e}</b> with every update; you'll also receive the PayPal receipt.",
      thQ: 'For any question: <a href="mailto:itartedesign@gmail.com">itartedesign@gmail.com</a>.',
      thSig: 'Thank you for choosing to bring home a work by Rein: from today, a fragment of my Sicily lives with you.',
      thGeneric: 'Thank you!', thGenericBody: "Your payment is complete. You'll receive the PayPal receipt and I'll write to confirm shipping, which leaves within 2 weeks in a break-proof box.",
      cnTitle: 'Payment not completed', cnBody: 'The payment was not completed and nothing was charged. The artwork is still available: you can try again whenever you like.',
      noFrameShort: 'Unframed',
    },
  };
  let lang = localStorage.getItem('rein-lang');
  if (!T[lang]) lang = (navigator.language || 'it').toLowerCase().startsWith('it') ? 'it' : 'en';
  const t = (k, v) => (T[lang][k] ?? T.it[k] ?? k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ''));
  const L = (o) => (o ? o[lang] || o.it : '');
  const eur = (n) => (lang === 'it' ? `${n.toLocaleString('it-IT')} €` : `€${n.toLocaleString('en-GB')}`);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const sizeTxt = (w) => `${w.size[0]} × ${w.size[1]} cm`;
  const byId = (id) => WORKS.find((w) => w.id === id);

  function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    renderWorks(); fillWorkSelect();
    if (!$('#viewer').hidden) renderViewer();
    if (!$('#order').hidden && current) renderOrderItem(current);
  }
  $$('.lang button').forEach((b) => b.addEventListener('click', () => { lang = b.dataset.lang; localStorage.setItem('rein-lang', lang); applyLang(); }));

  /* ---------- menu ---------- */
  const burger = $('#burger'), menu = $('#menu');
  burger.addEventListener('click', () => { const o = !menu.classList.contains('open'); menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', String(o)); });
  $$('#menu a').forEach((a) => a.addEventListener('click', () => { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));
  const secs = ['opere', 'artista', 'paintstep', 'acquisto', 'contatti'].map((id) => document.getElementById(id));
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) $$('#menu a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  secs.forEach((s) => s && io.observe(s));

  /* ---------- opere ---------- */
  function renderWorks() {
    const box = $('#works');
    box.innerHTML = WORKS.map((w) => {
      const other = lang === 'it' ? w.title.en : w.title.it;
      const pair = w.pair ? `<p class="pair-note">${esc(t('pair', { t: L(byId(w.pair).title) }))}</p>` : '';
      const quote = w.quote ? `<p class="work-quote">${esc(L(w.quote))}</p>` : '';
      return `<article class="work" id="opera-${w.id}">
        <div class="work-media" data-open="${w.id}" role="button" tabindex="0" aria-label="${esc(t('discover'))}: ${esc(L(w.title))}">
          ${w.sold ? `<span class="badge-sold">${t('sold')}</span>` : ''}
          <img src="img/${w.id}-sm.jpg" srcset="img/${w.id}-sm.jpg 720w, img/${w.id}.jpg 1600w" sizes="(max-width: 980px) 92vw, 50vw" alt="${esc(L(w.title))} — Rein" loading="lazy">
          <span class="zoom-hint">${t('zoomHint')} ↗</span>
        </div>
        <div class="work-info">
          <h3>${esc(L(w.title))}</h3>
          ${other !== L(w.title) ? `<span class="en">${esc(other)}</span>` : ''}
          <p class="work-meta">${esc(L(w.technique))} · ${sizeTxt(w)} · ${t('noFrameShort')}</p>
          ${quote}${pair}
          <div class="work-price"><b>${eur(w.price)}</b><span>${t('plusShip')}</span></div>
          <div class="work-actions">
            <button class="btn btn-ghost" data-open="${w.id}">${t('discover')}</button>
            <button class="btn btn-gold" data-buy="${w.id}" ${w.sold ? 'disabled' : ''}>${w.sold ? t('sold') : t('buy')}</button>
          </div>
        </div>
      </article>`;
    }).join('');
    $$('[data-open]', box).forEach((el) => {
      el.addEventListener('click', () => openViewer(el.dataset.open));
      el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openViewer(el.dataset.open); } });
    });
    $$('[data-buy]', box).forEach((el) => el.addEventListener('click', () => openOrder(el.dataset.buy)));
  }

  /* ---------- scheda nera dell'opera ---------- */
  let current = null, slides = [], idx = 0, lastFocus = null;
  function buildSlides(w) {
    const s = [{ src: `img/${w.images[0]}`, cap: () => t('capWhole') }];
    s.push({ src: `img/${w.room}`, cap: () => t('capRoom', { s: `${w.size[0]}×${w.size[1]}` }), room: true });
    w.images.slice(1).forEach((f, i) => {
      if (/gallery/.test(f)) s.push({ src: `img/${f}`, cap: () => t('capGallery') });
      else s.push({ src: `img/${f}`, cap: () => t('capDetail', { n: i + 1 }) });
    });
    return s;
  }
  function openViewer(id) {
    current = byId(id); slides = buildSlides(current); idx = 0; lastFocus = document.activeElement;
    $('#viewer').hidden = false; document.body.style.overflow = 'hidden';
    renderViewer(); $('#vClose').focus();
  }
  function renderViewer() {
    const w = current;
    $('#vThumbs').innerHTML = slides.map((s, i) => `<button class="${s.room ? 'room' : ''}" data-i="${i}" aria-label="${esc(s.cap())}" aria-current="${i === idx}"><img src="${s.src}" alt="" loading="lazy"></button>`).join('');
    $$('#vThumbs button').forEach((b) => b.addEventListener('click', () => show(+b.dataset.i)));
    show(idx);
    $('#vTitle').textContent = L(w.title);
    const other = lang === 'it' ? w.title.en : w.title.it;
    $('#vSub').textContent = other !== L(w.title) ? other : '';
    $('#vQuote').textContent = w.quote ? L(w.quote) : ''; $('#vQuote').hidden = !w.quote;
    $('#vText').textContent = L(w.text);
    const rows = [[t('sTech'), L(w.technique)], [t('sSize'), sizeTxt(w)]];
    if (w.year) rows.push([t('sYear'), lang === 'it' ? w.year.split(' · ')[0] : (w.year.split(' · ')[1] || w.year)]);
    rows.push([t('sFrame'), t('sFrameV')], [t('sShip'), t('sShipV')], [t('sLeave'), t('sLeaveV')]);
    $('#vSpecs').innerHTML = rows.map(([a, b]) => `<dt>${esc(a)}</dt><dd>${esc(b)}</dd>`).join('');
    $('#vPrice').innerHTML = `${eur(w.price)}<small>${t('plusShip')}</small>`;
    $('#vBuy').disabled = !!w.sold; $('#vBuy').textContent = w.sold ? t('sold') : t('buy');
  }
  function show(i) {
    idx = (i + slides.length) % slides.length;
    const im = $('#vImg'); im.src = slides[idx].src; im.alt = `${L(current.title)} — ${slides[idx].cap()}`;
    im.style.animation = 'none'; void im.offsetWidth; im.style.animation = '';
    $('#vCap').textContent = slides[idx].cap();
    $$('#vThumbs button').forEach((b, k) => b.setAttribute('aria-current', String(k === idx)));
    const th = $$('#vThumbs button')[idx]; if (th) th.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  function closeViewer() { $('#viewer').hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
  $('#vPrev').addEventListener('click', () => show(idx - 1));
  $('#vNext').addEventListener('click', () => show(idx + 1));
  $('#vClose').addEventListener('click', closeViewer);
  $('#vBuy').addEventListener('click', () => { const id = current.id; closeViewer(); openOrder(id); });
  let sx = null;
  $('#vStage').addEventListener('pointerdown', (e) => { sx = e.clientX; });
  $('#vStage').addEventListener('pointerup', (e) => { if (sx == null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1)); });
  document.addEventListener('keydown', (e) => {
    if (!$('#viewer').hidden) {
      if (e.key === 'Escape') closeViewer();
      if (e.key === 'ArrowRight') show(idx + 1);
      if (e.key === 'ArrowLeft') show(idx - 1);
    } else if (e.key === 'Escape') { closeModal('order'); closeModal('thanks'); }
  });

  /* ---------- ordine ---------- */
  function openModal(id) { $('#' + id).hidden = false; document.body.style.overflow = 'hidden'; }
  function closeModal(id) { $('#' + id).hidden = true; if ($('#viewer').hidden) document.body.style.overflow = ''; }
  $$('.modal').forEach((m) => m.addEventListener('click', (e) => { if (e.target === m) closeModal(m.id); }));
  $('#oClose').addEventListener('click', () => closeModal('order'));
  $('#tClose').addEventListener('click', () => closeModal('thanks'));
  $('#tOk').addEventListener('click', () => closeModal('thanks'));

  function lines(w) {
    return `<div class="o-lines"><span>${t('lWork')}</span><span>${eur(w.price)}</span><span>${t('lShip')}</span><span>${eur(SITE.shipping)}</span><span class="tot">${t('lTotal')}</span><span class="tot">${eur(w.price + SITE.shipping)}</span></div>`;
  }
  function renderOrderItem(w) {
    $('#oItem').innerHTML = `<img src="img/${w.id}-sm.jpg" alt=""><div><h5>${esc(L(w.title))}</h5><p class="work-meta">${esc(L(w.technique))} · ${sizeTxt(w)} · ${t('noFrameShort')}</p>${lines(w)}</div>`;
  }
  function openOrder(id) {
    current = byId(id);
    if (!current || current.sold) return;
    renderOrderItem(current);
    const saved = JSON.parse(localStorage.getItem('rein-buyer') || 'null');
    if (saved) Object.entries(saved).forEach(([k, v]) => { const f = $(`#orderForm [name="${k}"]`); if (f && !f.value) f.value = v; });
    $('#oErr').hidden = true;
    openModal('order');
    setTimeout(() => $('#oName').focus(), 60);
  }
  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const fsPost = async (data) => {
    const ctrl = new AbortController(); const to = setTimeout(() => ctrl.abort(), 7000);
    try {
      const r = await fetch('https://formsubmit.co/ajax/' + SITE.email, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data), signal: ctrl.signal,
      });
      const j = await r.json().catch(() => ({}));
      return r.ok && String(j.success) !== 'false';
    } finally { clearTimeout(to); }
  };
  $('#orderForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = e.target, err = $('#oErr'), btn = $('#oSend');
    if (f._honey.value) return;
    const need = ['nome', 'email', 'telefono', 'paese', 'indirizzo', 'citta', 'cap'];
    const bad = need.find((k) => !f[k].value.trim()) || (!emailOk(f.email.value.trim()) && 'email');
    if (bad) { err.textContent = t('errFill'); err.hidden = false; f[bad].focus(); return; }
    if (!$('#oOk').checked) { err.textContent = t('errAgree'); err.hidden = false; return; }
    err.hidden = true;
    const w = current, id = 'REIN-' + Date.now().toString(36).toUpperCase();
    const buyer = {}; [...need, 'provincia', 'note'].forEach((k) => { buyer[k] = f[k].value.trim(); });
    localStorage.setItem('rein-buyer', JSON.stringify(buyer));
    localStorage.setItem('rein-order', JSON.stringify({ id, work: w.id, buyer, lang, at: Date.now() }));
    btn.disabled = true; btn.textContent = t('sending');
    try {
      await fsPost({
        _subject: `Nuovo ordine ${id} – ${w.title.it} (${w.price + SITE.shipping} €)`, _template: 'table', _captcha: 'false', _replyto: buyer.email,
        Ordine: id, Opera: `${w.title.it} – ${w.technique.it}, ${sizeTxt(w)}, senza cornice`, Prezzo: `${w.price} €`, Spedizione: `${SITE.shipping} €`, Totale: `${w.price + SITE.shipping} €`,
        Nome: buyer.nome, Email: buyer.email, Telefono: buyer.telefono, Indirizzo: buyer.indirizzo, Città: buyer.citta, CAP: buyer.cap, Provincia: buyer.provincia || '-', Paese: buyer.paese, Note: buyer.note || '-', Lingua: lang.toUpperCase(),
        Stato: 'In attesa del pagamento PayPal',
      });
    } catch { /* l'ordine prosegue comunque su PayPal */ }
    const base = location.href.split(/[?#]/)[0];
    const p = new URLSearchParams({
      cmd: '_xclick', business: SITE.paypal, charset: 'utf-8', lc: lang === 'it' ? 'IT' : 'GB',
      item_name: `${w.title.it} – Rein – ${sizeTxt(w)}`, item_number: w.id, invoice: id, custom: id,
      amount: w.price.toFixed(2), shipping: SITE.shipping.toFixed(2), currency_code: SITE.currency,
      no_shipping: '1', no_note: '1', rm: '1',
      return: `${base}?ordine=ok&id=${id}`, cancel_return: `${base}?ordine=annullato&opera=${w.id}`,
    });
    location.href = 'https://www.paypal.com/cgi-bin/webscr?' + p.toString();
  });

  /* ---------- ritorno da PayPal: riepilogo e grazie ---------- */
  function handleReturn() {
    const q = new URLSearchParams(location.search);
    const st = q.get('ordine'); if (!st) return;
    history.replaceState(null, '', location.pathname + location.hash);
    const o = JSON.parse(localStorage.getItem('rein-order') || 'null');
    if (o && T[o.lang]) { lang = o.lang; applyLang(); }
    if (st === 'ok') {
      const w = o && byId(o.work);
      if (w && (!q.get('id') || q.get('id') === o.id)) {
        const b = o.buyer;
        $('#tTitle').textContent = t('thTitle', { n: b.nome.split(' ')[0] });
        $('#tBody').innerHTML = `<p>${t('thIntro', { t: esc(L(w.title)), id: esc(o.id) })}</p>
          <div class="sum"><span>${esc(L(w.title))} — ${esc(L(w.technique))}, ${sizeTxt(w)}, ${t('noFrameShort').toLowerCase()}</span><span>${eur(w.price)}</span>
          <span>${t('lShip')}</span><span>${eur(SITE.shipping)}</span><span class="tot">${t('lTotal')}</span><span class="tot">${eur(w.price + SITE.shipping)}</span></div>
          <p><b>${t('thTo')}:</b> ${esc(b.nome)}, ${esc(b.indirizzo)}, ${esc(b.cap)} ${esc(b.citta)}${b.provincia ? ' (' + esc(b.provincia) + ')' : ''}, ${esc(b.paese)}</p>
          <p>${t('thAfter', { e: esc(b.email) })}</p><p>${t('thQ')}</p><p class="sig">${t('thSig')}</p>`;
        localStorage.removeItem('rein-order');
      } else {
        $('#tTitle').textContent = t('thGeneric');
        $('#tBody').innerHTML = `<p>${t('thGenericBody')}</p><p>${t('thQ')}</p><p class="sig">${t('thSig')}</p>`;
      }
      $('#tOk').textContent = t('close'); $('#tOk').onclick = () => closeModal('thanks');
    } else {
      $('#tTitle').textContent = t('cnTitle');
      $('#tBody').innerHTML = `<p>${t('cnBody')}</p>`;
      const id = q.get('opera') || (o && o.work);
      $('#tOk').textContent = id ? t('retry') : t('close');
      $('#tOk').onclick = () => { closeModal('thanks'); if (id) openOrder(id); };
    }
    openModal('thanks');
  }

  /* ---------- contatti ---------- */
  function fillWorkSelect() {
    const s = $('#cWork'), v = s.value;
    s.innerHTML = `<option value="">${esc(t('workAny'))}</option>` + WORKS.map((w) => `<option value="${esc(w.title.it)}">${esc(L(w.title))}</option>`).join('');
    s.value = v;
  }
  $('#contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = e.target, err = $('#cErr'), ok = $('#cOk'), btn = $('#cSend');
    if (f._honey.value) return;
    const name = f.name.value.trim(), email = f.email.value.trim(), msg = f.message.value.trim();
    if (!name || !emailOk(email) || !msg) { err.textContent = t('errFill'); err.hidden = false; return; }
    err.hidden = true; btn.disabled = true; btn.textContent = t('sending');
    try {
      const sent = await fsPost({ _subject: `Messaggio dal sito Rein – ${name}`, _template: 'table', _captcha: 'false', _replyto: email, Nome: name, Email: email, Opera: f.work.value || '-', Messaggio: msg, Lingua: lang.toUpperCase() });
      if (!sent) throw new Error('send');
      ok.textContent = t('okContact', { n: name.split(' ')[0] }); ok.hidden = false; f.reset();
    } catch { err.textContent = t('errNet'); err.hidden = false; }
    finally { btn.disabled = false; btn.textContent = t('fSend'); }
  });

  applyLang();
  handleReturn();
})();
