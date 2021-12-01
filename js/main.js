//Modo oscuro
const btnSwitch = document.querySelector('#switch');
 
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //Local Storage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.setItem('dark-mode', 'false');
    }
});


//Obtener el modo 
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

//Ventana Modal
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".boton")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];


abrir.addEventListener("click", function(e){
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});
cerrar.addEventListener("click", function(e){
    modal.classList.toggle("modal-close");
    
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },600)
});
//SABER QUE ESTOY SELECCIONANDO
window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalC){
        modal.classList.toggle("modal-close");

        setTimeout(function () {
          modalC.style.opacity = "0";
          modalC.style.visibility = "hidden";
        }, 600);
    }
})

//Formulario
const $form = document.querySelector('#form');
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)    
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if(response.ok){             
        this.reset();
    }else{
        alert("Ocurrio un error inesperado xD")
    }

}


