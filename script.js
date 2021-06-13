window.onload = function() {
  const divInformacao = document.getElementById('ul-pontos-relevantes')

  divInformacao.addEventListener('click', teste)
}

function teste (event) {
  console.log(event.target);

  


}