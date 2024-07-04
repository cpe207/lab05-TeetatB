// ชื่อ:ธีธัช บุญธรรม รหัสนักศึกษา:660610764
interface Hero {
  items: string[];
  gold: number;
}

interface Shop {
  item: string;
  price: number;
}

// assign interface/type to the function definition properly
function buyItem(hero :Hero, shop :Shop) {
  if(hero.gold >= shop.price ){
    hero.gold -= shop.price;
    hero.items.push(shop.item);
  }
  return hero;
}

//Test cases : assign proper type/interface to all objects
const hero1 = {
  items: ["sword", "potion"],
  gold: 50,
};

const shop1 = {
  item: "armor",
  price: 20,
};

const hero2 = {
  items: ["sword", "potion"],
  gold: 50,
};

const shop2 = {
  item: "legendary armor",
  price: 200,
};

console.log(buyItem(hero1, shop1));
console.log(buyItem(hero2, shop2));

module.exports = buyItem;
