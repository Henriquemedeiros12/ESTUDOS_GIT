// Capturando elementos do HTML
const inputCodigo1 = document.getElementById('codigoDoProduto');
const paragrafoCod1 = document.getElementById('cod');
const paragrafoDesc1 = document.getElementById('desc');
const paragrafoValorUnitario1 = document.getElementById('v_u');
const inputQuantidade1 = document.getElementById('quantidade');
const paragrafoQuantidade1 = document.getElementById('qnt');
const paragrafoValorTotal1 = document.getElementById('v_t');

const inputCodigo2 = document.getElementById('codigoDoProduto2');
const paragrafoCod2 = document.getElementById('cod_2');
const paragrafoDesc2 = document.getElementById('desc_2');
const paragrafoValorUnitario2 = document.getElementById('v_u_2');
const inputQuantidade2 = document.getElementById('quantidade2');
const paragrafoQuantidade2 = document.getElementById('qnt_2');
const paragrafoValorTotal2 = document.getElementById('v_t_2');


// Adicionando evento de digitação no input de código 1
inputCodigo1.addEventListener('input', function() {
  if(inputCodigo1.value == "001") {
  paragrafoCod1.textContent = inputCodigo1.value;
  paragrafoDesc1.textContent = 'Camisa Nike M';
  paragrafoValorUnitario1.textContent = '119,90 R$';
  } else if(inputCodigo1.value == "002") {
    paragrafoCod1.textContent = inputCodigo1.value;
    paragrafoDesc1.textContent = 'Tênis Nike 42';
    paragrafoValorUnitario1.textContent = '219,90 R$';
  } else {
    paragrafoCod1.textContent = 'Erro';
    paragrafoDesc1.textContent = 'Erro';
    paragrafoValorUnitario1.textContent = 'Erro';
  }
});

// Adicionando evento ao pressionar a tecla de espaço 1
document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    event.preventDefault();
    inputQuantidade1.focus();
  }
});

// Adicionando evento de digitação no input de quantidade 1
  inputQuantidade1.addEventListener('input', function() {
  paragrafoQuantidade1.textContent = inputQuantidade1.value;
  const valorUnitario = parseFloat(paragrafoValorUnitario1.textContent);
  const quantidade = parseInt(paragrafoQuantidade1.textContent);
  const valorTotal = valorUnitario * quantidade;
  paragrafoValorTotal1.textContent = 'R$ ' + valorTotal.toFixed(2);
});

// Adicionando evento ao pressionar a tecla Enter 1
document.addEventListener('keydown', function(event) {
  if (event.code === 'Enter' && document.activeElement === inputQuantidade1) {
    event.preventDefault();
    inputCodigo1.focus();

    inputCodigo1.addEventListener('input', function() {
      if(inputCodigo1.value == "001") {
      paragrafoCod2.textContent = inputCodigo1.value;
      paragrafoDesc2.textContent = 'Camisa Nike M';
      paragrafoValorUnitario2.textContent = '119,90 R$';
      } else if(inputCodigo1.value == "002") {
        paragrafoCod2.textContent = inputCodigo1.value;
        paragrafoDesc2.textContent = 'Tênis Nike 42';
        paragrafoValorUnitario2.textContent = '219,90 R$';
      } else {
        paragrafoCod2.textContent = 'Erro';
        paragrafoDesc2.textContent = 'Erro';
        paragrafoValorUnitario2.textContent = 'Erro';
      }
      
    });
  }
});

// Adicionando evento ao pressionar a tecla de espaço 2
document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    event.preventDefault();
    inputQuantidade2.focus();
  }
});

// Adicionando evento de digitação no input de quantidade 2
inputQuantidade2.addEventListener('input', function() {
  paragrafoQuantidade2.textContent = inputQuantidade2.value;
  const valorUnitario = parseFloat(paragrafoValorUnitario2.textContent);
  const quantidade = parseInt(paragrafoQuantidade2.textContent);
  const valorTotal = valorUnitario * quantidade;
  paragrafoValorTotal2.textContent = 'R$ ' + valorTotal.toFixed(2);
});
