function mascara_cep(){
    var cep = document.getElementById('cep')
    if(cep.value.length == 5){
        cep.value += '-'
    }
        else if(cep.value.length > 9){
        alert (`Digite um CEP válido!`)
    }
 }