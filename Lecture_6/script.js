// Can you explain what is higher order functions?
// Higher order functions are the functions which accept a function in a parameter or return a function or both
// for example :- ForEach Method Always Takes Another Function Inside It, So ForEach is a Higher Order Function

//normal function jismein this ka istemal ho and aap function ko call karte waqt new keyboard ka use karein 
// function saanchaOfBiscuit() {
//     this.width = 12;
//     this.height = 22;
//     this.color = "brown";
//     this.taste = "sugary"
// }
// var bis1 = new saanchaOfBiscuit()
// var bis2 = new saanchaOfBiscuit()
// var bis3 = new saanchaOfBiscuit()

//jab aapke paas aisa koi mauka ho ke aapko ek jaisi properties waale bahut saare elements banaane hai us waqt
//  aap constructor function use kar sakte ho
// function circularButtonBanao(color){
//     this.radius = 2;
//     this.color = color;
//     this.icon = false;
//     this.pressable = true;
// }
// var redbtn = new circularButtonBanao("red");
// var greenbtn = new circularButtonBanao("green");

// What are CONSTRUCTOR FUNCTIONS?
// A Function which whenever invoked with "New" Keyword returns an object, If we use "This" keyword inside that 
// function, It Returns an object with all of the properties and methods mentioned inside that function with
//  This keyword, such function is called Constructor Function.
// Exmple :-
// function abcd() {         :
//     this.name = "harsh";  : ---- constructor function
// }                         :

// var person1 = new abcd(); :- new keyword infront of function call makes a new blank object and returns to the
//  person1 variable

// What is FIRST CLASS FUNCTIONS?
// A language is said to have first class functions when the functions in that language are treated as variables,
// you can save them, you can pass them as arguments to another functions.

// new => jab bhi lagta hai hamesha ek blank object apne man mein bana lo
// this => jo bhi object us function ko call kar raha hai usi ka reference deta hai

// iife => immediately invoked function expression
// (function() {
//     var privateval = 12;

// })();

// var ans = (function() {
//     var privateval = 12;
//     return {
//         getter: function(){
//             console.log(privateval);
//         },
//         setter: function(val) {
//             privateval = val;
//         }
//     }
// })()

// 