function sum() {
    var n, sum = 0;
    n = parseInt(document.getElementById("number").value);
    sum = n * (n + 1) / 2;
    document.getElementById("res").innerHTML = "Sum of " + n + " natural numbers is : " + sum;
}


function  sum3or5() {
    let i = 1, sum = 0;
    n = parseInt(document.getElementById("number").value);
    while(i <= n) {
        if(i % 3 == 0 || i % 5 == 0){
            sum += i;
            }
            i++;
        }
    document.getElementById("res1").innerHTML = "Sum of 3 and 5 natural numbers is : " + sum;
}


function evenorodd() {
    n = parseInt(document.getElementById("number").value);
    if(n % 2 == 0){
        document.getElementById("res2").innerHTML = "The "+ n + "is Even";
    }
    else{
        document.getElementById("res2").innerHTML = "The "+ n + "is odd";
    }
}


function coinFlip() {
    return(Math.random() < 0.3) ? 'Heads' : 'Tails';
}


function flip(){
    howManyTimes= parseInt(document.getElementById("flip").value); 
    var countHeads=0; 
    for (var i=0; i<howManyTimes;i++){
    if (coinFlip()==='Heads'){
        countHeads++;
        }
    }
    document.getElementById("res3").innerHTML = "Heads Ratio of "+(howManyTimes)+"-->"+(countHeads/howManyTimes);
}

function leapyear() {
    const isLeap = year => {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    };
    const nextNLeap = n => {
        const arr = [];
        let year = new Date().getFullYear() + 1;
        while (arr.length < n) {
            if (isLeap(year++)) {
                arr.push(year - 1);
            };
        };
        return arr;
    };
    document.getElementById("res4").innerHTML = nextNLeap(20);
}
function printFrame(arr) {
    function fill(str, length, char) {
        return (str.length < length) ? fill(str + char, length, char) : str;
    }
    let size = arr.map((str) => { return str.length; }).reduce((a, b) => {
        return Math.max(a, b);
    });
    let line = fill('', size + 4, '*');
    arr = arr.map((element) => { return '* ' + fill(element, size, ' ') + ' *'; })
    arr.unshift(line);
    arr.push(line);
    return arr.join('\n');;
}

function frame() {
    document.getElementById("res5").innerHTML = printFrame(["Hello", "World", "in", "a", "frame"]);
}

var gbp, usd, eur, cad, aud;
function init()
{
    gbp = document.getElementById("GBP");
    usd = document.getElementById("USD");
    eur = document.getElementById("EUR");
    cad = document.getElementById("CAD");
    aud = document.getElementById("AUD");
}

function gbpfunc()
{
    usd.value = parseFloat(gbp.value) * 0.49246;
    eur.value = parseFloat(gbp.value) * 0.69714;
    cad.value = parseFloat(gbp.value) * 0.50221;
    aud.value = parseFloat(gbp.value) * 0.43497;
}

function eurfunc()
{
    gbp.value = parseFloat(eur.value) * 1.43448;
    usd.value = parseFloat(eur.value) * 0.70641;
    cad.value = parseFloat(eur.value) * 0.72037;
    aud.value = parseFloat(eur.value) * 0.62382;
}

function cadfunc()
{
    gbp.value = parseFloat(cad.value) * 1.99169;
    usd.value = parseFloat(cad.value) * 0.98054;
    eur.value = parseFloat(cad.value) * 1.38814;
    aud.value = parseFloat(cad.value) * 0.86613;
}

function audfunc()
{
    gbp.value = parseFloat(aud.value) * 2.29964;
    usd.value = parseFloat(aud.value) * 1.13262;
    eur.value = parseFloat(aud.value) * 1.60329;
    cad.value = parseFloat(aud.value) * 0.88297;    
}

function usdfunc()
{
    gbp.value = parseFloat(usd.value) * 2.03032;
    eur.value = parseFloat(usd.value) * 1.41544;
    cad.value = parseFloat(usd.value) * 1.01941;
    aud.value = parseFloat(usd.value) * 0.88297;
}

init();

function concat() {
    const arr1 = ["a", "b","c"];
    const arr2 = ["1", "2", "3"];
    const arr3 = arr1.concat(arr2); 
    document.getElementById("example").innerHTML = "["+arr1+ "]" +" "+ "["+arr2+ "]";
    document.getElementById("res6").innerHTML = arr3;
}

function alter() {
    let a = [1, 2, 3];
        let b = ['a', 'b', 'c'];
        var newList = function (a, b) {
            let l = a.length + b.length;
            let r = [];
            let j = 0, k = 0;
            for (let i = 0; i < l; i++) {
                if (i % 2 == 0) {
                    r[i] = a[j++];
                } else {
                    r[i] = b[k++];
                }
            }
            return r;
        }
        document.getElementById("res7").innerHTML = newList(a, b);
}


function fibo() {
    var pop = 100;
        var var1 = 1, var2 = 1;
        document.write("Here is the fibonacci series : ");
        document.write("", var1, " ");
        document.write("", var2, " ");
        var counter, sum;
        for (counter = 2; counter < pop; counter++) {
            sum = var1 + var2;
            document.write("", sum, " ");
            var1 = var2;
            var2 = var3;
        }
}

function rev() {
    var a = [1, 2, 3, 4, 5];
        a.reverse();
        document.getElementById("res9").innerHTML = a;
}