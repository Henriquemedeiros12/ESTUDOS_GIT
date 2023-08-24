function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  function formatNumber(evt) {
    var input = evt.target;
    var value = input.value;
    
    // Remove todos os caracteres que não são dígitos
    value = value.replace(/\D/g, '');
    
    // Adiciona um hífen a cada 4 dígitos
    value = value.replace(/(\d{4})/g, '$1-');
    
    // Remove o hífen extra no final, se houver
    value = value.replace(/-$/, '');
    
    // Atualiza o valor do input
    input.value = value;
  }

// Selecione o campo de entrada
const input = document.getElementById('numericInput3');

// Adicione um evento de escuta para o campo de entrada
input.addEventListener('input', function() {
  // Remova tudo que não for dígito
  const inputValue = input.value.replace(/\D/g, '');

  // Limite o número de dígitos em 4
  const limitedValue = inputValue.slice(0, 5);

  // Adicione uma barra (/) após o segundo dígito
  const formattedValue = limitedValue.replace(/(\d{2})/, '$1/');

  // Atribua o valor formatado de volta ao campo de entrada
  input.value = formattedValue;
});

function handleInput() {
  var inputValue = document.getElementById("numericInput2").value;
  var inputValue2 = document.getElementById("inputform2").value;
  var newValue = inputValue.replace(/[^A-Za-z\s]/g, '').toUpperCase();
  var newValue2 = inputValue2.replace(/[^A-Za-z\s]/g, '').toUpperCase();
  document.getElementById("numericInput2").value = newValue;
  document.getElementById("inputform2").value = newValue2;
}

const selectAno = document.getElementById('ano_venc');

// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Adiciona as opções ao selectAno
for (let i = anoAtual; i <= anoAtual + 10; i++) {
  const option = document.createElement('option');
  option.value = i.toString().slice(-2); // Obtém os dois últimos dígitos do ano
  option.textContent = i.toString().slice(-2); // Exibe os dois últimos dígitos do ano
  selectAno.appendChild(option);
}

const inputForm1 = document.getElementById('inputform1');
const numericInput = document.getElementById('numericInput');

// Adiciona um evento de escuta de input ao campo inputform1
inputForm1.addEventListener('input', function() {
  // Obtém o valor digitado pelo usuário
  const inputValue = inputForm1.value;
  
  // Define o valor do campo numericInput para o valor digitado
  numericInput.value = inputValue;
});

const inputForm2 = document.getElementById('inputform2');
const numericInput2 = document.getElementById('numericInput2');

// Adiciona um evento de escuta de input ao campo inputform1
inputForm2.addEventListener('input', function() {
  // Obtém o valor digitado pelo usuário
  const inputValue = inputForm2.value;
  
  // Define o valor do campo numericInput para o valor digitado
  numericInput2.value = inputValue;
});

// Obtém as referências dos elementos de seleção e input
const selectMesVenc = document.getElementById('mes_venc');
const numericInput3 = document.getElementById('numericInput3');

// Adiciona um evento de escuta de mudança ao selectMesVenc
selectMesVenc.addEventListener('change', function() {
  // Obtém o valor selecionado pelo usuário
  const selectedValue = selectMesVenc.value;

  // Define o valor do campo numericInput3 para o valor selecionado
  numericInput3.value = selectedValue;
});

function atualizarInput() {
  // Obtém o valor selecionado do select de mês
  var mesValue = document.getElementById("mes_venc").value;

  // Obtém o valor selecionado do select de ano
  var anoValue = document.getElementById("ano_venc").value;
  
  // Combina os valores de mês e ano com uma "/"
  var valorFormatado = mesValue + "/" + anoValue;

  // Atualiza o valor do input
  document.getElementById("numericInput3").value = valorFormatado;
}

