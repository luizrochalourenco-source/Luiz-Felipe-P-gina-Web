const botao = document.getElementById('meuBotao');

botao.addEventListener('click', function() {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  botao.innerText = 'Fundo Preto';
});
