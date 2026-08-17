const botao = document.getElementById('btnMudarCor');

botao.addEventListener('click', () => {
  // Verifica a cor atual e alterna entre branco e azul
  if (document.body.style.backgroundColor === 'rgb(0, 123, 255)' || document.body.style.backgroundColor === 'blue') {
    document.body.style.backgroundColor = '#ffffff'; // Voltar para branco
  } else {
    document.body.style.backgroundColor = '#007bff'; // Mudar para azul
  }
});
