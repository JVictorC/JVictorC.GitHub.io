const divPontosRelevantes = document.getElementById('ul-pontos-relevantes')
const divButtons = document.getElementsByClassName('buttons')[0];
let $topicos = $('#container-info-features h3')
let $projects = $('#div-projetos h4')
let $elementPrevius;
let $angulo;

window.onload = function () {
  divPontosRelevantes.addEventListener('click', changeDiv)
  divButtons.addEventListener('click', selectDiv)

  // Codigo inspirado em um video visto no Youtube link https://www.youtube.com/watch?v=X6tGovYrQCo&ab_channel=Fl%C3%A1vioCoutinho
  $topicos.click(function toggle(e) {
    $topicos = $(e.currentTarget);
    let $topicoId = e.currentTarget.id
    let $p = $topicos.next();
    if ($elementPrevius === $topicoId) {
      $p.slideToggle();
      if ($angulo === 0) {
        toSpinArrow180($topicoId)
      } else {
        toSpinArrow0($topicoId)
      }
    } else {
      slideUp();
      $p.slideToggle();
      toSpinArrow180($topicoId)
    }
    $elementPrevius = $topicoId;
  })
  slideUp();
  iconDown();

  $projects.click(function toggle(e) {
    $projects = $(e.currentTarget);
    let $idProject = e.currentTarget.id
    let $div = $projects.next();
    $div.slideToggle();
    toSpinArrowProjects();
  })
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
    $elementPrevius = href;
    slideUp();
    slideDown(href);
    toSpinArrow180(href);
    changeColor(pSelect);
  }
}


function iconDown() {
  const $divPai = $('#container-info-features h3')
  for (let i = 0; i < $divPai.length; i += 1) {
    let icon = document.createElement('i')
    icon.className = "fad fa-angle-double-down ms-3";
    icon.style.transition = '1s'
    $divPai[i].append(icon)
  }
}

function toSpinArrow180(valueClass) {
  let $classSelect = $(`#${valueClass} i`)
  $classSelect.css('transform', ' rotate(180deg)')
  $angulo = 180;

}

function toSpinArrow0(valueClass) {
  let $classSelect = $(`#${valueClass} i`)
  $classSelect.css('transform', ' rotate(0deg)')
  $angulo = 0;

}

function toSpinArrowProjects() {
  let $iSelect = $(`#div-projetos i`)
  for (let i = 0; i < $iSelect.length; i += 1) {
    let iTag = $iSelect[i];
    let tranform = iTag.style.transform
    if (tranform === 'rotate(0deg)') {
      iTag.style.transform = ' rotate(180deg)'
    } else if (tranform === 'rotate(180deg)'){
      iTag.style.transform = ' rotate(0deg)';
    } else {
      iTag.style.transform = ' rotate(180deg)'
    }
  }

}