function handleInput() {
  formatCardNumber(); 
  var inputValue = document.getElementById("inputform1").value;
  var formattedValue = inputValue.replace(/-/g, "").replace(/\s/g, ""); // Remover traços e espaços em branco
  var formattedNumber = "";
  
  for (var i = 0; i < formattedValue.length; i++) {
    if (i % 4 === 0 && i !== 0) {
      formattedNumber += "-";
    }
    formattedNumber += formattedValue[i];
  }
  
  document.getElementById("inputform1").value = formattedNumber;

  changeCardImage(); 
  var inputValue = document.getElementById("inputform1").value.replace(/-/g, "");
  var inputValue = document.getElementById("inputform1").value;

  // 2. Identificar a bandeira do cartão com base no primeiro dígito
  var cardBrand = "";

  if (inputValue.startsWith("4")) {
    cardBrand = "visa";
  } else if (inputValue.startsWith("5")) {
    cardBrand = "mastercard";
  } else if (inputValue.startsWith("3")) {
    cardBrand = "amex";
  } else if (inputValue.startsWith("1")) {
      cardBrand = "INVALID";
  } else if (inputValue.startsWith("2")) {
      cardBrand = "INVALID";
  } else if (inputValue.startsWith("6")) {
      cardBrand = "INVALID";
  } else if (inputValue.startsWith("7")) {
      cardBrand = "INVALID";
  } else if (inputValue.startsWith("8")) {
      cardBrand = "INVALID"; 
  } else if (inputValue.startsWith("9")) {
      cardBrand = "INVALID";
  } else if (inputValue.startsWith("0")) {
      cardBrand = "INVALID";
  } else {
    cardBrand = "unknown";
  }

  // 3. Alterar a imagem da bandeira do cartão
  var cardImageElement = document.getElementById("cardImage");
  var cardImageElement2 = document.getElementById("cardImage2");  
  cardImageElement.src = "../images/BANDEIRAS/" + cardBrand + ".png";
  cardImageElement2.src = "../images/BANDEIRAS/" + cardBrand + ".png"; 

}

function formatCardNumber() {
  var inputValue = document.getElementById("inputform1").value;
  var formattedValue = inputValue.replace(/-/g, "").replace(/\s/g, ""); // Remover traços e espaços em branco
  var formattedNumber = "";
  
  for (var i = 0; i < formattedValue.length; i++) {
    if (i % 4 === 0 && i !== 0) {
      formattedNumber += "-";
    }
    formattedNumber += formattedValue[i];
  }
  
  document.getElementById("inputform1").value = formattedNumber;
}

function changeCardImage() {
  var inputValue = document.getElementById("inputform1").value.replace(/-/g, ""); // Remover traços

  // Resto do código permanece o mesmo...
}

document.getElementById('btn').addEventListener('click', function() {
  var inputVal = document.getElementById('inputform1').value;
  var firstChar = inputVal.charAt(0);

  if (firstChar === '4' || firstChar === '5' || firstChar === '3') {
      alert('CARD REGISTERED SUCCESSFULLY!');
  } else {
      alert('INVALID CARD!');
  }
});

const meuInput = document.querySelector('#inputform3');

meuInput.addEventListener('click', function() {
  // código para alterar o CSS aqui
});

meuInput.addEventListener('click', function() {
  const filho2 = document.querySelector('#filho2');
  const filho3 = document.querySelector('#filho3');
});

meuInput.addEventListener('focus', function() {
  const filho2 = document.querySelector('#filho2');
  const filho3 = document.querySelector('#filho3');
  filho2.style.display = 'none';
  filho2.style.animation = 'flip 2s forwards';
  filho3.style.display = 'block';
});

// Obtém os elementos de entrada pelo seu id
var input1 = document.getElementById("inputform3");
var input2 = document.getElementById("cvv");

// Adiciona um "listener" no evento "input" do campo de entrada
input1.addEventListener("input", function() {
  var valorDigitado = input1.value; // Obtém o valor digitado no campo de entrada

  input2.value = valorDigitado; // Define o valor digitado no outro campo de entrada
});