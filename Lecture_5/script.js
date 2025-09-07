// the difference b/w var let const

// var old js mein tha
// var function scoped hota hai => var apne parent function me kahi bhi use ho sakta h
// function abcd() {
//     for(var i = 1; i<12; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }
// abcd();

// var adds itself to the windows object but let & cons doesn't add
// let const new js mein h
// let braces scoped hota h
// var purani js se h aur cons new js se h
// var fn scope h aur cons and let braces scope h
/*
 js language me kuchh chije nahi h jo hum use kar sakte h aur wo chije
  hume js se nahi balki browser se milti hai aise saare features jo js 
 ka part nahi hai but fir use kar sakte hai unhe hum dhoond sakte hai 
 ek particular object mein jiska naam hai window
 */
/*js mein kai saare features hai par kuchh features jo hum use kar 
paate hai wo features wo nahi hai par fir bhi use kar paate hai kyoki
 wo fetures js language use kar leti hai windows se, aur window hai 
 ek box of features given by browser to use with js
 */
/*
jitne bhi variables ya data hum baanate hai unhe store kahi to karna 
padta hai uske liye hota hai heap memory
*/
/*
EXECUTION CONTEXT matlab jab bhi hum function chalaayege function apna 
ek khudka ek imaginary container bana lega jismein uski teen cheeje hogi:
1) Variables
2) functions inside that parent function 
3) lexical environment of that function
ye jo container hai imaginary ise hi hum execution context kahte hai
'''execution context is a container where the function's code is executed
and it's created whenever a function is called, it contains 3 things, 
variables, functions and lexical environment.''' 
*/
/*
lexical environment hota hai ek chart jisme ye likha hota hai ke apka
particular function kin cheeejo ko access kar sakta hai and kinko nahi,
matlab ki it holds it's scope chain
*/
/*The spread operator (...) is used to unpack elements of an array, object, or iterable into individual elements.
It is mostly used for copying, merging, or passing array elements as function arguments.
example :-
var a = [1, 2, 3, 4, 5];
var b = [...a];
console.log(b.pop());
*/
// js me kuchh bhi likho wo mainly do prakar mein se kisi ek prakar ko belong karti h
// Falsy values ye hai = 0 false undefined null NaN document.all
// truthy values
// if(-1) {
//     console.log("hey");
// }
// else {
//     console.log("hello")
// }
// if(0) {
//     console.log("hey");
// }
// else {
//     console.log("hello")
// }
// if(NaN) {
//     console.log("hey");
// }
// else {
//     console.log("hello")
// }
//forEach loop sirf arrray pe chalta hai matlab ki jab bhi tumhare paas ek array ho, 
// tab use mein kaun aata hai forEach loop

// var a = [1, 2, 23, 34, 34, 4, 23, 4, 3];
// a.forEach(function(val){
//     console.log(val+2);
// })
// forEach kabhi bhi by default aapke array mein change nahi karta wo aapko changes 
// krke deta hai array ki temporary copy par jiske wajah se array hamesha same rehta hai
// Forin - objects par loop karne ke liye hota hai forin loop
// var obj = {
//     name: "Vivek",
//     age: 22,
//     city: "Bhopal"
// }
// for (var key in obj) {
//     console.log(key, obj[key])
// }
// var a = 2;
// do {
//     console.log("hey");
//     a++;
// }
// while(a < 15)
// callback functions
// jab bhi koi aisa code jo baad me chalta hai aap likhoge, kyunki wo code baad mein
//  chalta hai js ko ye pata nahi hota ke wo complete hua ya nahi, aise code ke 
// completion par js ko btaya jaata hai ke wo complete hogya aur aap use kar sakte ho,
//  ye btaane ka kaam callback ka hi
// setTimeout(function () {
//     console.log("2 secondme chalao");
// }, 2000)
// aisa code jo baad me chalta hai use hum ek function de dete hai ke bhaiya jab
//  complete hojana to ye function chala dena, aur wo function jo hum dete hai wo 
// ek normal function hi hota hai use kahte hai callback function
// first class functions
// js mein ek concept hai jiska matlab hai ko aap function ko use kar sakte ho as a value
// function abcd(a){
//     a();
// }
// abcd(function(){console.log("hey")});
// function ko as a value use karna hi first class function ka concept hai
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr[-1] = 2;
console.log(arr[-1]);
