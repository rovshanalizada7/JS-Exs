// 1)
// Ədədin müsbət, mənfi və ya sıfır olmasını müəyyən edən
//  if-else if-else konstruksiyasını yaradın

// let x = +prompt ("Enter a number")

// if (x > 0) {
//     console.log("positive");
// } else if (x < 0) {
//     console.log("negative");
// } else if (x == 0) {
//     console.log("zero");
// }








// 2)
// Müəyyən bir istifadəçi roluna
//  (admin, istifadəçi, qonaq) əsaslanan müxtəlif mesajları
//  qaytaran keçid-case strukturunu yazın.

// let x = prompt ('Who is there?')

// switch (x) {
//     case "admin":
//         alert('welcome admin');
//         break;
//     case "user":
//         alert('welcome user');
//         break;
//     case "guest":
//         alert('welcome guest');
//         break;
//     default:
//         alert("no access")
// }






// 3)
// Ədədin cüt və ya tək olduğunu müəyyən edən if-else 
// konstruksiyasını yazın.

// Ternary operatoruna aid sual

// let n = + prompt("Enter a number")

// if (n%2==0) {
//     console.log("cut reqem");
// }else {
//     console.log("tek reqem");
// }

// let result = (n%2==0) ? console.log("cut reqem"):console.log("tek reqem");





// 4)
// Ədədin müsbət və ya mənfi olmasını təyin edən ternary 
//  operatordan istifadə edərək ifadə yazın.

// n= + prompt("Enter a number")

// let result = (n>0)? console.log("musbet"):console.log("menfi");





// 5)
// == və === operatorları arasındakı fərqi göstərən numune 
// yazın.

// let a = 5
// let b = "5"
// console.log (a==b)
// console.log (a===b) 






// 6)
// !== operatorundan istifadə edərək ədədin 10-a bərabər olmadığını 
// yoxlayan ifadə yaradın.

// let num = 11;

// if (num !== 10) {
//     console.log('The number is not equal to 10');
// } else {
//      console.log('The number is equal to 10');
// }



// 7)
// Ədədin 5-dən böyük və 10-dan kiçik olmasını yoxlayan ifadə yazın.


// let n = +prompt ('Enter a number?'); 

// if (n>5 && n<10) {
//     console.log('The number is betwwen 5 and 10');
// } else {
//     console.log('not including');
// }



// 8)
// Əgər varsa istifadəçi adı dəyişənini, əks halda
//  isə "Anonim"i qaytaran nullish coalescing  operatorundan 
// istifadə edin.

// let userName = null ;

// alert(userName ?? "Anonim"); 




// 9)Boolean dəyərinin tərsini qaytaran ifadə yazın.

// console.log(!true);
// console.log( !Boolean("deyer deyisir") );



// 10)
// Hər iki şərtin doğru olub olmadığını yoxlayan && ifadəsi yaradın.

// let name = prompt("what is your name?");
// let surname = prompt("what is your surname?");

// if (name == "Rovshan" && surname == "Alizada") {
//     console.log('Correct!');
// } else {
//     console.log("Worng!");
// }



// 11)
// İki şərtdən ən azı birinin doğru olub olmadığını yoxlayan 
// ||. ifadə yaratmaq.

// let word = prompt("secret word?")
// let password = +prompt ("password?")

// if ( word == "key" || password == 124 ) {
//     console.log('welcome');
// }else {
//     console.log("no access!");
// }



// 12) Ədədin həm müsbət, həm də cüt olmasını yoxlayan ifadə yazın.

// let n = +prompt ('Enter a number');

// if ( n>0 && n%2 == 0) {3
//     console.log("musbet ve cutdur");
// }else {
//     console.log('musbet ve ya cut deyil');
// }




// 13)
// İstifadəçi adı və parolun hər ikisinin etibarlı olub olmadığını yoxlayan if-else strukturunu yazın.

// let user = prompt("What is your username?");
// let password = +prompt("What is your password?");

// if (user === "Rovshan" && password === 777) {
//     console.log("right person");
// }else {
//     console.log('no access');
// }





// 14)
// Ədədin mənfi və ya sıfır olduğunu yoxlayan və müvafiq olaraq mesajı qaytaran switch-case konstruksiyasını yazın.

// let a=-1;

// switch (a) {
//     case n=-1:
//         console.log('negative');
//         break;
//     case n=0:
//         console.log('zero');
//         break;
//     default:
//         console.log('positive');
// }

