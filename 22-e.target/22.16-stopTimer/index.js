let timerInterval 
let seconds = 0

document.body.addEventListener('click', (e)=>{
  if(e.target.id === 'start'){
    startTimer()
  } else if (e.target.id === 'finish'){
    stopTimer()
  }
})

function startTimer(){
  if(!timerInterval){
    timerInterval = setInterval(updateTimer, 1000)
  }
}

function stopTimer(){
  clearInterval(timerInterval)
  timerInterval = null
}

function updateTimer(){
  seconds++
  console.log(`${seconds}`)
}
