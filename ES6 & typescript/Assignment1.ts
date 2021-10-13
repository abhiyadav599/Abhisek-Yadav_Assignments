//Q1
/*function problem1()
{
    const value = 5;
    value = 10; // gives error
}*/

//Q2
/*function problem2()
{
    if(6>2)
    {
        var b = 50;
    }
    console.log(b); //gives error
}*/

//Q3
/*let Order = {
    id: 100,
    title:'Pav Bhaji',
    price: 250,
    printOrder()
    {
        console.log(this.id);
    },
    getPrice()
    {
        console.log(this.price);
    }
}
const copyobj = Object.assign({},Order);
console.log(copyobj);*/

//Q4
/*let array= ['hello', 'this', 'is','arraystring','to','object'];
let newArr = array.map(item => {
   return {
     'name': item,
     'length':item.length
   }
 })
 console.log(newArr);*/

 //Q5 A

 /*let add = function (value =10)
 {
     return value;
 }
 console.log("The default values is : " + add());*/


 //Q5 B

 /*let userFriends = function(username , ...userfriends)
 {
     console.log( "username:" username);
     for(let i in userfriends)
     console.log(userfriends[i]);
 };
 let username = "Sushmita";
 let userfriends = ["Riya", "Priya", "Chia"];
 userFriends(username, userfriends);*/

 //Q5 C

 /*let printCapitalNames = function(...names)
 {
     for(let i in names)
     console.log(names[i].toUpperCase());
 }
  let nameArray = ["Sushmita", "Riya", "Chia", "Priya", "Mia"];
 printCapitalNames(...nameArray);*/

 //Q6

 /*let myname = "Sushmita";
 let laptopmodel = 'Ideapad L340';
 let deskno = 10001;
 console.log(`Dear Sysnet, I am facing an issue with my pc I kindly request you to look into it.
 My details are as follows: Name : ${name}, LaptopModel: ${laptopmodel}, Deskno: ${deskno} `);*/


 //Q7A

 /*let food = ['Pav Bhaji', 'Masala Dosa','Palak Paneer','PastaBolognese'];
 let [item1, item2, item3, item4] = food;
 console.log(item3);*/

 //Q7B

/*let org ={name:'Sushmita',address:{city:'Mumbai',pincode:401107}};
let {name,address}= org;
 console.log(address.pincode);*/
 

//Q8

/*class Account{
    constructor(id,name,balance)
    {
        this.id = id;
        this.name = name;
        this.balance = balance; 
    }
}
class SavingsAccount extends Account{
    constructor(id,name,balance,interest)
    {
        super(id,name,balance);
        this.interest = interest;
    }
    totalBalance = () => { this.balance += this.interest;
        console.log(this.balance);};
}
class CurrentAccount extends Account{
    constructor(id,name,balance,cashCredit)
    {
        super(id,name,balance);
        this.cashCredit = cashCredit;
    }
    totalBalance = () => { this.balance += this.cashCredit;
        console.log(this.balance);};
}
let S1 = new SavingsAccount(1001,'Sushmita',40000,4000);
let S2 = new CurrentAccount(10003, 'Riya', 30000,3800);
S1.totalBalance();
S2.totalBalance();*/