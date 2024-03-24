document.getElementById("botaoLogin").addEventListener("click",validaFormulario)


function validaFormulario(){
  if(document.getElementById("login").value != "" && document.getElementById("senha").value != ""){
   alert("Login realizado com sucesso") 
  }else{
    alert("Por favor, preencha os campos requeridos")
  }  
}