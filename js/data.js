/* Rein — catalogo delle opere.
   Per aggiungere un'opera: copia un blocco, cambia i testi e le immagini in /img.
   Per segnare un'opera come venduta: sold: true */
'use strict';

const SITE = {
  artist: 'Rein',
  email: 'itartedesign@gmail.com',
  paypal: 'buono.p@alice.it',
  currency: 'EUR',
  shipping: 100,
  paintstep: 'https://itartedesign-dot.github.io/Paintstep/',
};

const WORKS = [
  {
    id: 'confidenze',
    title: { it: 'Confidenze di Maggio', en: 'May Confidences' },
    series: { it: 'Primavera', en: 'Spring' },
    technique: { it: 'Acrilico su tela', en: 'Acrylic on canvas' },
    size: [80, 60], year: 'Maggio 2026 · May 2026', price: 450, sold: false,
    images: ['confidenze.jpg', 'confidenze-d1.jpg', 'confidenze-d2.jpg', 'confidenze-d3.jpg', 'confidenze-d4.jpg', 'confidenze-d5.jpg'],
    room: 'confidenze-room.jpg',
    quote: null,
    text: {
      it: "Sotto un melo in fiore, sulla riva di un fiume che scorre lento verso il borgo, due donne si scambiano parole che il vento non riesce a portare via. È la primavera come la dipingevano gli impressionisti: nuvole sfilacciate nel cielo, la luce che accende i gialli delle case, i papaveri sparsi nell'erba alta. Guardala da vicino: la chioma del melo è costruita tocco dopo tocco, fiore dopo fiore. Un'opera che riempie una parete di aria, colore e quiete.",
      en: "Beneath an apple tree in bloom, on the bank of a river flowing slowly towards the village, two women share words the wind cannot carry away. This is spring as the Impressionists painted it: frayed clouds, light glowing on the yellow houses, poppies scattered through the tall grass. Look closely: the apple tree's crown is built touch by touch, blossom by blossom. A work that fills a wall with air, colour and stillness.",
    },
  },
  {
    id: 'turista',
    title: { it: 'La turista olandese', en: 'The Dutch Tourist' },
    series: null,
    technique: { it: 'Acrilico materico su tela', en: 'Textured acrylic on canvas' },
    size: [80, 60], year: 'Maggio 2026 · May 2026', price: 450, sold: false,
    images: ['turista.jpg', 'turista-d1.jpg', 'turista-d2.jpg', 'turista-d3.jpg', 'turista-d4.jpg'],
    room: 'turista-room.jpg',
    quote: null,
    text: {
      it: "Una giovane donna si ferma in un campo di iris viola, il mento appoggiato alla mano, lo sguardo perso oltre l'orizzonte. La pittura è materica, stesa a spatola e pennello: la veste bianca vibra di riflessi verdi e lilla, i fiori sono gesti densi di colore che si sollevano dalla tela e catturano la luce. Un ritratto di viaggio e di pensiero, sospeso tra paesaggio e intimità.",
      en: "A young woman pauses in a field of purple irises, chin resting on her hand, her gaze lost beyond the horizon. The paint is thick and textured, laid down with knife and brush: her white dress shimmers with green and lilac reflections, the flowers are dense gestures of colour rising from the canvas and catching the light. A portrait of travel and reverie, suspended between landscape and intimacy.",
    },
  },
  {
    id: 'goccia',
    title: { it: 'Goccia di luce', en: 'Drop of Light' },
    series: null,
    technique: { it: 'Acrilico su tela · Impressionismo', en: 'Acrylic on canvas · Impressionism' },
    size: [50, 70], year: '', price: 450, sold: false,
    images: ['goccia.jpg', 'goccia-d1.jpg', 'goccia-d2.jpg', 'goccia-d3.jpg', 'goccia-d4.jpg', 'goccia-d5.jpg', 'goccia-d6.jpg'],
    room: 'goccia-room.jpg',
    quote: null,
    text: {
      it: "Una ragazza corre a piedi nudi lungo un sentiero d'oro, avvolta in un abito azzurro che sembra fatto della stessa luce che attraversa. L'erba si piega al suo passaggio, i fiori si accendono come scintille, l'autunno arde sulla riva del fiume. È il linguaggio dell'Impressionismo — pennellate brevi, vibranti, piene di sole — al servizio di un istante di pura leggerezza.",
      en: "A girl runs barefoot along a golden path, wrapped in a blue dress that seems made of the very light she moves through. The grass bends as she passes, the flowers flicker like sparks, autumn blazes on the riverbank. The language of Impressionism — short, vibrant, sunlit strokes — devoted to a moment of pure lightness.",
    },
  },
  {
    id: 'vento',
    title: { it: 'Dove finisce il vento', en: 'Where the Wind Ends' },
    series: null,
    technique: { it: 'Acrilico su tela', en: 'Acrylic on canvas' },
    size: [40, 50], year: '', price: 300, sold: false,
    images: ['vento.jpg', 'vento-d1.jpg', 'vento-d2.jpg', 'vento-d3.jpg', 'vento-d4.jpg'],
    room: 'vento-room.jpg',
    pair: 'aurora',
    quote: {
      it: "L'albero che abita l'isola non è il più grande né il più forte. È semplicemente sopravvissuto. La corda, ancora l'isola. Un approdo…",
      en: "The tree that lives on the island is neither the tallest nor the strongest. It simply survived. The rope anchors the island. A landing place…",
    },
    text: {
      it: "Un'isola di roccia sospesa nel verde, un albero che vi ha messo radici, una corda sottile che la tiene legata al mondo. Fondi colati e trasparenti, dettagli minuti — le margherite, l'edera, un uccello in volo — per un'opera che parla di resistenza e di approdi. Forma un dittico ideale con «Aurora».",
      en: "A rock island suspended in green, a tree that has taken root there, a thin rope tying it to the world. Poured, transparent backgrounds and minute details — the daisies, the ivy, a bird in flight — in a work about resilience and safe harbours. It forms an ideal diptych with “Aurora”.",
    },
  },
  {
    id: 'aurora',
    title: { it: 'Aurora', en: 'Aurora' },
    series: null,
    technique: { it: 'Acrilico su tela', en: 'Acrylic on canvas' },
    size: [40, 50], year: '', price: 300, sold: false,
    images: ['aurora.jpg', 'aurora-d1.jpg', 'aurora-d2.jpg', 'aurora-d3.jpg', 'aurora-d4.jpg', 'aurora-d5.jpg', 'aurora-gallery.jpg'],
    room: 'aurora-room.jpg',
    pair: 'vento',
    frameNote: true,
    quote: {
      it: "Un albero o un fuoco silenzioso. L'isola trattiene il respiro.",
      en: "A tree or a silent fire. The island holds its breath.",
    },
    text: {
      it: "Una chioma rosso rubino che brilla come brace, un'isola di pietra avvolta dall'edera, un fondo di verdi e blu profondi. «Aurora» è il gemello notturno di «Dove finisce il vento»: insieme formano un dittico ideale.",
      en: "A ruby-red crown glowing like embers, a stone island wrapped in ivy, a background of deep greens and blues. “Aurora” is the nocturnal twin of “Where the Wind Ends”: together they form an ideal diptych.",
    },
  },
];

if (typeof module !== 'undefined') module.exports = { SITE, WORKS };
