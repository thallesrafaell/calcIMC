const form = document.getElementById('form1')

form.addEventListener('submit', function(e){
    e.preventDefault()
    attres()

}) 

function  attres(){
    let peso = document.querySelector('#peso')
    let altura = document.querySelector('#altura')

    alert(`Seu imc e ${calcImc(peso.value, altura.value)}`)

}

function calcImc(peso, altura){
    let imc = 0
    return imc = peso / (altura*altura)
}

