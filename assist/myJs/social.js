(function (){
    let social = document.querySelectorAll('.social div')

    social.forEach(function(social, index){
        social.style.animation= `moving .8s cubic-bezier(0.51, 0.92, 0.24, 1.5) forwards ${index/10 + 0.1}s`

    })
}())
