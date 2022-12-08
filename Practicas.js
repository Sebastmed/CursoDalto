var suma = 0;

do {

  var numero = prompt("Agrega números para sumar");

  if (Number(numero) == numero){
    numero == Number(numero);
    resultado = suma + numero;
    }
  else{
    alert("No es un numero");
  }
}  

while(confirm("Desea seguir?"));


document.write(resultado);