// window.addEventListener('scroll', onScroll);


// function onScroll(){
//     changeBackground();
//     window.setInterval("changeBackgroundBack()",800);
// };

// function changeBackground (){
//             document.querySelector("body").style.backgroundColor = '#170140';
// };

// function changeBackgroundBack (){
//     document.querySelector("body").style.backgroundColor = '#000000';
// };

let i = 0;
let txt = 'IT Professional'; /* The text */
let txt2 = 'Aberdeen, Scotland'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("profession").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
typeWriter();

