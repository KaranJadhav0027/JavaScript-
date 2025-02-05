

function sayMyName()
{
    console.log("k");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("J");
}
// sayMyName()

// function addTwoNumber(number1 ,number2)
// {
//    console.log( number1+number2);
   
// }

function addTwoNumber(number1 ,number2)
{
    // let result=number1+number2;
    // return result
    return number1+number2;
   
}
const result=addTwoNumber(3,4)
// console.log("Result:",result);


//function loginUserMessage(username=)
function loginUserMessage(username="Sam")
{
   // if(username ===undefined)  // OR
   if(!username)
    {
           console.log("please enter a user name");
           return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("karan"));
// console.log(loginUserMessage());   //output undefine

function calculateCartPrice(...num1)
{
  return num1
}
//console.log(calculateCartPrice(200 ,400 ,500,2000));

const user ={
    username:"karan",
    price:199
}
function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`); 
}
// handleObject(user)

handleObject(
    {
        username:"sam",
        price:309
    }
)
const MyNewArray=[200,400,300,500]

function returnSection(getArray)
{
    return getArray[1]
}
// console.log(returnSection(MyNewArray));
console.log(returnSection([200,400,300,500]));