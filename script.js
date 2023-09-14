//parallex effect
let model = document.getElementById('model');
let laptop = document.getElementById('laptop');
let screen = document.getElementById('screen');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    model.style.marginLeft = value * 0.7 + 'px';
    screen.style.left = value * -2 + 'px';
    laptop.style.left = value * -0.5 + 'px';
    laptop.style.top = value * 0.25 + 'px';
})
//***************************************************************************//
//Other input box function
document.addEventListener('DOMContentLoaded', function() {
    const optionsDropdown = document.getElementById('options');
    const inputBox = document.querySelector('.input-box');
  
    optionsDropdown.addEventListener('change', function() {
      if (optionsDropdown.value === 'others') {
        inputBox.style.display = 'block';
      } else {
        inputBox.style.display = 'none';
      }
    });
});
//***************************************************************************//

//hacker effect
const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.getElementById('whatfix').onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letters, index) => {
            if(index < iterations) {
                return event.target.dataset.value[index];
            }

            return letter[Math.floor(Math.random() * 26)]
        })
        .join("");

        if(iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1 / 4;
    }, 30);
}