function pesquisar(event) {
    if (event.keyCode === 13 || event.target.id === 'botaoPesquisa') {
      event.preventDefault();

      var termo = document.getElementById('inputPesquisa').value.toLowerCase();
      var elementosPesquisaveis = document.getElementsByClassName('elementoPesquisavel');

      var encontrouResultado = false; // variável para verificar se encontrou resultado

      for (var i = 0; i < elementosPesquisaveis.length; i++) {
        var elemento = elementosPesquisaveis[i];
        if (elemento.innerText.toLowerCase().indexOf(termo) > -1) {
          elemento.style.display = 'block';
          encontrouResultado = true; // marca que resultado foi encontrado
        } else {
          elemento.style.display = 'none';
        }
      }

      if (!encontrouResultado) {
        alert('Item não encontrado :(');
        window.location.href = '../HTML/destaques.html'; // redireciona para página inicial
      }
    }
  }
