function Calcular1(){
    // Variavel Local
    let numero1 = Number( document.getElementById ('numero1').value); //variaveis são não tipadas
    let numero2 = Number( document.getElementById ('numero2').value);
    let resultado = (numero1 + numero2);
    document.getElementById('resultado').innerHTML = "O resultado da soma é " + resultado;
    }
    function Calcular2(){
    let numero1 = Number( document.getElementById ('numero1').value); //variaveis são não tipadas
    let numero2 = Number( document.getElementById ('numero2').value);
    let resultado = (numero1 - numero2);
    document.getElementById('resultado').innerHTML = "O resultado da subtração é " + resultado;
    }
    function Calcular3(){
    let numero1 = Number( document.getElementById ('numero1').value); //variaveis são não tipadas
    let numero2 = Number( document.getElementById ('numero2').value);
    let resultado = (numero1 * numero2);
    document.getElementById('resultado').innerHTML = "O resultado da multiplicação é " + resultado;
        }
        function Calcular4(){
            let numero1 = Number( document.getElementById ('numero1').value); //variaveis são não tipadas
            let numero2 = Number( document.getElementById ('numero2').value);
            let resultado = (numero1 / numero2);
            document.getElementById('resultado').innerHTML = "O resultado da multiplicação é " + resultado;
            }