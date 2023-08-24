const button = document.getElementById("confirmBtn");

function checkFields() {
  var size = document.getElementById("size").value;
  var quantity = document.getElementById("quantity").value;
  var style = document.getElementById("style").value;

  if (size && quantity && style) {
    button.disabled = false; // Habilitar o botão
    button.classList.add("enabled"); // Adicionar a classe "enabled"
  } else {
    button.disabled = true; // Desabilitar o botão
    button.classList.remove("enabled"); // Remover a classe "enabled"
  }

  // Adicionar ou remover a classe "hover-enabled" dependendo do estado dos campos
  if (document.getElementById("size").value && document.getElementById("quantity").value && document.getElementById("style").value) {
    button.classList.add("hover-enabled"); // Adicionar a classe "hover-enabled"
  } else {
    button.classList.remove("hover-enabled"); // Remover a classe "hover-enabled"
  }
}

document.getElementById("size").addEventListener("input", checkFields);
document.getElementById("quantity").addEventListener("input", checkFields);
document.getElementById("style").addEventListener("input", checkFields);

document.getElementById("buyNowBtn").addEventListener("click", function() {
  document.querySelector(".modal").style.display = "flex";
});

button.addEventListener("click", function() {
  var size = document.getElementById("size").value;
  var quantity = document.getElementById("quantity").value;
  var style = document.getElementById("style").value;

  if (size && quantity && style) {
    // Processar o pedido do usuário aqui
    console.log("Tamanho: " + size);
    console.log("Quantidade: " + quantity);
    console.log("Estilo: " + style);

    // Fechar o modal
    document.querySelector(".modal").style.display = "none";
  } else {
    if (!size) {
      document.getElementById("size").classList.add("invalid");
    }
    if (!quantity) {
      document.getElementById("quantity").classList.add("invalid");
    }
    if (!style) {
      document.getElementById("style").classList.add("invalid");
    }

    alert("Por favor, preencha todas as opções do produto.");

    // Role a página para cima para que o usuário possa ver os campos destacados
    window.scrollTo(0, 0);
  }
});

checkFields();