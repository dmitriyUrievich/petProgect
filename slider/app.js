const upBtn  = document.querySelector('.up-button')
const downBtn  = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')

slidesCount =  mainSlide.querySelectorAll('div').length
sidebar.style.top = `-${(slidesCount - 1)*100}vh`
let activeSlide = 0

upBtn.addEventListener('click',()=>{
chengeSlide('up')

})

downBtn.addEventListener('click',()=>{
chengeSlide('down')

})

function chengeSlide (direction) {
  if(direction === 'up'){
    activeSlide++
      if(activeSlide === slidesCount){
        activeSlide =0
        }
  } else if(direction === 'down'){
      activeSlide--
        if (activeSlide<0){
          activeSlide = slidesCount-1
        }
  }
  const heigthCkreen =container.clientHeight

  mainSlide.style.transform =`translateY(-${activeSlide * heigthCkreen}px)`
  sidebar.style.transform =`translateY(${activeSlide * heigthCkreen}px)`

}
