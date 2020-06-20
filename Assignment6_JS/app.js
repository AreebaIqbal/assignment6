//ASSIGNMENT # 6 JAVASCRIPT 
/*
// CHAP 21-25 TASK 1 //
var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var fullName = firstName + lastName;
alert("Hello! "+fullName);

// CHAP 21-25 TASK 2 //
var Phone = prompt("Enter your Favourite Phone");
var length = Phone.length;
document.write(" My Favourite phone is: "+Phone +" <br> Length of String: " +length);



// CHAP 21-25 TASK 3 //
var nationality ="Pakistani";
var index = nationality.indexOf("n");
document.write(String: "+nationality +" <br> Index of 'n': " +index);


// CHAP 21-25 TASK 4 //
var vari ="Hello World";
var index = vari.lastIndexOf("l");
document.write("String: "+vari +" <br> Last Index of 'l': " +index );



// CHAP 21-25 TASK 5 //
var nationality ="Pakistani";
var index = nationality.charAt(3);
document.write("String: "+nationality +" <br> Character at index 3: " +index);



// CHAP 21-25 TASK 6 //
var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var fullName = firstName.concat(lastName);
document.write("Hello! "+fullName);




// CHAP 21-25 TASK 7 //
var city = "Hyderabad";
var replaceCity = city.replace("Hyder", "Islam")
document.write(" City: "+city +" <br> After Replacement: " +replaceCity);




// CHAP 21-25 TASK 8 //
var message = "Ali and Sami are best friends. They play cricket and football together."; 
var replace = message.replace(/and/g, "&")
document.write(message +" <br><br><br> After Replacement: <br>" +replace);



// CHAP 21-25 TASK 9 //
var str = "472";
var number = parseInt(str);
document.write(" Value: "+str +" <br> Type: " +typeof(str) +" <br> Value: " +number +" <br> Type: " +typeof(number));



// CHAP 21-25 TASK 10 //
var dry = prompt("Enter any Dry Fruit");
var changeCase = dry.toUpperCase();
document.write(" User Input: "+dry +" <br> Upper Case: " +changeCase);



// CHAP 21-25 TASK 11 //
var input = prompt("Enter any Dry Fruit");
var first = input.slice(0,1);
first = first.toUpperCase();
var second = input.slice(1);
second = second.toLowerCase();
changeCase = first + second;
document.write("User Input: "+input +" <br> Title Case: " +changeCase);




// CHAP 21-25 TASK 12 //
var num = 67.38;
var str = num.toString();
str = str.replace(".","")
document.write("Number: "+num +" <br> Result: " +str);



// CHAP 21-25 TASK 13 //
var user = prompt("Enter Username");
 for( var i = 0; i < user.length; i++){
     if (user[i] === "@" || user[i] === "," || user[i] === "." || user[i] === "!" ){
         alert(" Enter a Valid Password");
         break;
     }
 }

 

// CHAP 21-25 TASK 14 //
var A = ["CAKE", "APPLE PIE", "COOKIE", "CHIPS", "PATTIES"];
var order = prompt("Welcome to ABC Bakery. What do you want to order?");
order = order.toLowerCase();
var index = -1;
var item = "";
for(var i = 0; i< A.length; i++){
    if(order === A[i]){
        item = A[i];
        index = i;
        break;
    }
    
}
if(index != -1 && item != ""){
    document.write(+order +" is available at index "+i +" in our Bakery.");
}

else{
    document.write(" We are Sorry. "+order +" is not available in our Bakery ");
}


// CHAP 21-25 TASK 15 //
var Password = prompt("Enter Password");
for( var i = 0; i < Password.length; i++){
    if( Password.slice(0) >= 'A' && Password.slice(0) <= 'Z' || Password.slice(0) >= "a" && Password.slice(0) <= 'z')
    {
        if( Password[i] >= 'A' && Password[i] <= 'Z' || Password[i] >= "a" && Password[i] <= 'z' || Password[i] >= 0 && Password[i] <= 9)
        {
             if(Password.length >= 6)  
                {
                    document.write('Strong Password..!');
                }
             else{
                document.write('Password must be atleast 6 characters long..!');
                break;
             } 

        }
        else{
            document.write("Password must contains only characters and numbers...!");
            break;
        }
    }
    else{
        document.write("Password can not begin with a Number or Character. \nPlease Enter a Valid Password");
        break;
    }
}



// CHAP # 21-25 TASK 16 //
var university = "University of Karachi";
var uni = university.split("");
for(var a=0; a < uni.length; a++){
    document.write("<br>" +uni[a] )
}





// CHAP # 21-25 TASK 17 //
var input = prompt("Enter you Country");
var lastChar = input.charAt(input.length-1);
alert("Last character of input: " +lastChar)



// CHAP # 21-25 TASK 18 //
var string = "The quick brown fox jumps over the lazy dog";
var count = 0;
for(var i = 0; i < string.length; i++){
    if (string.slice(i,i+3) === "the" || string.slice(i,i+3) === "The"){
        count=count+1;
    }
}
document.write(" Text: "+string +" <br> There are " +count +" occurence(s) of word 'the'.");






// CHAP 26-30 TASK 1 //
var num = prompt("Enter any positive integer?");
var round = Math.round(num);
var ceil = Math.ceil(num);
var floor = Math.floor(num);
document.write(" Number: "+num +" <br> Round Off Value: " +round +"<br> Ceil Value: " +ceil +"<br> Floor Value: " +floor);




// CHAP 26-30 TASK 2 //
var num = prompt("Enter any Negative Integer?");
var round = Math.round(num);
var ceil = Math.ceil(num);
var floor = Math.floor(num);
document.write("Number: "+num +" <br> Round Off Value: " +round +"<br> Ceil Value: " +ceil +"<br> Floor Value: " +floor);



// CHAP 26-30 TASK 3 //
var num = prompt("Enter any integer?");
var absolute = Math.abs(num);

document.write(" Number: "+num +" <br> Absolute Value: " +absolute);



// CHAP 26-30 TASK 4 //
var randonDice = Math.random();
var dice = randonDice * 6;
dice = Math.ceil(dice);
document.write("Random Dice Value: " +dice);




// CHAP 26-30 TASK 5 //
var randonCoin = Math.random();
var coin = randonCoin * 2;
coin = Math.ceil(coin);
if( coin === 2){
    alert(+coin +"\nRandom Coin Value: Heads");
}
else{
    alert(+coin +"\nRandom Coin Value: Tails");
}



// CHAP 26-30 TASK 6 //
var random = Math.random();
var num = random * 100;
num = Math.floor(num);
document.write(" Random Number between 1 and 100: "+num);
 


// CHAP 26-30 TASK 7 //
var weight = prompt("Enter your weight in kgs?");
weight = parseInt(weight);
document.write(" The weight of user is: "+weight +" kilograms");
 



// CHAP 26-30 TASK 8 //
var secret = Math.random() * 10;
secret = Math.ceil(secret);
var guess = prompt("Guess a Number between 1 to 10?");
if ( guess === secret){
    alert("Congratulations...!");
}
else{
    alert("Try Again..!")
}




// CHAP 31-34 TASK 1 //
var today = new Date();
document.write(today);




// CHAP 31-34 TASK 2 //
var monthsName = ["January", "Feburary", "March", "April", 'May', "June", "July", "August", "Septembe", "October", "November", "December"];
var today = new Date();
var month = today.getMonth();
alert(monthsName[month]);


// CHAP 31-34 TASK 3 //
var date = new Date();
var today = date.toString();
var day = today.slice(0,3);
alert("Today is " +day);



// CHAP 31-34 TASK 4 //
var date = new Date();
var day = date.getDay();
if(day === 0 || day === 1){
    alert("It's a Fun Day");
}
else{
    alert("It's a Working Day");
}



// CHAP 31-34 TASK 5 //
var date = new Date();
var day = date.getUTCDate();
if( day < 16 ){
    alert("First fifteen days of the month");
}
else{
    alert("Last days of the month");
}



// CHAP 31-34 TASK 6 //
var date = new Date();
alert(date.getHours());
var miliseconds = date.getTime();
var minutes = miliseconds / (60*60);
document.write("Current Date: "+date +"<br> Elapsed Miliseconds since January 1, 1970: "+miliseconds +"<br> Elapsed Minutes since January 1, 1970: " +minutes);




// CHAP 31-34 TASK 7 //
var date = new Date();
var hour = date.getHours();
if( hour < 12 ){
    alert("It's AM");
}
else{
    alert("It's PM");
}



// CHAP 31-34 TASK 8 //
var laterDate = new Date("Dec 31, 2020");
document.write("Later Date: " +laterDate);



// CHAP 31-34 TASK 9 //
var d = new Date("Jun 18, 2015");
var dMili = d.getTime();
var date = new Date();
var mili = date.getTime();
var difference = mili - dMili;
var totalDays = difference / ( 1000 * 60 * 60 * 24 );
totalDays = Math.round(totalDays);
document.write(totalDays +" days have passed since 1st Ramdan, 2015" );




// CHAP 31-34 TASK 10 //
var d = new Date("Jan 1, 2015");
var dMili = d.getTime();
var refDate = new Date("Dec 5, 2015");
var refMili = refDate.getTime();
var difference = refMili - dMili;
difference = difference / (1000 * 60);
difference = Math.round(difference);
document.write(" On Reference Date " +refDate +", " +difference +" secons have passed since begining of 2015");




// CHAP 31-34 TASK 11 //
var date = new Date();
document.write("Curent Date : " +date +" 1 hour ago, it was "); 
var hour = date.getHours();
date.setHours(hour - 1);
document.write( date )



// CHAP 31-34 TASK 12 //
var date = new Date();
document.write("Curent Date : " +date +" 100 years ago, it was "); 
var year = date.getFullYear();
date.setFullYear(year - 100);
document.write( date )



// CHAP 31-34 TASK 13 //
var age = prompt("Enter your Age?");
var date = new Date();
var year = date.getFullYear();
var birthYear = year - age;
document.write("your Age is " +age +"<br> Your Birth Year is " +birthYear);



// CHAP 31-34 TASK 14 //
var customerName = prompt("Enter User Name?");
var month = prompt("Enter Month");
var units = 410.44789;
var charges = 16;
var chargesDue = units * charges;
var payable = chargesDue;
var lateCharges = 350;
var chargesAfter = lateCharges + payable;
var afterDue = chargesAfter.toFixed(2);
document.write(" K - Electric Bill <br> Customer Name: "+customerName +" <br> Month: "+month + " <br> Number of Units: "+units +"<br> Charges per unit: "+charges +" <br><br> Net Amount Payable ( within Due Date): " +payable + " <br> Late Payment Charges "+lateCharges + "<br> Gross Amount Payable ( after Due Date): "+afterDue);





// CHAP # 34-38 TASK 1 //
function displayDate () {
    var date = new Date();
    document.write(date);
}
displayDate();


// CHAP # 34-38 TASK 2 //
function greet (firstName, lastName){
    firstName = prompt("Enter First Name");
    lastName = prompt("Enter Last Name");
    var fullName = firstName + " " + lastName;
    alert("Hello! "+fullName);
}
greet();
 


// CHAP # 34-38 TASK 3 //
function sum (a, b){
    var c = a + b;
    return c;
}
var first = +prompt("Enter First Number");
var second = +prompt("Enter Second Number");
alert(sum (first, second));




// CHAP # 34-38 TASK 4 //
function calculator (num1 , num2 , operator ) {
 if(operator === "+")
 {
    return num1 + num2;
 }
 else if(operation === "-")
 {
    return num1 - num2;
 }
 else if(operation === "*")
 {
    return num1 * num2;
 }
 else if(operation === "/")
 {
    return num1 / num2;
 }
 else if(operation === "%")
 {
    return num1 % num2;
 }
 
}

var firstNumber = +prompt("Enter First Number");
var secondNumber = +prompt("Enter Second Number");
var operation = prompt("Enter Operation" , "Like (+, -, *, /, %) ");
document.write(firstNumber +" " + operation +" "+secondNumber +" = " +calculator(firstNumber, secondNumber, operation));




// CHAP # 34-38 TASK 5 //
function square (number){
    return number * number;
}




// CHAP # 34-38 TASK 6 //
function factorial (number) {
    var fact = 1;
    for (var i = number; i >= 1; i--){
        fact = fact * i;
    }
    return fact;
}




// CHAP # 34-38 TASK 7 //
function counting ( start, end ){
    document.write("<div> ");
    for (var i = start; i <= end; i++)
    {
        document.write(" &nbsp " +i);
    }
    document.write("</div> ");
}
var strart = +prompt("Enter Start");
var end = +prompt("Enter End");
counting(start,end);



// CHAP # 34-38 TASK 8 //
function Hypotenuse ( base, perp){
    var hyp = square(base) + square(perp);
    return hyp;

}
var base = +prompt("Enter Base of a Triangle ");
var perp = +prompt("Enter Perpendicular of a Triangle ");
document.write(" Hypotenuse of Triangle = " +Hypotenuse(base, perp));




// CHAP # 34-38 TASK 9 //
function area( width , height){
    var A = width * height;
    return A;
}
    
    alert(" Area = " + area ( 4, 2));

    var width = +prompt("Enter Width");
    var height = +prompt("Enter Height");
    document.write(" Area = " + area ( width, height));




// CHAP # 34-38 TASK 10 //
function checkPalindrome( string ) {
    var reverse = "" ;
    for ( var i = string.length - 1; i >= 0; i--){
        reverse += string[i];
    }
    if ( reverse === string){
        alert("The given String is Palindrome");
    }
    else{
        alert("The given String is not Palindrome");
    }
    
}
var str = prompt("Enter any String"); 
checkPalindrome(str);



// // CHAP # 34-38 TASK 11 //
function titleCase(str) {
    var result= str.split(" ");
      
    
    for(var i = 0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1, result[i.length]);
    }
    return result.join(" ");
    }
    alert(titleCase("the quick brown fox"));



// CHAP # 34-38 TASK 12 //
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    var word = "";
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
      word = strSplit[i];
       }
    }
    return word;
  }
  var string = prompt('Enter a String');
  document.write("String: " +string + "<br> The longest Word is "+findLongestWord(string));




// CHAP # 34-38 TASK 13 //
function occurence(string, letter){
    var count = 0;
        for(var i = 0; i < string.length; i++){
             if (string.slice(i,i+1) === letter){
             count=count+1;
            }
        }
    return count;

}
var string = "JSResourceS.com";
var char = 'o';
document.write("Text: "+string +" <br> There are " +occurence(string,char) +" occurence(s) of letter " +char);




// CHAP # 34-38 TASK 14 //
function calcCircumference( radius){
     var circumf = 2 * 3.14 * radius;
     document.write("The Circumference of Circle: " +circumf);
}
function calcArea( radius){
    var area = 3.14 * 3.14 * radius;
    document.write("The Area of Circle: " +area );
}
var r = +prompt("Enter Radius of Circle");
calcCircumference(r);
calcArea(r);


*/

