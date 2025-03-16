let count = 0;

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let restart = document.getElementById("restart");
let counter = document.querySelector("span");
let id ;

start.addEventListener( "click", () => {
    id = setInterval( () => {
        count++;
        counter.textContent = count
        console.log(count);
        
    },1000)
})

stop.addEventListener( "click", () => {
    clearInterval(id)
})

restart.addEventListener( "click" ,() =>{
    clearInterval(id);
    counter.textContent = 0
})