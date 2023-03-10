//* Iteración #1: Arrows

console.log("");
console.log("- - - - - ITERATION # 1 ARROWS - - - - -");

//? Crea una arrow function que tenga dos parametros a y b y 
//? que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
//? por consola la suma de los dos parametros.

const it1 = (a=10,b=5) => {
    let result = a + b;
    return result;
}

// 1.1 Ejecuta esta función sin pasar ningún parametro

console.log("El valor del apartado 1.1 es:", it1());

// 1.2 Ejecuta esta función pasando un solo parametro

console.log("El valor del apartado 1.2 es:", it1(20), "le pasamos el valor 20");

// 1.3 Ejecuta esta función pasando dos parametros

console.log("El valor del apartado 1.3 es:", it1(20,10), "le pasamos los valores 20 y 10");


//* Iteración #2: Destructuring

console.log("");
console.log("- - - - - ITERATION # 2 DESTRUCTURING - - - - -");

// 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
// del objeto usando object destructuring e imprimelas por consola. Cuidado, 
// no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

let {title,year} = game;
console.log("El Destructuring del 2.1 es:", title, year);

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

let [fruit1, fruit2, fruit3] = fruits;
console.log("El Destructuring del 2.2 es:", fruit1, fruit2, fruit3);

// 2.3 En base al siguiente javascript, usa destructuring para crear 2 
// variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {animalName: 'Bengal Tiger', animalRace: 'Tiger'}
};

let {animalName, animalRace} = animalFunction();
console.log("El Destructuring del 2.3 es:", animalName, animalRace);

// 2.4 En base al siguiente javascript, usa destructuring para crear las 
// variables name y itv con sus respectivos valores. Posteriormente crea 
// 3 variables usando igualmente el destructuring para cada uno de los años 
// y comprueba que todo esta bien imprimiendolo.

const car = {carName: 'Mazda 6', itv: [2015, 2011, 2020] };

let {carName, itv} = car;
let [year0, year1, year2] = itv;
console.log("El Destructuring del 2.4 es:", carName, year0, year1, year2);



//* Iteración #3: Spread Operator

console.log("");
console.log("- - - - - ITERATION # 3 SPREAD OPERATOR - - - - -");

// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

const pointsListCopy = [...pointsList];
console.log("El Spread Operator del 3.1 es:", pointsListCopy);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopy = {...toy};
console.log("El Spread Operator del 3.2 es:", toyCopy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
const pointsList0 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

const pointsListConcat = [...pointsList0,...pointsList2];
console.log("El Spread Operator del 3.3 es:", pointsListConcat);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.
const toy0 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const newToy = {...toy0,...toyUpdate};
console.log("El Spread Operator del 3.4 es:", newToy);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors];
colorsCopy.splice(2,1);
console.log("El Spread Operator del 3.5 es:", colorsCopy);


//* Iteración #4: Map

console.log("");
console.log("- - - - - ITERATION # 4 MAP - - - - -");

// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersName = users.map(function(userName){return userName.name});
console.log("El Map del 4.1 es:", usersName);


// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const users0 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const users0Name = users0.map(function(user){
    let letter = user.name;
    if (letter.charAt() === "A"  || letter.charAt() === "a"){
        return "Anacleto";
    } else {
        return user.name
    }
});
console.log("El Map del 4.2 es:", users0Name);


// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citiesMap = cities.map(function(city){
    if(city.isVisited === true){
        return city.name + " (Visitado)";
    } else {
        return city.name;
    }  
});

console.log("El Map del 4.3 es:", citiesMap);

//* Iteración #5: Filter

console.log("");
console.log("- - - - - ITERATION # 5 FILTER - - - - -");

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const greaterThan18 = ages.filter(function(age){
    if (age > 18) return age;
})

console.log("El Filter del 5.1 es:", greaterThan18);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
const ages0 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pairAges = ages.filter(function(age){
    if (age%2 === 0) return age;
})

console.log("El Filter del 5.2 es:", pairAges);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const gamesFilter = streamers.filter(function(streamer){
    if (streamer.gameMorePlayed === "League of Legends") return streamer;
})

console.log("El Filter del 5.3 es:", gamesFilter);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
const streamers0 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AUronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamerU = streamers0.filter(function(streamer){
    if (streamer.name.includes("u") || streamer.name.includes("U")) return streamer;
});

console.log("El Filter del 5.4 es:", streamerU);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.

const streamerLegend = streamers0.filter(function(streamer){
    if (streamer.gameMorePlayed.includes("Legends")){
        if(streamer.age > 35){
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        }
        return streamer;
    }
});

console.log("El Filter del 5.4 es:", streamerLegend);

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

//! Not working

//* let action = function myFunction() {
//*     let x = document.getElementById("input").value;
//*     console.log(x);
//*     return x;
//* };

//* const streamerInput = streamers1.filter(function(streamer){
//*     let text = action();
//*     if (streamer.name.includes(text)){    
//*         return streamer;
//*     }
//* });

//* document.getElementById("input").addEventListener("input", action);

//* console.log("El Filter del 5.5 es:", streamerInput);


// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

// <!doctype html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
//              <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//              <meta http-equiv="X-UA-Compatible" content="ie=edge">
//              <title>Document</title>
// </head>
// <body>
//   <input type="text" data-function="toFilterStreamers"/>
//   <button data-function="toShowFilterStreamers">Filter</button>
// </body>
// </html>



//* Iteración #6: Find

console.log("");
console.log("- - - - - ITERATION # 6 FIND - - - - -");

// 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];

const numberFound = numbers.find(function(element) { return element === 100});
console.log("El Find del 6.1 es:", numberFound);

// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const movieFound = movies.find(function(movie) {
    if (movie.date === 2010) return movie;
});

console.log("El Find del 6.2 es:", movieFound);

// 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
// 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
// spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
// lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const alienFound = aliens.find(function(alien) { 
    if (alien.name === "Cucushumushu") return alien;
});

const mutationFound = mutations.find(function(mutation) { 
    if (mutation.name === "Porompompero") return mutation;
});

//! Not the desired result

const foundFusion = {...alienFound, ...mutationFound};
console.log("El Find del 6.3 es:", foundFusion);


//* Iteración #7: Reduce

console.log("");
console.log("- - - - - ITERATION # 7 REDUCE - - - - -");

// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sumNotes = exams.reduce(function(accumulator,exam){
	return accumulator + exam.score;
}, 0);

console.log("El Reduce del 7.1 es:", sumNotes);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().

const sumNotes0 = exams.reduce(function(accumulator,exam){
	if (exam.score >= 5) {
		return accumulator + exam.score;
	} else {
		return accumulator;
	}
}, 0);

console.log("El Reduce del 7.2 es:", sumNotes0);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

//! Must be a .reduce() way to calculate this...

const mediaNotes = exams.reduce(function(accumulator,exam){
	return (accumulator + exam.score);
}, 0);

console.log("El Reduce del 7.3 es:", (mediaNotes/exams.length));



//* Iteración #8: Bonus

console.log("");
console.log("- - - - - ITERATION # 8 BONUS - - - - -");

// 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
// .filter() y usa .reduce() para conseguir la media de sus .score. 
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
// array .gender.

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

const gendersFilter = videogames.filter(function(game){
	if (game.genders.includes("RPG")){
		return game;
	}

});

const sumScores = gendersFilter.reduce(function(accumulator,scores){
	console.log("ACC",accumulator); console.log("SUMA",scores);
	return accumulator + scores.score;
}, 0);

console.log("El Reduce del 8.1 es:", sumScores/gendersFilter.length);