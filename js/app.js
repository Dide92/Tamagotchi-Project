//Pseudocode
//make a prompt box for Tamagotchi's name
//make a life box showing your hunger, sleepiness and boredom level
//make a light switch button to show night or day
// hit 'I'm sleepy' button to raise the level of hunger
// hit 'feed me' button to raise the level of hunger
// hit 'play with me' button to raise the level of boredom
// let it morph after certain amount of time
// show age and keep increasing

// credits also goes to Tugce, Janine, Jeremy, Mateo and Michelle and many other online resouces including Udemy.com .
// ***********************************************************************************
//----------------------------------------------// 1st page animation

const myTamagotchi = document.createElement('img');
myTamagotchi.src = "https://st4.depositphotos.com/3369547/30838/v/600/depositphotos_308381332-stock-illustration-tamagotchi-retro-device-with-color.jpg"
myTamagotchi.style.borderRadius = "50%";
myTamagotchi.style.width = '150px';
myTamagotchi.style.float = 'left';
document.body.append(myTamagotchi);

setInterval(() => {
    const x = Math.floor(Math.random()* 1300)
    const y = Math.floor(Math.random() * -400)
    myTamagotchi.style.transform = `translate(${x}px,${y}px)`;
},1000)

//--------------------------------------------------------------
const eat = document.querySelector('#eat')
const sleepB = document.querySelector('#sleepButton')
const bored = document.querySelector('#bored')
const age = document.querySelector('#age')
const box = document.querySelector('.box')
const play = document.getElementById('playButton')
const baby =document.getElementById('baby')
const baby2 = document.getElementById('baby2')
const adult = document.getElementById('adult')
const checkbox = document.getElementById('light')
const angel = document.getElementById('angel')


//--------------------------------------------------------------
function startGame() {
    let petName=prompt("Please name your tamagotchi pet!")
    play.remove()
    box.remove()
    myTamagotchi.remove()
    eat.style.display='inline';
    sleepB.style.display='inline';
    bored.style.display='inline';
    age.style.display='inline';
    Tamagotchi.ageUp()
    Tamagotchi.sleepy()
    Tamagotchi.playWithMe()
    Tamagotchi.hunger()
    increaseFun()
    increaseHunger()
    increaseSleep()
    baby.style.visibility='visible'
    baby2.style.visibility='visible'
    adult.style.visibility='visible'
    angel.style.visibility='visible'
    // gameOver()
}
    play.addEventListener('click', startGame)

//--------------------------------------------------------------


class Game {
    constructor(hungry, sleep, bored, age) {
        this.hungry=100
        this.sleep=100
        this.bored=100
        this.age=0
    }
    hunger() {
        let interval = setInterval(() => {
            this.hungry-=10
            if (this.hungry<=10){
                clearInterval(interval)
                return gameOver()
            } else if ((this.hungry<=20)&&(this.sleep>1)&&(this.bored>1)) {
                alert("I need food!!!!")
            }
            document.querySelector('#yummy').innerHTML = this.hungry
        },7000);
        }
    playWithMe() {
            let myInterval= setInterval(() => {
                this.bored-=10
                if (this.bored<=10) {
                    clearInterval(myInterval)
                    return gameOver()
                } else if ((this.bored <=20) && (this.sleep>1) && (this.hungry>1)) {
                    alert("I need attention! Play with me!!!!")
                }
                document.querySelector('#fun').innerHTML = this.bored
            },7000)
        }
    sleepy() {
            let intervalId= setInterval(() => {
                 this.sleep-=10
                 document.body.style.opacity=1
                 if (this.sleep<=10) {
                     clearInterval(intervalId)
                     return gameOver()
                 } else if ((this.sleep <=20) && (this.hungry>1) && (this.bored>1)) {
                     alert("I need to sleep!!!!")
                 }
                 document.querySelector('#zzz').innerHTML = this.sleep
             },7000)
         }
    ageUp() {
            setInterval(() => {
            this.age++
            if (this.age <= 2) {
                baby.style.display='inline'
            } else if (this.age === 3) {
                baby.style.display='none'
                baby2.style.display='inline'
            } else if (this.age >= 6) {
                baby2.style.display='none'
                adult.style.display='inline'
            } else if(this.hungry<=10 || this.sleep<=10 || this.bored<=10) {
                adult.style.display='none'
            }
            document.querySelector('.year').innerHTML = this.age
            }, 6000)
            }
        }  

    const Tamagotchi = new Game ('My Tamagochi')
    
    Tamagotchi.ageUp()
    Tamagotchi.sleepy()
    Tamagotchi.playWithMe()
    Tamagotchi.hunger()

    function increaseHunger() {
        if(Tamagotchi.hungry <=90) {
            Tamagotchi.hungry+=10
        }
    document.querySelector('#yummy').innerHTML = Tamagotchi.hungry
    } 
    
    function increaseSleep() {
        if(Tamagotchi.sleep <=90) {
            Tamagotchi.sleep+=10
            document.body.style.opacity=0.3
        }
    document.querySelector('#zzz').innerHTML = Tamagotchi.sleep
    }

    function increaseFun() {
        if(Tamagotchi.bored <=90) {
            Tamagotchi.bored+=10
        }
    document.querySelector('#fun').innerHTML = Tamagotchi.bored
    }


eat.addEventListener('click', () => {
increaseHunger()
})

sleepB.addEventListener('click', () => {
increaseSleep()

})
    
bored.addEventListener('click', () => {
increaseFun()
})

function lightColor() {
    if(checkbox.checked != true) {
        document.body.style.opacity=0.3
    } else {
        document.body.style.opacity=1
    }
}

function gameOver() {
    adult.remove()
    eat.remove()
    sleepB.remove()
    bored.remove()
    age.remove()
    document.body.style.opacity=0.9
    angel.style.display='inline'
}

setInterval(() => {
    const y =  Math.floor(Math.random()* 1300)
    const z =  Math.floor(Math.random()* -400)
    angel.style.transform = `translate(${y}px, ${z}px)`;
},2000)
