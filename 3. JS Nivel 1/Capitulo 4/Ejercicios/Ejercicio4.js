// EJRECICIO 4 - 1
// class Calculadora {
// 	constructor(){
// 	}
// sumar(num1,num2){
// 	return parseInt(num1) + parseInt(num2);
// }
// restar(num1,num2){
// 	return parseInt(num1) - parseInt(num2);
// }
// dividir(num1,num2){
// 	return parseInt(num1) / parseInt(num2);
// }
// multiplicar(num1,num2){
// 	return parseInt(num1) * parseInt(num2);
// }
// potenciar(num,exp){
	
// 	return num ** exp;
// }
// raizCuadrada(num){
// 	return Math.sqrt(num);
// }
// raizCubica(num){
// 	return Math.cbrt(num);
// }
// }

// const calculadora = new Calculadora();

// alert("¿Que operación deseas realizar?");
// let operacion = prompt("1: suma,  2: resta,  3: división,  4: multiplicación,  5: potenciación,  6: raíz cuadrada,  7: raíz cúbica");

// if (operacion == 1) {
// 	let numero1 = prompt("primer número para sumar");
// 	let numero2 = prompt("segundo número para sumar");
// 	resultado = calculadora.sumar(numero1,numero2);
// 	alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 2) {
// 	let numero1 = prompt("primer número para restar");
// 	let numero2 = prompt("segundo número para restar");
// 	resultado = calculadora.restar(numero1,numero2)
// 	alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 3) {
// 	let numero1 = prompt("primer número para dividir");
// 	let numero2 = prompt("segundo número para dividir");
// 	resultado = calculadora.dividir(numero1,numero2)
// 	alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 4) {
// 	let numero1 = prompt("primer número para multiplicar");
// 	let numero2 = prompt("segundo número para multiplicar");
// 	resultado = calculadora.multiplicar(numero1,numero2)
// 	alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 5) {
// 	let numero1 = prompt("numero a potenciar");
// 	let numero2 = prompt("exponente");
// 	resultado = calculadora.potenciar(numero1,numero2)
// 	alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 6) {
// 	let numero1 = prompt("conocer la raíz cuadrada de:");
// 	resultado = calculadora.raizCuadrada(numero1)
// 	alert(`tu resultado es ${resultado}`);
// }

// else if (operacion == 7) {
// 	let numero1 = prompt("conocer la raíz cúbica de:");
// 	resultado = calculadora.raizCubica(numero1)
// 	alert(`tu resultado es ${resultado}`);
// }

// else {
// 	alert("no se ha encontrado la operación")
// }


//EJERCICIO 4 - 2

// const materias = {
// 	fisica: ["Perez","pedro","pepito","cofla","maria"],
// 	programacion: ["Dalto","pedro","juan","pepito"],
// 	logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
// 	quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
// }

// const obtenerInformacion = (materia)=>{

// if (materias[materia] !== undefined){
// 	return [materias[materia],materia,materias];
// } else {
// 	return materias;
// }
// }

// const mostrarInformacion = (materia)=>{
// let informacion = obtenerInformacion(materia);

// if (informacion !== false) {
// let profesor = informacion[0][0];
// alumnos = informacion[0];
// alumnos.shift();
// document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
// 	Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
// 	`);
// }
// }

// const cantidadDeClases = (alumno)=>{
// let informacion = obtenerInformacion();
// let clasesPresentes = [];
// let cantidadTotal = 0;
// for (info in informacion) {
// 	if (informacion[info].includes(alumno)) {
// 		cantidadTotal++;
// 		clasesPresentes.push(" "+ info);
// 	}
// }
// return `<b style='color:blue'>
// ${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
// <br><br>
// `;
// }


// mostrarInformacion("fisica");
// mostrarInformacion("quimica");
// mostrarInformacion("programacion");
// mostrarInformacion("logica");

// document.write(cantidadDeClases("cofla"))
// document.write(cantidadDeClases("pedro"))

//EJERCICIO 4 - 3

// let materias = {
// 	fisica: ["Perez","pedro","pepito","cofla","maria"],
// 	programacion: ["Dalto","pedro","juan","pepito"],
// 	logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
// 	quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
// }


// const inscribir = (alumno,materia)=>{
// personas = materias[materia];
// if (personas.length >= 21) {
// 	document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas<br><br>`);
// } else {
// 	personas.push(alumno);
// 	if (materia == "fisica") {
// 		materias = {
// 			fisica: personas,
// 			programacion: materias['programacion'],
// 			logica: materias['logica'],
// 			quimica:materias['quimica']
// 		}
// 	}
// 	else if (materia == "programacion") {
// 		materias = {
// 			fisica: materias['fisica'],
// 			programacion: personas,
// 			logica: materias['logica'],
// 			quimica:materias['quimica']
// 		}
// 	}else if (materia == "logica") {
// 		materias = {
// 			fisica: materias['fisica'],
// 			programacion: materia['programacion'],
// 			logica: personas,
// 			quimica:materias['quimica']
// 		}
// 	}else if (materia == "quimica") {
// 		materias = {
// 			fisica: materias['fisica'],
// 			programacion: materia['programacion'],
// 			logica: materias['logica'],
// 			quimica: personas
// 		}
// 	}
// 	document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br><br>`);
// }
// }

// document.write(materias['fisica'] + "<br>")

// inscribir("pedrito","fisica");
// inscribir("jorge","fisica");
// inscribir("ramses","fisica");
// inscribir("pedrito","fisica");
// inscribir("jorge","fisica");
// inscribir("ramses","fisica");
// inscribir("pedrito","fisica");
// inscribir("jorge","fisica");
// inscribir("ramses","fisica");
// inscribir("pedrito","fisica");
// inscribir("jorge","fisica");
// inscribir("ramses","fisica");
// inscribir("pedrito","fisica");

// document.write("<br>" + materias['fisica'])