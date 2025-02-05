
let a=300
if(true)
{
    let a=10
    const b=20
    var c=30
   // console.log("Inner :",a);
    
}   

// for(let i=0;i<Array.length;i++)
// {
//     const element=array[i];
// }

//console.log(a);
// console.log(b);
// console.log(c);  //global scope

function one()
{
    const username="karan"

    function two()
    {
        const website="Youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
// one()

if(true)
{
    const username ="karan"
    if(username =="karan")
    {
        const website="youtube"
        console.log(username+website);    
    }
    // console.log(website);
    
}
// console.log(username);
console.log(Addone(5));
function Addone(num)
{
    return num+1
}

AddTwo(5)
const AddTwo=function(num){
    return num+2
}
