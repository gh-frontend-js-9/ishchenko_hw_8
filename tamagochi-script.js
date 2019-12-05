class Tamagotchi {
    constructor(food, clean, happiness, decreasingPoint, maxStats) {
        this.food = food;
        this.clean = clean;
        this.happiness = happiness;
        this.decreasingPoint = decreasingPoint;
        this.maxStats = maxStats;
    }
    eatFood() {
        eat.onclick = () => {
            this.food += 30;
            if(this.food > this.maxStats){
                this.food = this.maxStats;
                generateProgressBar('.eatProgressBarElem', this.maxStats, this.food);
                generateProgressBar('.washProgressBarElem', this.maxStats, this.clean);
            }
            generateProgressBar('.eatProgressBarElem', this.maxStats, this.food);
            this.clean -= 20;
            generateProgressBar('.washProgressBarElem', this.maxStats, this.clean);
        };
    }
    washUp() {
        clean.onclick = () => {
            this.clean += 40;
            if(this.clean > this.maxStats){
                this.clean = this.maxStats;
                generateProgressBar('.washProgressBarElem', this.maxStats, this.clean);
                generateProgressBar('.runProgressBarElem', this.maxStats, this.happiness);
            }
            generateProgressBar('.washProgressBarElem', this.maxStats, this.clean);
            this.happiness -= 20;
            generateProgressBar('.runProgressBarElem', this.maxStats, this.happiness);
        };
    }
    goWalk() {
        run.onclick = () => {
            this.happiness += 15;
            if(this.happiness > this.maxStats){
                this.happiness = this.maxStats;
                generateProgressBar('.runProgressBarElem', this.maxStats, this.happiness);
                generateProgressBar('.eatProgressBarElem', this.maxStats, this.food);
            }
            generateProgressBar('.runProgressBarElem', this.maxStats, this.happiness);
            this.food -= 10;
            generateProgressBar('.eatProgressBarElem', this.maxStats, this.food);
        };
    }
    decreasingInterval(){
        this.intervalAccess = setInterval(this.increment.bind(this), 5000);
        this.intervalStopGame = setInterval(this.stopGame.bind(this),1000);
        buttonControl('none','block');
    }
    increment() {
        this.food -= this.decreasingPoint;
        generateProgressBar('.eatProgressBarElem', this.maxStats, this.food);
        this.clean -= this.decreasingPoint;
        generateProgressBar('.washProgressBarElem', this.maxStats, this.clean);
        this.happiness -= this.decreasingPoint;
        generateProgressBar('.runProgressBarElem', this.maxStats, this.happiness);
    }
    timer(){
        this.time = 0;
        let timerOfLive = () => {
            document.querySelector('#out').innerHTML = this.time;
            this.time++;
            this.timerAccess = setTimeout(timerOfLive,1000);
        }
        timerOfLive();
    }
    stopGame(){
        if (this.food < 0 || this.clean < 0 || this.happiness < 0){
            clearInterval(this.intervalAccess);
            clearInterval(this.timerAccess);
            buttonControl('block','none');
            alert(`your tamagotchi existed ${this.time} sec`);
            return clearInterval(this.intervalStopGame);
        }
    }
    initialize(){
        this.eatFood();
        this.washUp();
        this.goWalk();
        this.timer();
        this.decreasingInterval();
    }
}


function buttonControl(typeBlock,controlBlock) {
    document.querySelector('#type').style.display = typeBlock;
    document.querySelector('.control-buttons').style.display = controlBlock;
}
buttonControl('block','none');

function generateProgressBar(elemId,max,value){
    return document.querySelector(elemId).innerHTML = `<progress value="${value}" max="${max}"></progress>`;
}

function random(a,b) {
    let rand = a + Math.random() * (b + 1 - a);
    return Math.floor(rand);
}


pug.onclick = function () {
    let pug = new Tamagotchi(random(50,70),random(50,70),random(50,70),5,70);
    pug.initialize();
    console.log(pug);
    generateProgressBar('.eatProgressBarElem',pug.maxStats,pug.food);
    generateProgressBar('.washProgressBarElem',pug.maxStats,pug.clean);
    generateProgressBar('.runProgressBarElem',pug.maxStats,pug.happiness);
}

cat.onclick = function () {
    let cat = new Tamagotchi(random(50,100),random(50,100),random(50,100),3,100);
    cat.initialize();
    generateProgressBar('.eatProgressBarElem',cat.maxStats,cat.food);
    generateProgressBar('.washProgressBarElem',cat.maxStats,cat.clean);
    generateProgressBar('.runProgressBarElem',cat.maxStats,cat.happiness);
}