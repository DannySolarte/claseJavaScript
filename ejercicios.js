// operadores aritmeticos
// let numero = 2;
// let numero2 = 3;
// let resultado = numero + numero2;
// alert (resultado) nos muetra una alerta con el resultado
// document.write (resultado); //para imprimir comentario en el navegador
// console.log (Resultado) para hacer pruebas no muetra resultado en pantalla toca buscarlo en consola del navegador

// operadores de asignacion:
// let numero = 10;
// numero +=5;
// document.write (numero)
// 
// let numeroresta = 10;
// numeroresta -= 5;
// document.write (numeroresta);
// 
// let numeromulti = 10;
// numeromulti *= 5;
// document.write (numeromulti);
// 
// let numerodiv = 10;
// numerodiv /= 5;
// document.write (numerodiv /= 5);


// ejercicios incremento:
// incrementa el valor de una variable usando el operador ++ 
// let num1 = 5;
// num1 ++; // equivalente a num1+1=6
// console.log (num1)

// ejercicios decremento:
// decrementa el valor de una variable usando el operador --
// let num2 = 5;
// num2 --; // equivalente a num1+1=6
// console.log (num2)


// ejrcicio combinado
// let resultado = 2;
// resultado += 4 * 2; // primero raliza la multiplicacion y luego suma por eso el resultado no es 12 si no 10
// resultado /=3;
// console.log (resultado)

// concatenar 
// let nombre ="Juan";
// nombre += " Perez";
// console.log (nombre)

// array 
// let frutas = ["Pera"];
// frutas.push ("Mango"); // para agregar la fruta al arreglo (array)
// console.log (frutas)


//let nun1 = 5;
//let num2 = 3;
//
//let suma = num1 + num2;
//let resta = num1 - num2;
//let division = num1/num2;
//
//document.write (suma)

// ejercicio: numero negativo o positivo

// let numero = 5;
// if (numero > 0) {
//     alert ("El numero es positivo")
// } else if (numero < 0) {
//     alert ("El numero es negativo")
// } else {
//     alert ("El numero es cero")
// }

// Ejercicio 2: Usuario es mayor de edad.

// let edad = parseInt (prompt("Ingrese edad"));
// if (edad >= 18) {
//     alert ("El Usuario es mayor de edad")
// } else {
//     alert ("El Usuario es menor de edad")
// }

// ejercicio 3: validadr credenciales

// let usuario = "Daniel";
// let contra = 123;
// let usuarios = prompt ("Ingrese usuario");
// if (usuarios == usuario) {
//     let contraseña = parseInt(prompt ("Ingrese contraseña"));
//     if (contraseña == contra) {
//         alert ("bienvenido " + usuario)
//     } else {
//         alert ("Contraseña incorrecta")
//     }
// } else {
//     alert ("Usuario incorrecto")
// }

// bot simple con prompt 
// alert ("Hola soy un bot de respuestas simples");
// let nombre = prompt ("Ingresa tu nombre");
// 
// if (nombre){
//     alert ("Hola " + nombre + ", en que puedo ayudate?")
//     let pregunta = prompt ("Ingresa tu pregunta")
//     if (pregunta) {
//         alert ("Gracias por preguntar " + nombre + ". Lamentable soy un bot de pr")
//     } else {
//         alert ("No ingreaste una pregunta. Adios!!!")
//     }
// } else {
//     alert ("No ingresaste un nombre. Adios!!!")
// }

// ejercico de calculadora

// alert ("Hola soy una calculadora");
// alert ("1.Suma 2.Resta 3.Multiplicacion 4.Division")
// let resp = parseInt (prompt ("Ingresa opcion"))
// 
// if (resp == 1){
//     let num1 = parseInt (prompt ("Ingrese numero 1"))
//     let num2 = parseInt (prompt ("Ingrese numero 2"))
//     alert ("El resultado de la suma es: "+ (num1+num2))
// } else if (resp == 2) {
//     let num1 = parseInt (prompt ("Ingrese numero 1"))
//     let num2 = parseInt (prompt ("Ingrese numero 2"))
//     alert ("El resultado de la resta es: "+ (num1-num2))
// } else if (resp == 3) {
//     let num1 = parseInt (prompt ("Ingrese numero 1"))
//     let num2 = parseInt (prompt ("Ingrese numero 2"))
//     alert ("El resultado de la multipicacion es: "+ (num1*num2))
// } else if (resp == 4) {
//     let num1 = parseInt (prompt ("Ingrese numero 1"))
//     let num2 = parseInt (prompt ("Ingrese numero 2"))
//     alert ("El resultado de la division es: "+ (num1/num2))
// } else {
//     alert ("No Ingresaste una opcion valida. Adios!!!")
// }


