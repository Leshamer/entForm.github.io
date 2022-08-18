const mainForm = document.querySelector('form');
const button = document.querySelector('button');
const waves = document.querySelectorAll('.wawes');
const inputLog = document.querySelector('.log_class');
const inputPas = document.querySelector('.pas_class');
const labLog = document.querySelector('.lab_log');
const labPas = document.querySelector('.lab_pas');


button.addEventListener("mouseover", mausOverBut);
button.addEventListener("mouseout", mausOutBut);

// ---- Кнопка ----

function mausOverBut(){
   waves.forEach((elem) => {
       elem.style.transition = 'all 2s';
       elem.style.translate = '0px -30px';
 })
}
function mausOutBut(){
   waves.forEach((elem) => {
       elem.style.transition = 'all 2s';
       elem.style.translate = '0px 0px';
 })
}
//
