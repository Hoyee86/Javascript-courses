const anyThing = document.querySelectorAll('.menuItem')
const oneEl = document.querySelector(".active")
const title = document.createElement("h2");
const body = document.querySelector('body')


const menuClicked = (curEl) => {
     for(let i = 0; i < anyThing.length; i++){
        anyThing[i].classList.remove('active')
     }

     curEl.classList.add('active')
        
}


body.appendChild(title);
title.innerHTML = "we can be going home"
