let $topicos = $('.grids h1')
let $projects = $('#div-projetos h4')
let $listRelevante = $('#pontos-relevantes p')
let $elementPrevius;
const sectionCourse = $('.project h2')

window.onload = function () {
  // Codigo inspirado em um video visto no Youtube link https://www.youtube.com/watch?v=X6tGovYrQCo&ab_channel=Fl%C3%A1vioCoutinho

  slideUp();
  $topicos.click(toggle)
  $listRelevante.click(selectDiv)
  createArrows();
  hideProject();
  sectionCourse.click(showDiv)
}

const selectDiv = (event) => {
  let $elementId = event.currentTarget.id
  const id = $elementId.split('#')[1]
  const $element = $(`${$elementId}`)
  const $p = $element.next();
  const $pDisplay = $p.css('display')
  slideUp();
  slideDown(id);
  if ($pDisplay === 'none') {
    resetArrows();
    spinArrow(id);
  }
}

const toggle = (event) => {
  slideUp();
  $topicos = $(event.currentTarget);
  let $p = $topicos.next();
  const $topicosId = event.currentTarget.id
  if ($elementPrevius === $topicosId) {
    let $display = $p.css('display')
    if ($display === 'none' || $display === '') {
      slideDown($topicosId)
    } else {
      slideUp()
    }
    $elementPrevius = $topicosId;
  } else {
    let teste = $p.css('display')
    if (teste !== 'none') {
      slideUp();
    } else {
      $p.slideToggle('slow');
    }

    $elementPrevius = $topicosId;
  }
  resetArrows();
  spinArrow($topicosId)
}

const slideUp = () => {
  let $h1 = $('.grids h1')
  for (let i = 0; i < $h1.length; i++) {
    let $p = $h1.next()
    $p.slideUp('slow')
  }
}

const slideDown = (value) => {
  let $h1 = $(`#${value}`)
  for (let i = 0; i < $h1.length; i++) {
    let $p = $h1.next()
    $p.slideDown('slow')
  }
}

const createArrows = () => {
  const $h1 = $('.grids h1')
  for (let index = 0; index < $h1.length; index++) {
    const element = $h1[index];
    const i = document.createElement('i')
    i.className = 'fad fa-angle-double-down mx-3'
    i.style.transition = '1s'
    element.appendChild(i);
  }
}

const resetArrows = () => {
  const $arrows = $('.grids i')
  for (let index = 0; index < $arrows.length; index++) {
    const element = $arrows[index];
    element.style.transform = 'rotate(0deg)'
  }
}

const spinArrow = (h) => {
  const $iSelect = $(`#${h} i`)
  const $transformI = $iSelect.css('transform')
  if ($transformI === 'none' || $transformI === 'matrix(1, 0, 0, 1, 0, 0)') {
    $iSelect.css('transform', 'rotate(180deg)')
  } else {
    $iSelect.css('transform', 'rotate(0deg)')
  }
  // 'rotate(0deg)'
  // 'rotate(180deg)'
}

const hideProject = () => {
  const $projects = $('.divs-Projects')
  for (let index = 0; index < $projects.length; index++) {
    const element = $projects[index];
    element.style.display = 'none'

  }
}

const showDiv = (event) => {
  const $elementTagert = event.currentTarget;
  const divPai = document.querySelector('.project')
  resetClassSelct();
  const divErro = document.getElementById('null')
  $elementTagert.className += ' Select'
  const divProject = document.getElementById(`${$elementTagert.innerText}`)
  hideProject();
  if (divProject === null) {
    divErro.style.display = 'block'
  } else {
    divProject.style.display = 'block'
    divPai.style.height = 'auto'
    divErro.style.display = 'none'
  }
}

const resetClassSelct = () => {
  const $classSelects = $('.Select')
  $classSelects.removeClass('Select')
}