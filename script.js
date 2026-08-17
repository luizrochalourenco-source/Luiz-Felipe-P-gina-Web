const botao = document.getElementById('btnMudarCor');

botao.addEventListener('click', () => {
  // O classList.toggle adiciona a classe se ela não existir, e remove se existir
  document.body.classList.toggle('fundo-azul');
});
