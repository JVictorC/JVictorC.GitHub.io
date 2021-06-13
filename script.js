const divPontosRelevantes = document.getElementById('ul-pontos-relevantes')
const divButtons = document.getElementsByClassName('buttons')[0];
window.onload = function () {
  divPontosRelevantes.addEventListener('click', changeDiv)
  divButtons.addEventListener('click', teste)

}

function teste(event) {
  const elementoAlvo = event.target

  if (elementoAlvo === divButtons) {

  } else {
    let href = elementoAlvo.href;
    href = href.split('#');
    href = href[1];
    if (href === 'about') {
      let divSelecionado = document.getElementById(href)
      divSelecionado.style.transition = '2s'
      divSelecionado.style.backgroundColor = '#19875432';
    } else {
      let divSelecionado = document.getElementById(href).parentElement
      divSelecionado.style.transition = '2s'
      divSelecionado.style.backgroundColor = '#19875432';
    }
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
    paraggrafoSelecionado.style.backgroundColor = '#19875432';
    paraggrafoSelecionado.style.margin = '10px';
  }
}