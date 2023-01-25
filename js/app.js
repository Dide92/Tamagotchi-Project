//Pseudocode
//make a prompt box for Tamagotchi's name
//make a life box showing your hunger, sleepiness and boredom level
//make a light switch button to show night or day
// hit 'I'm sleepy' button to raise the level of hunger
// hit 'feed me' button to raise the level of hunger
// hit 'play with me' button to raise the level of boredom
// let it morph after certain amount of time
// show age and keep increasing

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

//--------------------------------------------------------------

play.addEventListener('click', () => {
    let petName=prompt("Please name your tamagotchi pet!")
    play.remove()
    box.remove()
    myTamagotchi.remove()
    eat.style.display='inline';
    sleepB.style.display='inline';
    bored.style.display='inline';
    age.style.display='inline';
    baby.style.display='inline';
    // removeBaby()
    // addBaby2()
    // removeBaby2()
    // addAdult()
    Tamagotchi.ageUp()
    Tamagotchi.sleepy()
    Tamagotchi.playWithMe()
    Tamagotchi.hunger()
    increaseFun()
    increaseHunger()
    increaseSleep()
    // gameOver()
    
})
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
            if (this.hungry<=0){
                clearInterval(interval)
                return gameOver()
            } else if (this.hungry < 1) {
                alert("I need food!!!!")
            }
            document.querySelector('#yummy').innerHTML = this.hungry
        },7000);
        }
    playWithMe() {
            let myInterval= setInterval(() => {
                this.bored-=10
                if (this.bored<=0) {
                    clearInterval(myInterval)
                    return gameOver()
                } else if (this.bored < 1) {
                    lert("I need attention! Play with me!!!!")
                }
                document.querySelector('#fun').innerHTML = this.bored
            },7000)
        }
    sleepy() {
            let intervalId= setInterval(() => {
                 this.sleep-=10
                 document.body.style.opacity=1
                 if (this.sleep<=0) {
                     clearInterval(intervalId)
                     return gameOver()
                 } else if (this.sleep <1) {
                     alert("I need to sleep!!!!")
                 }
                 document.querySelector('#zzz').innerHTML = this.sleep
             },7000)
         }
    ageUp() {
            setInterval(() => {
            this.age++
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
    alert('Your Tamagotchi is dead :(')
    adult.remove()
    eat.remove()
    sleepB.remove()
    bored.remove()
    age.remove()
    document.body.style.opacity=0.9
}
