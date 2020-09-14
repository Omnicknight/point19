const list = new List(); 
list.addItem(new Item("First"));
list.addItem(new Item("Second"));
list.addItem(new Item("Third"));

// list.toggleItem(1);
// setTimeout(() => {
//     list.toggleItem(1);
// }, 1000);

const first = new Unit('Sniper', 50, 100);
const second = new Unit('Infantryman', 100, 30);
const third = new Unit('Sapper', 70, 80);

first.showUnit();
second.showUnit();
third.showUnit();