function validarFormulario() {
   // Limpar mensagens de erro e sucesso anteriores
   document.getElementById("errorMsg").innerHTML = "";
   document.getElementById("successMsg").innerHTML = "";

   // Obter valores dos campos
   var nome = document.getElementById("nome").value;
   var email = document.getElementById("email").value;
   var assunto = document.getElementById("assunto").value;
   var mensagem = document.getElementById("mensagem").value;

   // Verificar se os campos estão vazios
   if (nome === "" || email === "" || assunto === "" || mensagem === "") {
       document.getElementById("errorMsg").innerHTML = "Por favor, preencha todos os campos.";
       return false; // Impede o envio do formulário
   }

   // Validar o formato do e-mail
   var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   if (!regexEmail.test(email)) {
       document.getElementById("errorMsg").innerHTML = "Por favor, digite um e-mail válido.";
       return false;
   }

   // Se tudo estiver correto, exibe mensagem de sucesso
  alert("Formulário enviado com sucesso!")
 // Evita que a página seja recarregada
}