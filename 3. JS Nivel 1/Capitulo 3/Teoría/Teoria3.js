/*
CONCEPTOS BÁSICOS DE POO

-Clase                      Tipo de objeto.
-Objeto                     
-Atributo                   Son las características del objeto.
-Método                     Acciones que se crean dentro de la clase.
-Constructor                Características con las que se va a crear el objeto.
-Instanciación              Crear al objeto con "new".


CARACTERÍSTICAS DE LA POO

-Abstracción                Simplificarlo en características básicas del objeto.
-Modularidad                Separar en partes.
-Encapsulamiento            Hacer que la data este reservada.
-Polimorfismo               El objeto se comporta de manera disitinta por sus propiedades.

OTROS CONCEPTOS DE POO

-Herencia                                   Crear una clase que haga todo lo que hace otra agregando otras características (Extends - Super).   
-Métodos estáticos                          Método que se puede crear sin haberse creado el objeto.
-Métodos accesores (Getters y Setters)      .  

*/

/*
class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${especie}, tengo ${edad} y soy de color ${color}.`;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    ladrar(){
        alert("Guau!");
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza{
        return this.raza;
    }
}

const perro = new Perro("perro",5,"marrón","doberman");
document.write(perro.info);
perro.verInfo();
perro.ladrar();
Perro.ladrar();                             Se puede ejecutar sin const perro = new Perro ("perro",5,"marrón","doberman"). Pero en class Perro
                                            static ladrar(){
                                                alert("Guau!");
                                            }
perro.setRaza = "pedro"; 
document.write(perro.getRaza);



                                            

*/