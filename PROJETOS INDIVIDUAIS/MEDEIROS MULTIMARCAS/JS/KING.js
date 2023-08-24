function toggleCardForm() {
    var cardForm = document.getElementById("cardForm");
    if (cardForm.style.display === "none") {
      cardForm.style.display = "block";
    } else {
      cardForm.style.display = "none";
    }
  }
  
  function checkCardBrand() {
    var cardNumber = document.getElementById("cardNumber").value;
    var cardBrand = "";
  
    // Lógica para verificar a bandeira do cartão
  
    if (cardBrand === "VISA" || cardBrand === "MASTERCARD" || cardBrand === "ELO" || cardBrand === "AMERICAN EXPRESS" || cardBrand === "HIPERCARD") {
      alert("Bandeira do cartão: " + cardBrand);
    } else {
      alert("Bandeira do cartão não reconhecida");
    }
  }
  
  function generatePIXCode() {
    var pixCode = "1234567890"; // Lógica para gerar o código PIX
  
    var pixCodeContent = document.getElementById("pixCodeContent");
    pixCodeContent.innerHTML = "Código PIX: " + pixCode;
  
    var pixCodeDiv = document.getElementById("pixCode");
    pixCodeDiv.style.display = "block";
  }
  
  function toggleTransferForm() {
    var transferForm = document.getElementById("transferForm");
    if (transferForm.style.display === "none") {
      transferForm.style.display = "block";
    } else {
      transferForm.style.display = "none";
    }
  }
  
  function submitTransfer() {
    var accountNumber = document.getElementById("accountNumber").value;
    var bank = document.getElementById("bank").value;
  
    // Lógica para envio dos dados de transferência
  }
  
  function generateBoleto() {
    var boletoDiv = document.getElementById("boleto");
    boletoDiv.style.display = "block";
  }
  
  function generateBoletoPDF() {
    // Lógica para gerar o boleto em PDF
  }