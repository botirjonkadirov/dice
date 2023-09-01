const roll = document.getElementById(`roll`)
const hold = document.getElementById(`hold`)
const newGame = document.getElementById(`newGame`)
const dice = document.getElementById(`dice`)

dice.style.display=`none`

let score =0
let active=0
let scoreUp= [0, 0]
let gameOver = true
const switchGaymer = ()=>{
  score =0 
  document.getElementById(`now-score${active}`).textContent=score
  active= active == 0 ? 1 : 0
  if (active==1) {
      document.querySelector(`.gaymer1`).classList.add(`gaymer-active`)
      document.querySelector(`.gaymer0`).classList.remove(`gaymer-active`)
  } else {
      document.querySelector(`.gaymer0`).classList.add(`gaymer-active`)
      document.querySelector(`.gaymer1`).classList.remove(`gaymer-active`)
  }
}
roll.addEventListener(`click`, ()=>{
   if (gameOver) {
    dice.style.display=`block` 
    const l = Math.trunc(Math.random()*6+1)
    dice.src = `./dice-${l}.png`
  if (l !=1) {
    score+=l
    document.getElementById(`now-score${active}`).textContent=score
  } else { 
   switchGaymer()
  }
   }
})

hold.addEventListener(`click`, ()=>{
  if (gameOver) {
    scoreUp[active] += score
  document.getElementById(`score${active}`).textContent=scoreUp[active]
  if (scoreUp[active]>=20){
    document.querySelector(`.gaymer${active}`).classList.add(`winner`)
      gameOver=false
  } else {
    switchGaymer()
  }
  }
})

newGame.addEventListener(`click`, ()=>{
  dice.style.display=`none`
  score =0
  active=0
  scoreUp= [0, 0]
  gameOver = true
  document.getElementById(`now-score0`).textContent=score
  document.getElementById(`now-score1`).textContent=score
  document.getElementById(`score0`).textContent=scoreUp[active]
  document.getElementById(`score1`).textContent=scoreUp[active]
  document.querySelector(`.gaymer0`).classList.remove(`winner`)
  document.querySelector(`.gaymer1`).classList.remove(`winner`)
  document.querySelector(`.gaymer0`).classList.add(`gaymer-active`)
  document.querySelector(`.gaymer1`).classList.remove(`gaymer-active`)

})
