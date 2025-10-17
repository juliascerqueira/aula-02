//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre 
// "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let chute_semana = prompt ('Qual o dia da SEMANA?');

//chute_semana = chute_semana
    //.toLowerCase() //permite aceitar minúsculo
    //.normalize("NFD") //aceita com ou sem capslock
    //.replace(/[\u0300-\u036f]/g, "") //aceite com ou sem acento

if  (chute_semana == 'Sábado' || chute_semana == 'Domingo' ) {
    alert ('Bom fim de semana!');
} else {
    alert ('Boa semana!');
} // aqui restringir para ser somente dias da semana como resposta



//Verifique se um número digitado pelo usuário é positivo ou negativo
//  Mostre um alerta informando.

let numero = prompt ('Digite um número');

if (numero >= 0){
    alert ('Esse número é positivo');
} else {
    alert ('Esse número é negativo');
} // aqui poderia restringir para ser somente número


//Crie um sistema de pontuação para um jogo.
//  Se a pontuação for maior ou igual a 100, mostre 
// "Parabéns, você venceu!". Caso contrário, mostre
//  "Tente novamente para ganhar.".

let pontuacao = prompt ('qual a sua pontuação?');

if (pontuacao >= 100) {
    alert ('Parabéns, você venceu!');
} else {
    alert ('Tente novamente para ganhar');
}  // aqui poderia restringir para ser somente número

//Crie uma mensagem que informa o usuário sobre o saldo da conta,
//  usando uma template string para incluir o valor do saldo.

let saldo = 5000;

alert (`Seu saldo é: ${saldo}`);

//Peça ao usuário para inserir seu nome usando prompt. 
// Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt ('Qual seu nome?');

alert (`Seu nome é: ${nome}`)



