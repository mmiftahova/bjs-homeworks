console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

const getNames = () => weapons.map(a => a.name);

const getCountReliableWeapons = (durability) => weapons.filter(b => b.durability > durability).length;


const hasReliableWeapons = (durability) => weapons.some(c =>c.durability > durability);

const getReliableWeaponsNames = (durability) => weapons.filter(i => i.durability > durability).map(b => b.name);

const getTotalDamage = () => weapons.reduce((a, b) => a + b.attack, 0);
