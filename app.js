const startBtn = document.querySelector("#start")
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

let time = 0
let score = 0

startBtn.addEventListener("click",(event)=>{
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener("click",event=>{
  if(event.target.classList.contains('time-btn')){
   time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})

board.addEventListener("click",event =>{
  if (event.target.classList.contains('circle')){
    score++
    event.target.remove()
    createCircle()
  }
})

setTime = (value) =>{ timeEl.innerHTML = `00:${value}` }

function startGame () {
  setInterval(decreaseTime,1000)
  createCircle()
  setTime(time)
}

function finishGame () {
  console.log('bb;bjkb')
  timeEl.parentNode.classList.add('hide')
  board.innerHTML=`<h2>Cчет: <span Class="primary">${score}</span></h2>`
}

function decreaseTime (){
  if(time===0){
    finishGame()
  } else {
    let currentTime = --time
    if(currentTime<10){
      currentTime = `0${currentTime}`
    }
    setTime(currentTime)
  }
}

function createCircle (){
  const circle = document.createElement('div')
  const {width, height} = board.getBoundingClientRect()
  const size = getSize(10,30)
  const x =  getSize(0, width-size)
  const y = getSize(0, height-size)
  const color = getRandomColor()
  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.left =`${x}px`
  circle.style.top =`${y}px`
  circle.style.background = `${color}`
  circle.style.boxShadow = `0 0 10px ${color}`
  board.append(circle)
}

function getSize (min,max){
 return  Math.round(Math.random()*(max-min)+min)
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

