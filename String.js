const name="karan"
const iCount=50

//console.log(name+iCount+ " value");  // nnot use

console.log(`hello my name is ${name} and my repo count is ${iCount}`);

const gameName=new String('karan--hd--com')

console.log(gameName[0]); //k

console.log(gameName.__proto__);

console.log(gameName.length);  //5
console.log(gameName.toUpperCase()); //KARAN
console.log(gameName.charAt(2));  //r
console.log(gameName.indexOf('n')); //4

const newString=gameName.substring(0,4) //kara
console.log(newString);

const anotherString=gameName.slice(-8,4) //
console.log(anotherString);

//trim
const newString1="      karan     "
console.log(newString1); 
console.log(newString1.trim()); //karan // remove white space

const url="http://xyzrr.com/fczf%20dgvdgs"

console.log(url.replace('%20','--'));  //replase

console.log(url.includes('xyz')); //true

console.log(gameName.split('-'));















