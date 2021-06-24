const Rregistrar = document.querySelector("#r-registrar");
const Riniciar = document.querySelector("#r-iniciar");

const iniciar = document.querySelector("#iniciar");
const registrar = document.querySelector("#registrar");

const formRegistrar = document.querySelector(".form-registrar");
const formIniciar = document.querySelector(".form-iniciar");

const alert = document.querySelector(".alert");

const httpRequest = new XMLHttpRequest();

function removeAlert(){
    alert.classList.remove("active");
}

Rregistrar.addEventListener("click", (e)=>{
    e.preventDefault();
    formRegistrar.classList.toggle("active");
    formIniciar.classList.toggle("active");
    
});
Riniciar.addEventListener("click", (e)=>{
    e.preventDefault();
    formRegistrar.classList.toggle("active");
    formIniciar.classList.toggle("active");
    removeAlert();

});


iniciar.addEventListener("click", (e)=>{
    
    e.preventDefault();
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");   

    pass.addEventListener("focus", ()=>{
        alert.classList.remove("active");
    });
    user.addEventListener("focus", ()=>{
        alert.classList.remove("active");
    });

    if(user.value != "" && pass.value != ""){
        httpRequest.open("POST", "./Backend/login.php", true);
        httpRequest.setRequestHeader("Content-Type","application/x-WWW-form-urlencoded");
        httpRequest.send("user="+user.value+"&pass="+pass.value);

        httpRequest.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
               if(this.responseText == "true"){
                location.href="./page.php";
               }else{
                    alert.classList.add("active");
                    alert.innerHTML="Usuario o contraseña incorrecta";
               }
            }
        }
    }else{
        alert.classList.add("active");
        alert.innerHTML="Complete ambos campos";
    }

    
})

registrar.addEventListener("click", (e)=>{
    e.preventDefault();
    let r_user = document.querySelector("#r-user");
    let r_pass = document.querySelector("#r-pass");
    let r_pass2 = document.querySelector("#r-pass2"); 

    
    r_user.addEventListener("focus", ()=>{
        alert.classList.remove("active");
    });
    r_pass.addEventListener("focus", ()=>{
        alert.classList.remove("active");
    });
    r_pass2.addEventListener("focus", ()=>{
        alert.classList.remove("active");
    });
    
    if(r_user.value == "" || r_pass.value == "" || r_pass2.value == ""){
        alert.classList.add("active");
        alert.innerHTML="Complete todos los campos";
    }else{
        r_user.addEventListener("focus", ()=>{
            alert.classList.remove("active");
        });
        r_pass.addEventListener("focus", ()=>{
            alert.classList.remove("active");
        });
        r_pass2.addEventListener("focus", ()=>{
            alert.classList.remove("active");
        });
        
    
        if(r_pass.value != r_pass2.value){
            alert.classList.add("active");
            alert.innerHTML="Las contraseñas no son iguales";
        }else{
            httpRequest.open("POST", "./Backend/registrar.php", true);
            httpRequest.setRequestHeader("Content-Type","application/x-WWW-form-urlencoded");
            httpRequest.send("user="+r_user.value+"&pass="+r_pass.value+"&pass2="+r_pass2.value+"");
        
            httpRequest.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    if(this.responseText == "Este usuario ya existe"){
                        alert.classList.add("active");
                        alert.innerHTML="Este usuario ya existe pruebe otro";
                    }else if(this.responseText == "registrado"){
                        alert.classList.add("active");
                        alert.innerHTML="El usuario a sido registrado correctamente ahora puede iniciar sesión";
                        r_user.value = "";
                        r_pass.value = "";
                        r_pass2.value = "";
                    }
                }
            }
        }  
    }
    
    
});