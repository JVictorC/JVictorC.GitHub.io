const divPontosRelevantes = document.getElementById('ul-pontos-relevantes')
const divButtons = document.getElementsByClassName('buttons')[0];
window.onload = function () {
  divPontosRelevantes.addEventListener('click', changeDiv)
  divButtons.addEventListener('click', teste)
  
}

function teste (event) {
  const elementoAlvo = event.target

  if (elementoAlvo === divButtons) {

  } else {
    let href = elementoAlvo.href;
    href = href.split('#');
    href = href[1];
    let divSelecionado = document.getElementById(href).parentElement
    divSelecionado.style.transition = '2s'
    divSelecionado.style.backgroundColor = '#9a9a9a29';
    console.log(divSelecionado);
  }
}

function changeDiv(event) {
  const elementoAlvo = event.target;
  let paraggrafoSelecionado;
  if (elementoAlvo === divPontosRelevantes) {
  } else {
    let href = elementoAlvo.href.split('#')
    href = href[1];
    paraggrafoSelecionado = document.getElementById(href).nextElementSibling

    paraggrafoSelecionado.style.transition = '2s'
    paraggrafoSelecionado.style.backgroundColor = '#9a9a9a29';
    paraggrafoSelecionado.style.margin = '10px';
    paraggrafoSelecionado.style.border = '1px solid black';
  }
}