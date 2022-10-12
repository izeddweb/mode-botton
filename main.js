// Set Var
const contentBtn = document.querySelector('span');
const btn = document.querySelector('button');


btn.onclick = function(){
  contentBtn.classList.toggle('style-moon')
  btn.classList.toggle('style-sun')
  btn.style.translate=('200px')
}
