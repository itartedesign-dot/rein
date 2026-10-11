/* =====================================================================
   REIN — statistiche delle visite senza cookie (GoatCounter)
   ---------------------------------------------------------------------
   Conta le pagine viste senza cookie e senza dati personali: niente
   banner, niente profilazione. Il pannello con i numeri è su
   https://CODICE.goatcounter.com (accesso con l'account GoatCounter).

   CODICE = il nome scelto quando si crea il sito su goatcounter.com.
   Se è diverso da quello qui sotto, basta cambiare questa riga.
   Lasciandolo vuoto ('') le statistiche sono spente.
   ===================================================================== */
(function () {
  var CODICE = 'resonance';
  if (!CODICE) return;
  if (!/\.github\.io$/.test(location.hostname) && !/rein|resonance/.test(location.hostname)) return;   // niente conteggi in locale o su copie del sito
  if (navigator.doNotTrack === '1') return;                                                              // rispetta chi chiede di non essere contato
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + CODICE + '.goatcounter.com/count');
  document.head.appendChild(s);
})();
