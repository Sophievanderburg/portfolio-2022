talen = ["Hello.", "Hallo.", "Hola.", "Hallå.","Ciao.", "Hej.", "Óla.", "Privet."]

const text =  document.querySelector('main div section h2')
const button = document.querySelector('main > button')

let number = 0

let amount = text.textContent.length

function animationOn(){
  console.log("aan")
  text.style.setProperty('animation', 'typing 2s steps( ' + amount + ', end) forwards, blink-caret 1s step-end infinite')
}

function animationOff(){
  console.log("uit")
  text.style.setProperty('animation', '')
}


function changeText (){
  setTimeout(()=>{
    number += 1;
    text.textContent = talen[number]
    if ( number == talen.length -1 ) {
      number = -1
    }
    amount = text.textContent.length
    animationOn()
  }, 500)

}

animationOn()
// setInterval(animationOff, 3000)
// setInterval(changeText, 3000)

let interval1 = setInterval(animationOff, 3000)
let interval2 = setInterval(changeText, 3000)

button.addEventListener('click', ()=>{
  console.log("click")
  clearInterval(interval1)
  clearInterval(interval2)
  
  animationOff()
  text.innerHTML = talen[0]
  text.style.setProperty('width','100%')
  text.style.setProperty('border','none')
  button.style.setProperty('display', 'none')
})