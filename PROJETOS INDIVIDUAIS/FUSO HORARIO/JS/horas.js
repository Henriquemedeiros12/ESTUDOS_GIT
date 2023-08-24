const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() { //AQUI QUE FAZ O RELOGIO FUNCIONAR ALTOMATICAMENTE!//
    let agora = new Date()
    let hr = agora.getHours()
    let min = agora.getMinutes()
    let s = agora.getSeconds() 

    if(hr < 10) hr = '0' + hr

    if(min < 10) min = '0' + min

    if(s < 10) s = '0' + s

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s

})

