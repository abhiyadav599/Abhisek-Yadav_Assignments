//Q1
/*var x:number , y:number;
var pro1 = new Promise(function(resolve,reject)
{
    if(1>0)
    resolve(x=15);
    else
    reject(4);
});
var pro2 = new Promise(function(resolve,reject)
{
    if(1>0)
    resolve(y =10);
    else
    reject(8);
});
Promise.all([pro1, pro2]).then(values =>{console.log(x + y);});*/

//Q2
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

//Q3
/*interface Printable{
    fname?:string;
    id?: number;
    area?:Number;
};
 
let circle :Printable ={
   area: 720,
};
let employee :Printable = {
    fname: "Sushmita",
    id:10001,
};
function printAll(circle, employee){
    console.log(circle);
    console.log(employee);
}
printAll(circle,employee);
*/
