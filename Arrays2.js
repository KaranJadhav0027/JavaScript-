const Marvel_heros =["thor","Ironman","Spiderman"]

const dc=["superman","flash","batman"]

//Marvel_heros.push(dc)

//console.log(Marvel_heros);


//const newHeros=Marvel_heros.concat(dc);
//console.log(newHeros);  //murj two or more array

const AllNewHeros=[...Marvel_heros,...dc]
//console.log(AllNewHeros);

const AnotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const realAnotherArray=AnotherArray.flat(Infinity)

console.log(realAnotherArray);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name :"Hitesh"})); //Instristing  define key or name 

let Score1 =100
let Score2 =200
let Score3 =300

console.log(Array.of(Score1,Score2,Score3));

