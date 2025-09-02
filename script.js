let nome = prompt(" digite seu nome completo")
let idade = parseInt(prompt(" digite sua idade"))
if(nome == "admin"){
    alert("Bem-vindo, Admin! Acesso total liberado")
} else if(nome == "moderador" && idade>=16){
    alert("Olá, Moderador! Acesso liberado para a área de moderação.")
}else if(idade>=18){
    alert(`Olá 
        ,${nome}! Você tem acesso completo. Boas-vindas à plataforma!`)
} else if(idade >= 13 && idade <= 17 ) {
    alert("Acesso negado. Você pode participar do nosso programa Jovem Aprendiz!")
} else {
    alert("acesso negado! Voce é de menor  ")
}