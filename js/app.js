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
        
}