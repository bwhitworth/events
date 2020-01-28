pies = [
  {
    name: "Dutch Apple",
    price: 1000,
    isWarm: true,
    isOrganic: true,
    crust: "extra flaky",
    iceCream: "Vanilla Bean",
    isAvailable: true,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeazZvfyhYK0%2Fhqdefault.jpg&f=1&nofb=1",
    drinkPairing: "whiskey",
    instructor: "Zoe"
  },
  {
    name: "Regular Apple",
    price: 5000,
    isWarm: true,
    isOrganic: true,
    crust: "under-baked",
    iceCream: "Vegan Chocolate",
    isAvailable: false,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F960x960%2F3756298.jpg&f=1&nofb=1",
    drinkPairing: "all wines",
    instructor: "Mary"
  },
  {
    name: "Pizza",
    price: 2.5,
    isWarm: true,
    isOrganic: false,
    crust: "yeah!",
    iceCream: "nope",
    isAvailable: true,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F103315998%2Fimage.jpg&f=1&nofb=1",
    drinkPairing: "High Life",
    instructor: "Luke"
  },
  {
    name: "Berry",
    price: 1,
    isWarm: false,
    isOrganic: false,
    crust: "Oreo",
    iceCream: "peanut butter",
    isAvailable: true,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffood.fnr.sndimg.com%2Fcontent%2Fdam%2Fimages%2Ffood%2Ffullset%2F2014%2F2%2F19%2F0%2FFN_Blueberry-Pie_s4x3.jpg.rend.hgtvcom.616.462.suffix%2F1392869571058.jpeg&f=1&nofb=1",
    drinkPairing: "water",
    instructor: "Zoe"
  },
  {
    name: "Chocolate",
    price: 1,
    isWarm: false,
    isOrganic: true,
    crust: "graham",
    iceCream: "mint",
    isAvailable: true,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh6.googleusercontent.com%2F-dW-Dwg9V1ng%2FTXePpwWj_aI%2FAAAAAAAAA_g%2FaiwIBXuOq4c%2Fs1600%2FChocolate%2BPie.jpg&f=1&nofb=1",
    drinkPairing: "gin",
    instructor: "Mary"
  },
  {
    name: "Pi",
    price: 3.14,
    isWarm: false,
    isOrganic: true,
    crust: "crumb",
    iceCream: "Moose Tracks",
    isAvailable: true,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fassets.merriam-webster.com%2Fmw%2Fimages%2Farticle%2Fart-wap-article-main%2Fpi-mathematical-value-135%401x.jpg&f=1&nofb=1",
    drinkPairing: "milk",
    instructor: "Luke"
  },
  {
    name: "Cherry",
    price: 3,
    isWarm: true,
    isOrganic: false,
    crust: "homemade",
    iceCream: "sweet cream",
    isAvailable: true,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FoI8YZ2p0zaI%2Fhqdefault.jpg&f=1&nofb=1",
    drinkPairing: "milk",
    instructor: "Beth"
  },
  {
    name: "Pecan",
    price: 40,
    isWarm: false,
    isOrganic: true,
    crust: "store-bought",
    iceCream: "none",
    isAvailable: false,
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flilluna.com%2Fwp-content%2Fuploads%2F2018%2F07%2Fpecan-pie-final-resize-4-300x300.jpg&f=1&nofb=1",
    drinkPairing: "PBR",
    instructor: "Beth"
  },
];

console.log('pies', pies);

const printToDom = (divId, textToPrint) => {
  document.getElementById(divId).innerHTML = textToPrint;
};

const pieBuilder = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="pieCard">`;
    domString +=    `<div class="name">${arr[i].name}</div>`;
    domString +=    `<div class="img"><img src=${arr[i].imageUrl} alt="Pie Photo"></div>`
    domString +=    `<div class="inner"><p>Price: ${arr[i].price}</p>`;
    domString +=    `<p>Warm: ${arr[i].isWarm}</p>`;
    domString +=    `<p>Organic: ${arr[i].isOrganic}</p>`;
    domString +=    `<p>Crust: ${arr[i].crust}</p>`;
    domString +=    `<p>Ice Cream: ${arr[i].iceCream}</p>`;
    domString +=    `<p>Available: ${arr[i].isAvailable}</p>`;
    domString +=    `<p>Drink Pairing: ${arr[i].drinkPairing}</p>`;
    domString +=    `<p class="instructor">Instructor: ${arr[i].instructor}</p></div></div>`;
  }
  printToDom('pie-list', domString);
};

const findMyPies = (e) => {
  const buttonId = e.target.id
  if (buttonId === 'All') {
    pieBuilder(pies)
  } else {
  const myPies = [];
  for (let i = 0; i < pies.length; i++) {
  if (pies[i].instructor === buttonId) {
    myPies.push(pies[i]);
  }
  }
  pieBuilder(myPies);
}
};

const events = () => {
  document.getElementById('Zoe').addEventListener('click', findMyPies);
  document.getElementById('Mary').addEventListener('click', findMyPies);
  document.getElementById('Luke').addEventListener('click', findMyPies);
  document.getElementById('Beth').addEventListener('click', findMyPies);
  document.getElementById('All').addEventListener('click', findMyPies);
};

const init = () => {
  pieBuilder(pies);
  events();
};

init ();