const form = document.getElementById('form1')
form.addEventListener('submit', function(e){
    e.preventDefault()
    attres()
    calcImc(peso, altura)
}) 

function  attres(){
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    const sex = document.getElementsByName('radsex')
    let res = document.querySelector('#res')
    const img = document.querySelector('#imgres')
    let imcres = calcImc(peso, altura)
    imcres = imcres.toFixed(2)
    
    
    if(sex[0].checked){
        if( imcres < 17) {
            img.setAttribute('src', 'assets/images/homemmabp.png')
            res.textContent = `O seu imc e de ${imcres}, você está muito abaixo do peso indicado`

        }  if(imcres >= 17 && imcres < 18,5) {
            img.setAttribute('src', 'assets/images/homemabp.png')
            res.textContent = `O seu imc e de ${imcres}, você está abaixo do peso indicado`

        } if(imcres >= 18,5 && imcres < 25) {
            img.setAttribute('src', 'assets/images/homemnormal.png')
            res.textContent = `O seu imc e de ${imcres}, parabéns você está com peso indicado`

        } if(imcres >= 25  && imcres < 30) {
            img.setAttribute('src', 'assets/images/homemacp.png')
            res.textContent = `O seu imc e de ${imcres}, você está acima do peso indicado`

        } if (imcres >= 30 && imcres < 35) {
            img.setAttribute('src', 'assets/images/homemob1.png')
            res.textContent = `O seu imc e de ${imcres}, você esta com obesidade Grau I`

        } if(imcres >= 35 && imcres < 40) {
            img.setAttribute('src', 'assets/images/homemob2.png')
            res.textContent = `O seu imc e de ${imcres}, você esta com obesidade Grau II`

        } else {
            img.setAttribute('src', 'assets/images/homemob3.png')
            res.textContent = `O seu imc e de ${imcres}, você esta com obesidade Grau III`
        }
        
    } else if(sex[1].checked){
        if( imcres < 17) {
            img.setAttribute('src', 'assets/images/mulhermabp.png')
            res.textContent = `O seu imc e de ${imcres}, você está muito abaixo do peso indicado`

        }else if(imcres >= 17 && imcres < 18,5) {
            img.setAttribute('src', 'assets/images/mulherabp.png')
            res.textContent = `O seu imc e de ${imcres}, você está abaixo do peso indicado`

        }else if(imcres >= 18,5 && imcres < 25) {
            img.setAttribute('src', 'assets/images/mulhernormal.png')
            res.textContent = `O seu imc e de ${imcres}, parabéns você está com peso indicado`

        }else if(imcres >= 25  && imcres < 30) {
            img.setAttribute('src', 'assets/images/mulheracp.png')
            res.textContent = `O seu imc e de ${imcres}, você está acima do peso indicado`

        } else if (imcres >= 30 && imcres < 35) {
            img.setAttribute('src', 'assets/images/mulherob1.png')
            res.textContent = `O seu imc e de ${imcres}, você esta com obesidade Grau I`

        }else if(imcres >= 35 && imcres < 40) {
            img.setAttribute('src', 'assets/images/mulherob2.png')
            res.textContent = `O seu imc e de ${imcres}, você esta com obesidade Grau II`

        }else {
            img.setAttribute('src', 'assets/images/mulherob3.png')
            res.textContent = `O seu imc e de ${imcres}, você esta com obesidade Grau III`
        }
        
    }
}


function calcImc(peso, altura){
    let imc = 0
    return imc = peso / (altura*altura)
}

dres.st