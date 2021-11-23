//-----------------Quiz 1------------------//

//Crear variables para guardar los siguientes datos de una persona:
var Nombre
var Apellidos
var Edad
var Ciudad

//Asignar valores a las variables creadas.

Nombre= "Kevin"
Apellidos= "Salvador Casas"
Edad = 24
Ciudad= "Oaxaca de Juárez"

//-----------------Quiz 2------------------//
//Crear un array con 5 valores numericos y sumar todos esos valores accediendolos mediante las posiciones
var precios = [5,10,20,40]
var sumatoria = precios[0]+ precios[3]+precios[2]

//-----------------Quiz 3------------------//
//Crear un objeto de nombre user con las propiedades 
//nombre, apellidos, y edad, 
//despues de crear el objeto crear una nueva variable llamada 
//nombreCompleto de tipo string y guardar en esta variable 
//el nombre y el apellido concatenados.

user = {
    nombre: "Kevin",
    apellidos: "Salvador",
    edad:23
}

var nombreCompleto = user.nombre + " " + user.apellidos

//-----------------Quiz 4------------------//
//1.Crear un arreglo con 5 objetos, cada uno 
//de estos objetos debe de tener las propiedades 
//nombre, email y edad, con valores asignados por ti.

var personas = [
    {nombre: "Kevin", email:"kevinsal.casas@gmail.com", edad:23},
    {nombre: "Juan", email:"juan@gmail.com", edad:28},
    {nombre: "Pedro", email:"pedro.alcocer@gmail.com", edad:35}
]
 //2. Crear un arreglo de nombre correos y guardar todos los correos 
 //que existan en el arreglo del primer paso(debes de acceder a los 
 //correos apoyandote en lo aprendido anteriormente).

 var correos = [personas[0].email,personas[1].email,personas[2].email]
 