const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){//close
    console.log("clickin")
    if(header.classList.contains('open')) {
        body.classList.remove("noscroll")
        header.classList.remove('open')
        fadeElements.forEach(function(elements){
            elements.classList.remove("fade-in")
            elements.classList.add("fade-out")
        })
        
    }
    else {//open
        body.classList.add("noscroll");
        header.classList.add('open');
        fadeElements.forEach(function(elements){
            elements.classList.remove("fade-out")
            elements.classList.add('fade-in');
        })
    }
})