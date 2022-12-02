/* 
<script src="codigo.js"></script>               En HTML para enlazar el archivo

VARIABLES
nombre = "texto", 0, true

TIPOS DE DATOS
"cadena de texto"           STRING      ""  ''  ´´
0                           NÚMERO
true o false                BOOLEAN    

DECLARAR
var                         Se declara en todo el programa
let                         Se declara en el bloque {}
const                       Constante - No se puede cambiar el valor - Se debe declarar e inicializar

DEFINIR (darle valor):
undefined                   Si no está inicializada UNDEFINED
null                        Está declarada pero vacía
NaN                         No es un número

{}                          Bloques

prompt()                    Función que nos va a devolver un dato
alert()                     Mensaje en ventana emergente
document.write()            Se escibe en la página

CONCATENACIÓN               Es unir strings
                            
+                           Une dos strings (ej: (frase = "soy " + nombre + " y estoy estudiando") donde nombre = Sebastián)
""                          Convierte todo en string (ejemplo: frase = "" + 5 + 6 = 56)
concat                      Al menos uno debe ser string (ejemplo: num1.concat(num2) donde num1 = "2" y num2 = 3) = 23
${}                         Concatena con backticks (``)(ej: (frase = `soy ${nombre} y estoy estudiando`) donde nombre = Sebastián)
''                          String para combianr con comillas dobles
""                          String para combinar con comillas simples

OPERADORES
Asignación                  Un operador de Asignación asigna un valor al operando de la izquierda basado en el valor
                            del operando de la derecha.
                            (=) igual
                            (+=) suma
                            (-=) resta
                            (*=) multiplicación
                            (/=) divición
                            (%=) resto
                            (**=) potencia 
                            etc.

Ariteméticos:               Los operadores Aritméticos toman valores numéricos (ya sean literales o variables) 
                            como sus operandos y retornan un valor numérico único.
                            (+) aadición
                            (--) decreción (primero se ejecuta, luego se muestra)
                            (/) divición
                            (**) exponenciación (se debe declarar la potencia, ejemplo: 5**2 (5 al cuadrado))
                            (++) incremento (primero se ejecuta, luego se muestra)
                            (*) multiplicación
                            (%) resto
                            (-) sustracción
                            (-) negativo (ejemplo -número)
                            (+) positivo (ejemplo +número)
                            etc.


OPERADORES DE COMPARACIÓN   Los comparadores de operación comparan dos expresiones y devuelven un valor BOOLEAN que representa la 
                            relación de sus valores.
                            (==) igualdad (no diferencia el tipo de dato)
                            (!=) desigualdad (no diferencia el tipo de datos)
                            (===) estrictamente idénticos (incluyendo el tipo de datos)
                            (!==) estrictamente distintos (incluye el tipo de datos)
                            (<) menor que
                            (>) mayor que
                            (<=) menor o igual que
                            (>=) mayor o igual que
                            
OPERADORES LÓGICOS          Los operadortes lógicos nos devuelven un resultado a partir de que se cumpla o no una condición, su 
                            resultado es BOOLEANO, y sus operandos son valores lógicos o asimilables a ellos.
                            (&&) y (si ambas condiciones se cumplen TRUE sino FALSE)
                            (||) o (si al menos una de las condiciones se cumple TRUE sino FALSE)
                            (!) lo contrario, si es verdadero FALSE si no es verdadero TRUE

CAMEL CASE                  La primera letra de la primer palabra va con minúscula, en adelante, la primer letra de las 
                            siguientes palabras va con mayúscula.

CONDICIONALES               

if (true) {                 Sólo se ejecuta si es verdadero

}

else if () {                Si lo anterior no se cumple pasa a esta condición

}

else {                       Si ninguna de las anteriores se ejecuta, entonces se ejecuta esta.

}                           
*/