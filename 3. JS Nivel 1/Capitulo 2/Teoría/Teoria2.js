/*
ARRAYS                                  Conjunto de datos. Posición empieza en 0. 
                                        Aunque no estén definidas están declarados pero no inicializados.        
let arrays = ["auto",3,"azul"];
document.write(arrays[2]);

ARRAYS ASOCIATIVOS                      En vez de llamarlos por la posición, se los llama por un nombre.

let pc = {                              document.write(pc["nombre"])
    nombre: "Seba",
    procesador = "intel I3",
    ram: "16GB",
    espacio: "250GB",
}


BUCLES                                  Un bucle que verifica que la condición se cumpla y mientras sea verdadera se vuelve a ejecutar.

while () {                              Bucle infinito mientras se cumpla la condición.
}

do {                                    Primero ejecuta y luego verifica la condición con while ()
}

for () {                                Bucle determinado. En el paréntesis se crea la variable, por lo general i, luego
}                                       la condición y luego el aumento o el decremento.
                                        (let i = algo; i < 6; i++).

for (algo in arrays) {                  Bucle que va pasando por un arrays y toma la posición en la que está el elemento.
                                        Donde algo es la variable.                  
}                                       

for (algo of arrays) {                  Bucle que va pasando por un arrays y toma el valor que tiene cada elemento.                  
                                        Donde algo es la variable.
} 

break                                   Interrumpe el bucle (se puede usar con un if).
continue                                Se saltea el bucle (se puede usar con un if).
leable                                  

FUNCIONES                               Parte de un código

function suma(num1,num2){               Se establece la función pero no se ejecuta, se debe llamar posteriormente
    let res = num1 + num2
    return res;                         Termina la función
}                        

let resultado = suma(12,32)             Se llama a la función donde res = 44

document.write(resultado)

saludar = ()=>{                         Función flecha, puede no llevar paréntesis ni llave, por ejemplo
                                        let frase = `!Hola ${nombre}! ¿Cómo estás?`
                                        const saludar = nombre => document.write(frase)  
}



*/