//let operador = prompt ("suma, resta, multiplicacion o division")
//operador = operador.toLowerCase ();
//if (operador === "suma" || operador === "SUMA"){}

// ejercicio de clasificar las edades de las personas
// let edad = 25;
// if (edad < 18) {
//     console.log ("Eres mayor de edad")
// }else if (edad >= 18 && edad < 60){
//     console.log("Eres un adulto joven")
// }else{
//     console.log("Eres un adulto mayor")
// }

// ejercicio de notas
// let nota1 = parseInt(prompt("Ingrese nota primer periodo"))
// let nota2 = parseInt(prompt("Ingrese nota segundo periodo"))
// let nota3 = parseInt(prompt("Ingrese nota tercer periodo"))
// 
// let suma = nota1+nota2+nota3
// 
// if (suma >= 13 && suma <= 15) {
//    alert ("Ganaste el año")
// } else if (suma >= 9 && suma <=12){
//    alert("Casi no pasas")
// } else if (suma >= 6 && suma <= 8){
//    alert ("Quedaste reforzando")
// }else{
//    alert ("A que haz venido vago")
// }
// 
// // ejercicio calcular el iva 
// let ingresoanual = parseInt(prompt("Ingresos anuales"))
// let impuestos = ""
// if (ingresoanual >= 1000000){
//    console.log ("Excento")
// }else if (ingresoanual >= 800000){
//    console.log("Impuestos bajos")
// }else{
//    console.log("Impuestos altos")
// }

//ejercicio signos zodiacales 
// let dia = parseInt(prompt("Ingrese su dia de nacimiento:"))
// let mes = prompt("Ingrese su mes de nacimiento:")
// mes = mes.toLowerCase()
// 
// if (mes === "enero"){
//     if (dia<=19){
//         alert("Su signo zodiacal es Capricornio")
//     }else{
//         alert ("Su signo zodiacal es Acuario")
//     }
// }else if (mes ==="febrero"){
//     if (dia>=19){
//         alert("Su signo zodiacal es Piscis")
//     }else{
//         alert ("Su signo zodiacal es Acuario")
//     }
// }else if (mes === "marzo"){
//     if (dia <= 20){
//         alert ("Su signo zodiacal es Piscis")
//     }else{
//         alert ("Su signo zodiacal es Aries")
//     }
// }else if (mes === "abril"){
//     if (dia <= 19){
//         alert ("Su signo zodiacal es Aries")
//     }else {
//         alert ("Su signo zodiacal es Tauro")
//     }
// }else if (mes ==="mayo"){
//     if (dia<=20){
//         alert("Su signo zodiacal es Tauro")
//     }else{
//         alert ("Su signo zodiacal es Geminis")
//     }
// }else if (mes === "junio"){
//     if (dia <= 20){
//         alert ("Su signo zodiacal es Geminis")
//     }else{
//         alert ("Su signo zodiacal es Cancer")
//     }
// }else if (mes === "julio"){
//     if (dia <= 22){
//         alert ("Su signo zodiacal es Cancer")
//     }else {
//         alert ("Su signo zodiacal es Leo")
//     }
// }else if (mes ==="agosto"){
//     if (dia<=22){
//         alert("Su signo zodiacal es Leo")
//     }else{
//         alert ("Su signo zodiacal es Virgo")
//     }
// }else if (mes === "septiembre"){
//     if (dia <= 22){
//         alert ("Su signo zodiacal es Virgo")
//     }else{
//         alert ("Su signo zodiacal es Libra")
//     }
// }else if (mes === "octubre"){
//     if (dia <= 22){
//         alert ("Su signo zodiacal es Libra")
//     }else {
//         alert ("Su signo zodiacal es Escorpio")
//     }
// }else if (mes ==="noviembre"){
//     if (dia<=21){
//         alert("Su signo zodiacal es Escorpio")
//     }else{
//         alert ("Su signo zodiacal es Sagitario")
//     }
// }else{
//     if (dia <= 22){
//         alert ("Su signo zodiacal es Sagitario")
//     }else{
//         alert ("Su signo zodiacal es Capricornio")
//     }
// }

