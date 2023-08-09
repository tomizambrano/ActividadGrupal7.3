function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function comprobarClave(n1,n2){
    if (n1 !== n2){
         alert("Las dos claves son distintas");
    }
       
}
    let boton = document.getElementById("regBtn");
   

    boton.addEventListener("click",function(){
        let nam = document.getElementById("nombre").value;
        let sirn = document.getElementById("apellido").value;
        let email = document.getElementById("email").value;
        let ter = document.getElementById("terminos").checked;
        let c1 = document.getElementById("password1").value;
        let c2 = document.getElementById("password2").value;
        if (nam === '' || sirn === '' || email === '' || comprobarClave(c1,c2) || !ter){
            showAlertError()
        } 
        else {
            showAlertSuccess()
        }
})

