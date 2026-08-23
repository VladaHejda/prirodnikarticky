// Přírodní kartičky - Products data and cart helpers
// Global product catalog

(function() {
  'use strict';

  // Shared variants for kartičky (14 motifs)
  window.KARTICKY_VARIANTS = [
    {label:'Kompletně vystřižené', price:'95 Kč'},
    {label:'K vystřižení', price:'70 Kč'},
    {label:'PDF verze', price:'30 Kč'}
  ];

  // Products catalog organized by category
  window.PRODUCTS = {
    karticky: [
      {id:'ovoce', name:'Ovoce', category:'karticky', images:['karticky-ovoce.jpg','karticky-ovoce-detail.jpg'], desc:'Barevné ovoce z celého světa – jablka, hrušky, banány i exotické plody. Skvělé pro první pojmenovávání a třídění dle barvy či tvaru.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'},
      {id:'zelenina', name:'Zelenina', category:'karticky', images:['karticky-zelenina.jpg','karticky-zelenina-detail.jpg'], desc:'Zelenina ze zahrádky i z obchodu. Děti poznávají tvary, barvy a vůně čerstvé zeleniny a učí se, co roste nad zemí a co pod ní.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'},
      {id:'ovozel', name:'Ovozel – přiřazování barev', category:'karticky', images:['karticky-ovozel.jpg','karticky-ovozel-detail.jpg'], desc:'Kombinace ovoce a zeleniny s herním prvkem přiřazování ke správné barvě. Rozvíjí pozornost, logiku a znalost barev.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'},
      {id:'hmyzi-rodinka', name:'Hmyzí rodinka', category:'karticky', images:['karticky-hmyzi-rodinka.jpg','karticky-hmyzi-rodinka-detail.jpg'], desc:'Fascinující svět hmyzu – včely, motýli, broučci a jiní šestinožci. Ideální pro malé přírodovědce.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'},
      {id:'zimni-spanek', name:'Zvířata a zimní spánek', category:'karticky', images:['karticky-zimni-spanek.jpg','karticky-zimni-spanek-detail.jpg'], desc:'Která zvířata spí celou zimu? Děti poznávají ježky, medvědy, plchy a jejich útulné zimní úkryty.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'},
      {id:'v-lese', name:'V lese', category:'karticky', images:['karticky-v-lese.jpg','karticky-v-lese-detail.jpg'], desc:'Lesní prostředí plné překvapení – stromy, houby, zvěř a vůně borovic.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'},
      {id:'na-farme', name:'Na farmě', category:'karticky', images:['karticky-na-farme.jpg','karticky-na-farme-detail.jpg'], desc:'Slepice, kravičky, prasátka i traktor. Farmářský svět v kapse.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'},
      {id:'v-savane', name:'V savaně', category:'karticky', images:['karticky-v-savane.jpg','karticky-v-savane-detail.jpg'], desc:'Lvi, sloni, žirafy a baobaby. Africká savana jako ilustrovaná dobrodružná výprava.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'},
      {id:'v-morich', name:'V mořích a oceánech', category:'karticky', images:['karticky-more-oceany.jpg','karticky-more-oceany-detail.jpg'], desc:'Hlubiny i mělčiny oceánů – od delfínů přes chobotnice až po korálové útesy.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'},
      {id:'na-horach', name:'Na horách', category:'karticky', images:['karticky-na-horach.jpg','karticky-na-horach-detail.jpg'], desc:'Kamzíci, ledovce, alpské louky a horská jezera.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'},
      {id:'doma', name:'Doma', category:'karticky', images:['karticky-doma.jpg','karticky-doma-detail.jpg'], desc:'Každodenní svět dítěte – nábytek, kuchyňské nádobí, hračky i domácí mazlíčci.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'},
      {id:'v-dzungli', name:'V džungli', category:'karticky', images:['karticky-v-dzungli.jpg','karticky-v-dzungli-detail.jpg'], desc:'Tropický deštný les plný barev a zvuků – papoušci, leguáni, orchideje.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'},
      {id:'polarni-kruh', name:'Za polárním kruhem', category:'karticky', images:['karticky-polarni-kruh.jpg','karticky-polarni-kruh-detail.jpg'], desc:'Ledový svět tučňáků, polárních medvědů, sobů a severního světla.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'},
      {id:'na-stavbe', name:'Na stavbě', category:'karticky', images:['karticky-na-stavbe.jpg','karticky-na-stavbe-detail.jpg'], desc:'Bagry, jeřáby, míchačky a pracovní stroje – kartičky pro malé stavbaře.', age:'od 1,5 roku', variants:window.KARTICKY_VARIANTS, price:'30 Kč'}
    ],

    sady: [
      {id:'sada-8-prostredi', name:'8 různých prostředí + přiřazování ke stínům', category:'sada', images:['sada-8-prostredi.jpg','sada-8-prostredi-detail.jpg'], desc:'Komplexní sada pro děti od 1,5 roku – 8 kartiček ze zcela odlišných prostředí světa doplněná o hru přiřazování obrázků ke stínům.', age:'od 1,5 roku', price:'700 Kč', variants:window.KARTICKY_VARIANTS},
      {id:'sada-dopravni', name:'Dopravní prostředky', category:'sada', images:['sada-dopravni.jpg','sada-dopravni-detail.jpg'], desc:'Sada 3 kartiček s oblíbenými dopravními prostředky a přiřazováním obrázků ke stínům.', age:'od 1,5 roku', price:'250 Kč', variants:window.KARTICKY_VARIANTS},
      {id:'sada-vlastni', name:'5 kartiček dle vlastního výběru', category:'sada', images:['sada-vlastni-vyber.jpg','sada-vlastni-vyber-detail.jpg'], desc:'Sestavte si sadu přesně podle svého! Vyberte libovolných 5 motivů z celé nabídky.', age:'dle výběru', price:'420 Kč', variants:window.KARTICKY_VARIANTS}
    ],

    sesity: [
      {id:'jarni-sesit', name:'Jarní pracovní sešit', category:'sesit', images:['jarni-sesit.jpg','jarni-sesit-detail.jpg'], desc:'Sešit plný jarního probouzení – úkoly o přírodě, rostlinách a zvířatech, která se vrací po zimě.', age:'1,5–3 roky', price:'450 Kč', variants:[{label:'Zalaminovaný sešit',price:'450 Kč'},{label:'PDF ke stažení',price:'100 Kč'},{label:'Kroužková vazba',price:'+10 Kč'}]},
      {id:'letni-sesit', name:'Letní pracovní sešit', category:'sesit', images:['letni-sesit.jpg','letni-sesit-detail.jpg'], desc:'Sešit plný letního dobrodružství – úkoly zaměřené na přírodu, zvířata a letní zážitky.', age:'1,5–3 roky', price:'450 Kč', variants:[{label:'Zalaminovaný sešit',price:'450 Kč'},{label:'PDF ke stažení',price:'100 Kč'},{label:'Kroužková vazba',price:'+10 Kč'}]}
    ]
  };

  // Helper: find product by ID across all categories
  window.getProductById = function(id) {
    var categories = ['karticky', 'sady', 'sesity'];
    for (var i = 0; i < categories.length; i++) {
      var cat = categories[i];
      var products = window.PRODUCTS[cat];
      for (var j = 0; j < products.length; j++) {
        if (products[j].id === id) {
          return {product: products[j], category: cat};
        }
      }
    }
    return null;
  };

  // Helper: parse price string to number
  window.parsePriceKc = function(priceStr) {
    if (typeof priceStr !== 'string') return 0;
    var match = priceStr.match(/(\d+)\s*Kč/);
    return match ? parseInt(match[1], 10) : 0;
  };

  // Cart helpers
  window.cartGet = function() {
    try {
      var cart = localStorage.getItem('pk_cart');
      return cart ? JSON.parse(cart) : [];
    } catch(e) {
      return [];
    }
  };

  window.cartSave = function(cart) {
    try {
      localStorage.setItem('pk_cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('storage'));
    } catch(e) {
      console.error('Failed to save cart:', e);
    }
  };

  window.cartAdd = function(item) {
    var cart = window.cartGet();
    var found = false;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === item.id && cart[i].variant === item.variant) {
        cart[i].qty = (cart[i].qty || 1) + (item.qty || 1);
        found = true;
        break;
      }
    }
    if (!found) {
      cart.push({
        id: item.id,
        name: item.name,
        variant: item.variant,
        variantPrice: item.variantPrice,
        qty: item.qty || 1
      });
    }
    window.cartSave(cart);
  };

  window.cartCount = function() {
    var cart = window.cartGet();
    var count = 0;
    for (var i = 0; i < cart.length; i++) {
      count += cart[i].qty || 1;
    }
    return count;
  };

})();