// Switch

// switch (expresion){
//     case valor1:
//         codigo a ejecutar
//     case valor2:
//         codigo a ejecutar
//     default:
//         codigo a ejecutar
// }

// dias semanas 
// let diasemana = parseInt (prompt("Ingrese un numero del 1 al 7"));
// let nombredia = "";
// 
// switch (diasemana){
//     case 1:
//         nombredia = "Lunes";
//         break;
//     case 2:
//         nombredia = "Martes";
//         break;
//     case 3:
//         nombredia = "Maiercoles";
//         break;
//     case 4:
//         nombredia = "Jueves";
//         break;
//     case 5:
//         nombredia = "Viernes";
//         break;
//     case 6:
//         nombredia = "Sabado";
//         break;
//     case 7:
//         nombredia = "Domingo";
//         break;
//     default:
//         nombredia = "Dia invalido"
// }
// alert ("El dia "+ diasemana + " es " + nombredia)

// opcion de vehiculo 
// let tipovehiculo = prompt("Que clase de vehiculo necesitas")
// let mensaje = ""
// 
// switch (tipovehiculo){
//    case "coche":
//        mensaje = "Un coche lo puedes conducir";
//        break;
//    case "bicicleta":
//        mensaje = "La bici la puedes montar";
//        break;
//    case "moto":
//        mensaje = "La moto la puedes manejar";
//        break;
//    default:
//        mensaje = "Te toco caminar";
// }
// alert (mensaje)

// Ejercicio ropa

// alert ("Que producto desea comprar?")
// let articulo = parseInt(prompt("1.Camisa 2.Pantalon 3.Zapatos 4.Medias"))
// let camisa$ = 50000;
// let pantalon$ = 80000;
// let zapatos$ = 300000;
// let medias$ = 20000;
// 
// switch (articulo){
//     case 1:
//         alert ("El precio de la camisa es: " + camisa$ + " y tiene un descuento del 5%")
//         alert ("Total a cancelar: " + (camisa$-(camisa$*0.05)))
//         break;
//     case 2:
//         alert ("El precio de la camisa es: " + pantalon$ + " y tiene un descuento del 10%")
//         alert ("Total a cancelar: " + (pantalon$-(pantalon$*0.1)))
//         break;
//     case 3:
//         alert ("El precio de la camisa es: " + zapatos$ + " y tiene un descuento del 15%")
//         alert ("Total a cancelar: " + (zapatos$-(zapatos$*0.15)))
//         break;
//     case 4:
//         alert ("El precio de la camisa es: " + medias$ + " y tiene un descuento del 2%")
//         alert ("Total a cancelar: " + (medias$-(medias$*0.02)))
//         break;
//     default:
//         alert ("Producto no valido")
// }

// opcion 2 ejercicio ropa

// let producto = prompt("Que producto desea facturar")
// let precio = prompt ("Que precio tiene el articulo")
// let descuento = prompt ("Porcentaje de descuento a aplicar")
// 
// switch (producto){
//     case "camisa":
//         total = precio * (descuento/100);
//     break;
//     case "pantalon":
//         total = precio * (descuento/100);
//     break;
//     case "zapatos":
//         total = precio * (descuento/100);
//     break;
//     case "medias":
//         total = precio * (descuento/100);
//     break;
//     default:
//         alert ("Producto invalido")
// }
// alert ("El precio total de su compra es: " + (precio - total))

// ejercicio geometrico

let figura = prompt("Cuantos lados tiene la figura?")

switch (figura){
    case 3:
        alert ("Es un triangulo");
        break;
    case 4:
        let lados = prompt ("Todos los lados son iguales?")
        if (lados = "si"){
            alert ("Es un cuadrado")
        }else{
            alert ("Es un rectangulo")
        }
        break;
    case 5:
        alert ("Es un pentagono");
        break;
    case 6:
        alert ("Es un hexagono")
        break;
}