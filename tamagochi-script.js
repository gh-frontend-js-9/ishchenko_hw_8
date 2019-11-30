/*
    1. зявляються кнопки вибору тамагочі(pug,cat) через наслідування основного класу Tamagochi
    2. зявляэться інтерфейс тамагочі(кнопки:food,clean,run; шкала цих статів)
    3. Якщо програв показуэ скыльки часу прожив тамагочі і пропонуэ почати знову.
 */
class Tamagotchi{
    constructor(food,clean,happiness) {
        this.food = food;
        this.clean = clean;
        this.happiness = happiness;
    }
    eatFood(){
       
    }
    washUp(){

    }
    goWalk(){

    }
}

class Pug extends Tamagotchi{
    constructor(food,clean,happiness) {
        super(food,clean,happiness);
    }
}

class Cat extends Tamagotchi{
    constructor(food,clean,happiness) {
        super(food,clean,happiness);
    }
}



let v = document.querySelector('.control-buttons');
v.style.display = 'none';

type.onclick = function (){
    let d = document.querySelector('#type');
    d.style.display = 'none';
    v.style.display = 'block';
}



function randomInteger() {
    let rand = 50 + Math.random() * (100 + 1 - 50);
    return Math.floor(rand);
}

pug.onclick = function () {
    let pug = new Pug(randomInteger(),randomInteger(),randomInteger());
    console.log(pug);
    pug.eatFood();
    pug.goWalk();
    pug.washUp()

}

cat.onclick = function () {
    let cat = new Cat(randomInteger(),randomInteger(),randomInteger());
}

