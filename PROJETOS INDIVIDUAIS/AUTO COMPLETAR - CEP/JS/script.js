const addressForm = document.querySelector('#address-form');
const cepinput = document.querySelector('#cep');
const addressinput = document.querySelector('#address');
const cityinput = document.querySelector('#city');
const neighborhoodinput = document.querySelector('#neighborhood');
const regioninput = document.querySelector('#region');
const forminputs = document.querySelectorAll('[data-input]');

const closebuttom = document.querySelector('#close-menssage') 

const fadeElement = document.querySelector("#fade")

// VALIDACAO DE CEP 
cepinput.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);

    //allow only numbers
    if(!onlyNumbers.test(key)) {
        e.preventDefault();
        return;
    }
})

// vamos armazenar o CEP digitado (GET ADDRESS EVENT)
    cepinput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value 

// checar se tem a quantidade necessária de digitos 
    if(inputValue.length === 8) {
        getAddress(inputValue);
    }
})

//consultar API  
const getAddress = async (cep) => {
    toggleLoader();

    cepinput.blur(); // TIRAR O FOCO DE UM DETERMINADO INPUT

    const apiUrl = `http://viacep.com.br/ws/${cep}/json/` // PUXAR DADOS ATRAVES DA URL DE UM API

    const response = await fetch(apiUrl); //ESPERAR A RESPOSTA DO APIURL E ADC A CONST RESPONSE

    const data = await response.json(); // CONVERTER A RESPOSTA DO RESPONSE PARA JSON

    // MOSTRAR ERRO E REDEFINIR FORMULARIO
    if(data.erro === "true") {
        if(!addressinput.hasAttribute("disabled")) {
            toggleDisabled();
        }

        addressForm.reset();
        toggleLoader();
        toggleMessage("CEP inválido, tente novamente.")
        return;
    }

    if(addressinput.value === "") {
        toggleDisabled();
    }

    addressinput.value = data.logradouro;
    cityinput.value = data.localidade;
    neighborhoodinput.value = data.bairro;
    regioninput.value = data.uf;

    toggleLoader();
};

    //ADICIONAR E REMOVER DISABILITAÇAO DOS INPUTS
    const toggleDisabled = () => {
        if(regioninput.hasAttribute("disabled")) {
            forminputs.forEach((input) => {
                input.removeAttribute("disabled");
            });
        } else {
            forminputs.forEach((input) => {
                input.setAttribute("disabled", "disabled");
            });
        }
    };

    // MOSTRAR OU EXECULTAR  LOADER 
const toggleLoader = () => {
    const loaderElement = document.querySelector("#loader")

    fadeElement.classList.toggle("hide");
    loaderElement.classList.toggle("hide");
};

// MOSTRAR OU EXECULTAR MENSSAGEM 
const toggleMessage = (msg) => {
const messageElement = document.querySelector("#message");
    
    const messageElementText = document.querySelector("#message p");

    messageElementText.innerText = msg;

    fadeElement.classList.toggle("hide");
    messageElement.classList.toggle("hide");
};

// FECHAR MENSSAGEM 
closebuttom.addEventListener("click", () => toggleMessage());

// SALVAR ENDEREÇO
addressForm.addEventListener("submit", (e) => { 
    e.preventDefault()

    toggleLoader()

    setTimeout(() => {
        toggleLoader();

        toggleMessage("Endereço salvo com sucesso!");

        addressForm.reset();

        toggleDisabled();
    }, 1500);
})


