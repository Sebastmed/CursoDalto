// EJRECICIO 3 - 1


// class Celular{
//     constructor(color,peso,pantalla,camara,memoria){
//         this.color = color;
//         this.peso = peso;
//         this.pantalla = pantalla;
//         this.camara = camara;
//         this.memoria = memoria;
//         this.encendido = false;
//         this.grabando = false;
//     }
//     prender(){
//         if (this.encendido == false){
//             alert("Encendido");
//             this.encendido = true;
//         }    
//         else {
//             alert("Apagado");
//             this.encendido = false;
//         }
//     }
//     reiniciar(){
//         if (this.encendido == true){
//             alert("Reiniciando");
//         }    
//         else {
//             alert("Apagado");
//         }
//     }
//     tomarFotos(){
//         alert(`Foto tomada en una resolución de ${this.camara}`);
//     }
//     grabar(){
//         if(this.grabando == false){
//             alert(`Grabando a una resolución de ${this.camara}`);
//             this.grabando = true;
//         }
//         else {
//             alert("No está grabando");
//             this.grabando = false;
//         }
//     }
//     celuInfo(){
//         return `
//         Color: ${this.color}</br>
//         Peso: ${this.peso}</br>
//         Tamaño de pantalla: ${this.pantalla}</br>
//         Resolución de cámara: ${this.camara}</br>
//         Memoria Ram: ${this.memoria}</br>
//         `
//     }
    
// }

// class CelularAltaGama extends Celular{
//     constructor(color,peso,pantalla,camara,memoria,extra){
//         super(color,peso,pantalla,camara,memoria);
//         this.camaraExtra = extra;
//         this.grabarCamaraLenta = true;
//         this.reconocerCara = true;
//     }    
//     grabandoCamaraLenta(){
//         if (this.grabarCamaraLenta == true){
//             alert(`Grabando en cámara lenta`);
//             this.grabarCamaraLenta = false;
//         }
//         else {
//             alert("Cámara apagada");
//             this.grabarCamaraLenta = true
//         }
//     }

//     reconocimientoFacial(){
//         if (this.reconocerCara == true){
//             alert("Celular desbloqueado");
//         }
//         else {
//             alert("No se reconoce la cara");
//         }    
//     }

//     camara2(){
//         alert("Cámara extra encendida");
//     }
    
//     celuInfoAltaGama(){
//         return this.celuInfo() + `
//         Cámara Extra: ${this.camaraExtra} </br>
//         Grabado Lento: Sí </br>
//         Reconocimiento Facial: Sí </br>
//         </br>
//         `
//     }

// }


// celular1 = new Celular("Blanco","148 grs.",'5"',"24 Mpx","1GB",);
// celular2 = new Celular("Gris","155 grs.",'5.5"',"48 Mpx","2GB",);
// celular3 = new Celular("Gris","150 grs.",'6"',"48 Mpx","4GB",);


// celular1 = new CelularAltaGama("Celeste","135 grs.",'5"',"48 Mpx","4GB","12 Mpx");
// celular2 = new CelularAltaGama("Verde","140 grs.",'5.5"',"48 Mpx","4GB","12 Mpx");


// celular1.prender();
// celular1.reconocimientoFacial();
// celular1.tomarFotos();
// celular1.grabar();
// celular1.grabar();
// celular1.grabandoCamaraLenta();
// celular1.grabandoCamaraLenta();
// celular1.prender();

// document.write(`
// ${celular1.celuInfo()}</br>
// ${celular2.celuInfo()}</br>
// ${celular3.celuInfo()}</br>
// `)

// document.write(`
// ${celular1.celuInfoAltaGama()}</br>
// ${celular2.celuInfoAltaGama()}</br>
// `)




// EJERCICIO 3 - 2

// class app{
//     constructor(descargas,puntuacion,peso){
//         this.descargas = descargas;
//         this.puntuacion = puntuacion;
//         this.peso = peso;
//         this.instalar = false;
//         this.ejecucion = false;
//     }

//     instalacion(){
//         if(this.instalar == false){
//             alert("Aplicación instalada");
//             this.instalar = true;
//         }
//         else{
//             alert("La aplicación ya está instalada");
//         }
//     }
    
//     abrir(){
//         if(this.ejecucion == false){
//             alert("Aplicación ejecutada");
//             this.ejecucion = true;
//         }
//         else{
//             alert("La aplicación ya está ejecutada");
//         }
//     }

//     cerrar(){
//         if(this.ejecucion == true){
//             alert("Aplicación cerrada");
//             this.ejecucion = false;
//         }
//         else{
//             alert("La aplicación ya está cerrada");
//         }
//     }

//     desinstalar(){
//         if(this.instalar == true){
//             alert("Aplicación desinstalada");
//             this.instalar = false;
//         }
//         else{
//             alert("La aplicación está desinstalada");
//         }
//     }

//     aplicacionInfo(){
//         return `
//         Veces descargadas: <b>${this.descargas}</b></br>
//         Puntuación: <b>${this.puntuacion}</b></br>
//         Peso de la aplicación: <b>${this.peso}</b></br>
//         `
//     }
// }

// app1 = new app("3500 descargas","1200 puntos","256MB");
// app2 = new app("4800 descargas","1300 puntos","432MB");


// document.write(`
//     ${app1.aplicacionInfo()} </br> </br>
//     ${app2.aplicacionInfo()}
//     `
// )

// app1.instalacion();
// app1.abrir();
// app1.cerrar();
// app1.desinstalar();




function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    if(numero / numero === 1 && numero / 1 === numero && numero !== 0 && numero !== 1){
      return true
    }
    else {
      return false
    }
  }
  

  resultado = esPrimo (4)

  document.write(resultado)