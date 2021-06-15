const divPontosRelevantes = document.getElementById('ul-pontos-relevantes')
const divButtons = document.getElementsByClassName('buttons')[0];
let $topicos = $('#container-info-features h3')



window.onload = function () {
  divPontosRelevantes.addEventListener('click', changeDiv)
  divButtons.addEventListener('click', selectDiv)

  // Codigo inspirado em um video visto no Youtube link https://www.youtube.com/watch?v=X6tGovYrQCo&ab_channel=Fl%C3%A1vioCoutinho
  $topicos.click(function toggle(e) {
    $topicos = $(e.currentTarget);
    let $p = $topicos.next();
    slideUp();
    $p.slideToggle();
  })
  slideUp();

}

function slideUp() {
  let $h3 = $('#container-info-features h3')
  for (let i = 0; i < $h3.length; i++) {
    let $p = $h3.next()
    $p.slideUp('slow')
  }
}

function slideDown(value) {
  let $h3 = $(`#${value}`)
  for (let i = 0; i < $h3.length; i++) {
    let $p = $h3.next()
    $p.slideDown('slow')
  }
}


function selectDiv(event) {
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
  let pSelect;
  if (elementoAlvo === divPontosRelevantes) {
  } else {
    let href = elementoAlvo.href.split('#')
    href = href[1];
    pSelect = document.getElementById(href).nextElementSibling
    slideUp();
    slideDown(href)
    changeColor(pSelect)
  }
}
