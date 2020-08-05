class townElements {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class townPark extends townElements {
  constructor(name, buildYear, trees, parkArea) {
    super(name, buildYear);
    this.trees = trees;
    this.parkArea = parkArea;
  }

  treeDensity() {
    const treeDens = this.trees / this.parkArea;
    console.log(`${this.name} has a tree density of ${treeDens} trees per square Km.`);
  }
};

class townStreet extends townElements {
  constructor(name, buildYear, strLength, size) {
    super(name, buildYear);
    this.strLength = strLength;
    this.size = size;
  }

  strSize() {
    if (this.size < 5) {
      console.log(`${this.name}, built in ${this.buildYear}, is a small street.`);
    } else if (this.size > 5 && this.size < 9) {
      console.log(`${this.name}, built in ${this.buildYear}, is a big street.`);
    } else if (this.size === 5) {
      console.log(`${this.name}, built in ${this.buildYear}, is a normal street.`);
    } else {
      console.log(`${this.name}, built in ${this.buildYear}, is a huge street.`);
    }
  }
};

const townParks = [
  new townPark('Red Park', 1990, 1000, 20),
  new townPark('Orange Park', 2010, 500, 30),
  new townPark('Yellow Park', 2020, 3000, 50),
];

const townStreets = [
  new townStreet('GreenStreet', 1985, 10, 5),
  new townStreet('BlueStreet', 2000, 15, 9),
  new townStreet('PurpleStreet', 2005, 20, 2),
  new townStreet('WhiteStreet', 2015, 30, 10),
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

  return [sum, sum / arr.length];
};

function reportParks(p) {
  console.log('---------- Parks Report ----------')
  p.forEach(el => el.treeDensity());

  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  const i = p.map(el => el.trees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`)
};

function reportStreets(s) {
  console.log('--------- Streets Report ---------')
  s.forEach(el => el.strSize());

  const sLength = s.map(el => el.strLength);
  const [totalLength, avgLength] = calc(sLength);
  console.log(`Our ${s.length} streets have a total length of ${totalLength}Km, with an average of ${avgLength} Km.`);

};

reportParks(townParks);
reportStreets(townStreets);


