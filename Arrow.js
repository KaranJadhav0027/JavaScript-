const user ={
    username:"hitesh",
    price:990,

    welcomeMessage :function()
    {
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//  console.log(this);

// function chai()
// {
//     let username="karan"
//      console.log(this);
     
// }
// chai()

// const chai=function()
// {
//     let username="karan"
//      console.log(this.username); 
// }

const chai= ()=>
{
    let username="karan"
     console.log(this.username); 
}
chai()