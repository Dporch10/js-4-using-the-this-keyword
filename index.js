let numbers = [ 1, 2, 3 ];
forEach(numbers, function(number){
    console.log(number)                     
})            

function forEach(){
numbers.forEach(function(number)
   { console.log(number)})
}

const tacoTruck = {
    revenue: 300,
    expenses: 100,
    profit: profit
}

const lemonadeStand = {
    revenue: 50,
    expenses: 15,
    profit: profit
}

function profit(){
    return this.revenue - this.expenses
    
}

tacoTruck.profit()                            
lemonadeStand.profit()                           

  
let dog = {
    sound: 'Arrrf!',
    playSound: function(){
        console.log(this.sound)
    }
}

let cat = {
    sound: 'Meoowww!',
    playSound: dog.playSound
}

dog.playSound()
cat.playSound()

let myNumbers = [ 1, 2, 3 ]
myNumbers.forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
}
myNumbers.forEach(function(element){
    console.log(element)
})

Array.prototype.forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
}

let myNumbers = [ 1, 2, 3 ]
myNumbers.forEach(function(element){
    console.log(element)
})



