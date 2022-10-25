// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      //eu estou vivo ainda
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      //eu estou morto
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      //eu estou vivo ainda
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      //eu estou morto
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    //escolher de dentro da array vikingArmy um viking aleatoriamente
    //escolher de dentro da array saxonArmy um saxon aleatoriamente

    //meus index randoms
    let indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length); // 2
    let indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length); // 4

    //capturar meus soldados
    //                 array  [        2       ]
    let saxon = this.saxonArmy[indexRandomSaxon];

    //                  array   [        4        ]
    let viking = this.vikingArmy[indexRandomViking];

    let result = saxon.receiveDamage(viking.attack());
    console.log(result);
    if (saxon.health <= 0) {
      //saxon morreu. preciso retirar esse saxon de dentro da array saxonArmy
      this.saxonArmy.splice(indexRandomSaxon, 1);
    }

    return result;
  }

  saxonAttack() {
    //meus index randoms
    let indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length); // 2
    let indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length); // 4

    //capturar meus soldados
    //                array  [       4        ]
    let viking = this.vikingArmy[indexRandomViking];

    //                array  [       2       ]
    let saxon = this.saxonArmy[indexRandomSaxon];

    let result = viking.receiveDamage(saxon.attack());

    if (viking.health <= 0) {
      //viking morreu. preciso retirar esse saxon de dentro da array saxonArmy
      this.vikingArmy.splice(indexRandomViking, 1);
    }

    return result;
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    }

    if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    }

    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

const war = new War();

const saxon1 = new Saxon(100, 50);
const saxon2 = new Saxon(100, 50);

const vikin1 = new Viking("Viking1", 100, 40);
const vikin2 = new Viking("Viking2", 100, 40);

war.addViking(vikin1);
war.addViking(vikin2);

war.addSaxon(saxon1);
war.addSaxon(saxon2);

console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());

console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());

console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());

console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());

console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());