/*
    1. зявляються кнопки вибору тамагочі(pug,cat) через наслідування основного класу Tamagochi
    2. зявляэться інтерфейс тамагочі(кнопки:food,clean,run; шкала цих статів)
    3. Якщо програв показуэ скыльки часу прожив тамагочі і пропонуэ почати знову.
 */
let time = 0;
let temp;
let temp2;

class Tamagotchi{
    constructor(food,clean,happiness,point,maxStats) {
        this.food = food;
        this.clean = clean;
        this.happiness = happiness;
        this.point = point;
        this.maxStats = maxStats;
    }
    eatFood(){
        eat.onclick = () => {
            this.food += 30;
            this.clean -= 20;
        };
    }
    washUp(){
        clean.onclick = () => {
            this.clean += 40;
            this.happiness -= 20;
        };
    }
    goWalk(){
        run.onclick = () => {
            this.happiness += 15;
            this.food -= 10;
        };
    }
    increment(){
        if(this.food <= 0 || this.clean <= 0 || this.happiness <= 0){
            clearTimeout(temp);
            clearTimeout(temp2);
            alert(`Tamagochi existed ${time} seconds, press OK to restart`);
            d.style.display = 'block';
            v.style.display = 'none';

        }
        this.food -= this.point;
        let prog1 = document.querySelector('.out1');
        prog1.innerHTML = `<progress value="${this.food}" max ="${this.maxStats}"></progress>`;
        this.clean -= this.point;
        let prog2 = document.querySelector('.out2');
        prog2.innerHTML = `<progress value="${this.clean}" max ="${this.maxStats}"></progress>`;
        this.happiness -= this.point;
        let prog3 = document.querySelector('.out3');
        prog3.innerHTML = `<progress value="${this.happiness}" max ="${this.maxStats}"></progress>`;
    }
    decreasingPoints(){
        temp = setInterval(this.increment.bind(this),5000);
    }
}

class Pug extends Tamagotchi{
    constructor(food,clean,happiness,point,maxStats) {
        super(food,clean,happiness,point,maxStats);
    }
}

class Cat extends Tamagotchi{
    constructor(food,clean,happiness,point,maxStats) {
        super(food,clean,happiness,point,maxStats);
    }
}

let v = document.querySelector('.control-buttons');
v.style.display = 'none';
let d = document.querySelector('#type');

type.onclick = function (){
    d.style.display = 'none';
    v.style.display = 'block';
    function timerOfLive() {
        time++;
        temp2 = setTimeout(timerOfLive,1000);
    }
    timerOfLive();
}

function random2() {
    let rand2 = 50 + Math.random() * (70 + 1 - 50);
    return Math.floor(rand2);
}

function random() {
    let rand = 50 + Math.random() * (100 + 1 - 50);
    return Math.floor(rand);
}

pug.onclick = function () {
    let pug = new Pug(random2(),random2(),random2(),5,70);
    pug.eatFood();
    pug.washUp();
    pug.goWalk();
    pug.decreasingPoints();
    let prog1 = document.querySelector('.out1');
    prog1.innerHTML = `<progress value="${pug.food}" max ="${pug.maxStats}"></progress>`;
    let prog2 = document.querySelector('.out2');
    prog2.innerHTML = `<progress value="${pug.clean}" max ="${pug.maxStats}"></progress>`;
    let prog3 = document.querySelector('.out3');
    prog3.innerHTML = `<progress value="${pug.happiness}" max ="${pug.maxStats}"></progress>`;
}

cat.onclick = function () {
    let cat = new Cat(random(),random(),random(),3,100);
    cat.eatFood();
    cat.washUp();
    cat.goWalk();
    cat.decreasingPoints();
    let prog1 = document.querySelector('.out1');
    prog1.innerHTML = `<progress value="${cat.food}" max ="${cat.maxStats}"></progress>`;
    let prog2 = document.querySelector('.out2');
    prog2.innerHTML = `<progress value="${cat.clean}" max ="${cat.maxStats}"></progress>`;
    let prog3 = document.querySelector('.out3');
    prog3.innerHTML = `<progress value="${cat.happiness}" max ="${cat.maxStats}"></progress>`;
}

