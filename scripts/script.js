talen = ["Hello.", "Hallo.", "Bonjour.", "Hola.", "Hallå."]

let number = 0

const text =  document.querySelector('main div section h2')

function changeText (){
  number += 1;
  text.innerHTML = talen[number]
   console.log('change')
  if ( number == talen.length -1 ) {
    number = 0
  } 
}

function opacityAan(){
  setTimeout(changeText, 2000)
  console.log("aan")
  text.style.setProperty('opacity','1')
}

function opacityUit(){
  setTimeout(()=>{
    console.log("uit")
    text.style.setProperty('opacity','0')
  },1500)
  
}

setInterval(opacityAan, 2000)
setInterval(opacityUit, 2000)