// Singleton   by creating by constructruct
//Object.create

//object literals

const mySym=Symbol("Key1")

const JsUser={ 
    name:"Karanj",
    "full name":"Karan Jadhav",
    [mySym]:"myKey1",
    age:21,
    location:"pune",
    email:"karan@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email); //karan@google.com
console.log(JsUser["email"]); //karan@google.com
console.log(JsUser["full name"]); //Karan Jadhav
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

JsUser.email="karan@chatgpt.com"
//console.log(JsUser);

//Object.freeze(JsUser)
JsUser.email="karan@micersdf.com"
//console.log(JsUser);

JsUser.greeting=function()
{
    console.log("Hello js User");  
}

JsUser.greetingTwo=function()
{
    console.log(`Hello js User,${this.name}`);
    
}
//console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






