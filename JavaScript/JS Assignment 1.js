//1.Sum of n numbers
sum();
function sum()
{
    var n = prompt("Enter a number:");
    var sum =0;
    for(i=0; i<=n; i++)
    {
        sum +=i;
    }
    document.write(sum + "<br>");
}
2.
// Sum of multiples of 3 and 5
add();
function add()
{
    var n = prompt("Enter a number:");
    var add = 0;
    for(i=0;i<=n;i++)
    {
        if((i%3 == 0 ) || (i%5==0))
        {
            add+=i;
        }
    }
document.write(add +"<br>");
}

//3. Even and Odd
evenOdd(n);

function evenOdd(a)
{
    if(a%2==0)
    document.write("even <br>" );
    else
    document.write("odd <br>" );
}

//4. Number of flips
var fl = prompt("Enter the number of flips:");
flip(fl);
function flip (n)
{
    var f = prompt("enter the number of times head appears:");
    document.write(f/n + "<br>");
}

//5.Next 20 leap years
leapyear();
function leapyear()
{
    var current = 2021;
    var leap =0;
    while(leap <=20)
    {
        if((current%4 == 0 && current%100 !=0) || current%400 ==0)
        {
            document.write(current +"  ");
            leap++;
        }
        current++;
    }
    document.write("<br>");
}

//6.Hello world string rectangular
hello();
function hello()
{
    var str =prompt("Enter a string");
    var strArray = str.split(" ");
    for(i=0;i<strArray.length+4; i++)
    {
        document.write("*");
    }
    document.write("<br>");
    for(i=0;i<strArray.length;i++)
    {
        document.write("* " + strArray[i] + " * <br>" );
    }
    for(i=0;i<strArray.length+4; i++)
    {
        document.write("*");
    }
    document.write("<br>")
}


//7.Currency value
currency();

function currency()
{
    var amt = prompt("Enter the value in dollars:");
    document.write((amt*74.28)+" INR (Indian Rupees) <br>" + (amt*109.14)+" Yen (Japanese Yen) <br>" + (amt*0.84) + " Euro (Euro) <br>"
                    + (amt*0.72)+ " Pound sterling (Pound sterling) <br>");
}


//8.Concatenate two arrays
concatenate();
function concatenate()
{
    var arr1 = ['a','b','c'];
    var arr2 = [1,2,3];
    document.write(arr1.concat(arr2));
}

//9. Alternate Concat
altcon();
function altcon()
{
    var str1 = ['a','b','c'];
    var str2 = [1,2,3];
    var str = [];
    var j=0,k=0;
    for(i=0; i<str1.length+str2.length; i++)
    {
        if(i%2==0)
        {
            str[i] = str1[j];
            j++;
        }
        else{
            str[i] = str2[k];
            k++;
        }
    }
    document.write(str);

}


//10.Fibonaci series
fibo();
function fibo()
{
    var a=1, b=1 , c;
    for(i=0;i<100;i++)
    {
        document.write(a + "<br>");
        c =a+b;
        a=b;
        b=c;
    }
}

//11. Reverse an Array
reverse();
function reverse()
{
    var arr = [5,15,16,20,23,26];
    var temp, n = arr.length;
    for(i=0;i<n/2; i++)
    {
        temp = arr[n-i];
        arr[n-i] = arr[i];
        arr[i] = temp;
    }
    document.write(arr);
}

//13 Sum of numbers using loop
loop();
function loop()
{
    var a = [9,10,11,15,20,25];
    var s1=0,s2=0, s3=0, n =a.length;
    for(i=0; i<n ; i++)
    {
        s1+=a[i];
    }
    i=0;
    while(i<n){
        s2+=a[i];
        i++;
    }
    i=0;
    do{
        s3+=a[i];
        i++;
    } while(i<n);
    document.write("For loop:" + s1 + "<br>" + "while loop:" + s2 + "<br>" + "do while loop:" + s3 + "<br>");
}


//14. Random 100 numbers array
random();
function random()
{
    var a = [5,15,17,65,100,46,1,24,-95,201,-5];
    var max = Math.max(...a);
    var min = Math.min(...a);
    var ev,od,avg,sum=0;
    for(i=0;i<a.length;i++)
    {   
        sum +=a[i];
        if(a[i]%2==0) ev++;
        else od++;
    }
    
    document.write("maximum=" + max  + " <br>minimum=" + min + "<br>sum=" + sum + "<br>average=" + sum/a.length+ "<br>");
    if(ev>od)
    document.write("Even");
    else
    document.write("Odd");
}

// 15. Sorting
sorting();
function sorting()
{
    var a = [32, 50, 62, 57, 96, 47, 38, 54, 84, 37, 46, 35, 22, 41, 8, 18, 94, 54, 70, 10];
    var temp, n=a.length;
    for(i=0;i<n-1;i++)
    {
        for(j=0; j<n-i-1;j++)
        {
            if(a[j]>a[j+1])
                {
                    temp = a[j+1];
                    a[j+1] = a[j];
                    a[j] = temp;
                }
        }
    }
    for(i=0;i<n;i++)
    {
        document.write(a[i] + " ");
    }
}


//Q17 rotate a list by k elements
function leftRotate(a, k, n) {
    for (i = 0; i < k; i++) {
        leftRotate_One(a, n);
    }
    console.log(a)
}

function leftRotate_One(a, n) {
    var i, temp;
    temp = a[0];
    for (i = 0; i < n - 1; i++)
           a[i] = a[i + 1];
        a[n - 1] = temp;
}
var a = [3, 6, 4, 1, 4, 6, 4, 9, 66]
leftRotate(a, 5, 9)
console.log(a)

//Q18 translate to pig latin
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
        ? str
            .replace(consonantRegex, "")
            .concat(myConsonants)
            .concat("ay")
        : str.concat("way");
}

translatePigLatin("consonant");

//Q19 simple calculator
  
    if (operator == '+') {           // use + (addition) operator to add two numbers  //
    result = number1 + number2;  
}  
else if (operator == '-') {         // use -  (subtraction) operator to subtract two numbers  //
    result = number1 - number2;  
}  
else if (operator == '*') {         // use * (multiplication) operator to multiply two numbers  //
    result = number1 * number2;  
}  
else {  
    result = number1 / number2;         // use / (division) operator to divide two numbers  //
}  
window.alert(" Result is" + result);  