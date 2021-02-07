console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() { 
	let namesObj = weapons.map(function(a) {
		return a.name;
	})
	return namesObj;
}

function getCountReliableWeapons (durability) {
	let countDurability = weapons.filter(function(b) {
		
		return b.durability > durability
	
	}, durability)

	return countDurability.length;
}

function hasReliableWeapons (durability) {
	return weapons.some(function(c) {
		return c.durability > durability;
	})
}

function getReliableWeaponsNames(durability) {
	let countDurability = weapons.filter(function(i) {
	return i.durability > durability;
	})

	return countDurability.map(function(b) {
		return b.name;
	})
}

function getTotalDamage() {

	return weapons.reduce(function(a, b) {
		return a + b.attack;
	}, 0)
}
