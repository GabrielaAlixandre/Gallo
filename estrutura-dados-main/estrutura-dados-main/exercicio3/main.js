function Calcular(){
    // Variavel Local
    let numero = Number( document.getElementById ('numero1').value); //variaveis são não tipadas
    let resultado = (numero ** 2);
    document.getElementById('resultado').innerHTML = "O número elevado ao quadrado é: " + resultado;
    }
    