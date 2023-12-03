let timerInterval
let seconds = 0

document.body.addEventListener('click', (e)=>{
  if(e.target.tagName === 'BUTTON'){
    startTimer()
  }
})

function startTimer(){
  if(!timerInterval){
    timerInterval = setInterval(updateTimer, 1000)
  }
}

function updateTimer(){
  seconds++
  console.log(`${seconds}`)
}

