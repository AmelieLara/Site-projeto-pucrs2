document.getElementById("botaocadastro").addEventListener("click",validaFormulario)


function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("endereço").value != "" && document.getElementById("telefone").value !="" && document.getElementById("nomepet").value != "" ){
   alert("Cadastro realizado com sucesso") 
  }else{
    alert("Por favor, preencha os campos requeridos")
  }  
}