// for loop 
// the 1st question of for loop
for(let i=0; i<=50; i++){
    console.log(i);
}

//2nd question of for loop

for(i=0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}

//3rd question of for loop
//Find the sum of first 20 natural numbers.

let sum =0;

for(let j=0; j<=20; j++){
  sum+=j;
  console.log("the sum of total number", sum);
}
console.log("the sum of total number is:", sum);

//4th question of for loop
//Print the multiplication table of 7.

for(k=1; k<=10; k++){
    console.log(`7X${k}=${7*k}`);
}

//Print all numbers from 100 down to 1.

for(let i=100; i<=1; i--){
    console.log(i);
}

//while loop 1st question
//Print numbers from 1 to 10 using while loop

let m= 1;
while(m<=10){                             //(1) if we condition write before the console they print the 2 to 11
    m++;                                  //(2) if we write the condition after the console they print 1 to 10
    console.log(m);                       // (3)if we write only once console inside the loop they print only the total
}                                         // ... number like 11 or 10.
console.log(m);

// 2nd question
//Print all odd numbers between 1 and 50.

let n = 0;
while(n<=50){
  if(n%2==1){
    console.log(n);
  }
  n++;    
}

console.log("the total number print");
console.log(n);

//Keep adding numbers starting from 1 until the sum becomes greater than 200, then stop.

let sum_n = 0;
let num2 = 1;
while(sum_n<=200){
  sum_n+=num2;
  num2++;
}
console.log("the sum of number is:", sum_n);
console.log("the number is ",num2-1);

//print the reverse number of this number 12345
// using while loop
let num = 12345;
let reverse = 0;
while(num>0){
  let digit = num%10; // remain the last  number
  reverse = reverse*10+digit;// reverse
  num= Math.floor(num/10);//remove the last digit and sure it stay no decimal number.

}
console.log("the number is:", num);// print the number
console.log("the reverse number is:", reverse);// print the reverse 

//print the factorial number using while loop
let num1 = prompt("enter the number you guest:");
let num5 = parseInt(num1);
let fact = 1;
 while(num5>0){
   fact*=num5;
   num5--;

 }
  console.log(`the factorial number of ${num1}:`, fact);
//do while loop start.
let s = 1;
do{
  console.log(s);    // print 1 to 10 output
  s++;
}
while(s<=10);
console.log("this is _____")

//Take a number and keep dividing it by 2 until it becomes less than 1.

let u_number = prompt("to enter the number");

let v_number = parseInt(u_number);
do{
    v_number=v_number/2;
    console.log(v_number);

}while(v_number>1);

// Keep asking user input until they type “exit"

let user ;
do{
  user = prompt("enter the user guest they want");  //they print user input untill they exit.
  console.log(user);
}while(user!=="exit");

//Print the squares of numbers from 1 to 15.

let number_op = 1;
do{
  console.log(number_op*number_op);
  number_op++;
}while(number_op<=15);

//Find the sum of first 10 even numbers
let suma = 0;
let a = 1;
do{
  if(a%2==0){
     suma+=a;
  }
 
  a++;
}while(a<=10);
console.log(suma);
//start for in loop
// Create an object of a student with properties: name, age, city, marks. Print all keys.

let object = {
  name : "hashimkhan",
  age : "22",
  city: "peshawar",
  marks: "95%"

}
for(key in object){
  console.log(key);
}
console.log(object);

// Create an object of a student with properties: name, age, city, marks. Print all keys.
let object_2 = {
  name : "hashim",
  age : "21",
  city: "shawar",
  marks: "85%"

}
for(items in object_2){
  console.log(object_2[items]);
} 
console.log(object_2);

// Count how many properties are in an object.
let count = 0;
let user_object = {
  sarra: "the output",
  arras : "routine",
  dasra: "ineuotr",
  asrad: "cver"
}
for(items in user_object){
  console.log(count +":", items + "=",user_object[items] );
  count++;
 
}
console.log(count);

// Check if a property exists in an object (example: "age" in object).


let property = {
  name1: "ahad",
  name2: "daha",
  age1: 23,
  age2: 12,
  // name3 : "rtry",
  // age3: 234  
}
for(key in property){
  if("age1" in property){
    console.log("<<<<the age 1 is present>>>>");

  }
  else{
    console.log("the age1 is not present");
  }
 
}
console.log(property);
// Loop through an object of products (name, price) and print them.
let product = {
  name :"rice",
  price: 23,
  name2: "fruit",
  price2: 44

};
for(prd in product){
  console.log(prd + ":",product[prd]);

}
console.log(product);
//for of loop
//Print each character of the string "JavaScript".
let a23 = "javascript";
for(let str of a23){
  console.log(str);

}
console.log(a23);
// Print all elements of an array [2, 4, 6, 8, 10].
let array = [2, 4, 6, 8, 10];

for(arr of array){
  console.log(arr);


}
console.log(array);
//  Find the sum of array elements [5, 10, 15, 20, 25].
let array6 = [5,10,15,20,25];
let total = 0;

for(let num of array6){
  total+=num;
  console.log("runing sum" + ":",total);
}
console.log("final sum" + ":",total);

//Count how many vowels are in "Programming is fun".

let b_string = "programming is fun";
let counts = 0;

for(let str of b_string){
  if("aeiou".includes(str.toLowerCase())){
    console.log("this is vowels", str);
  }
  else{
      console.log("this is not vowels" ,str);

    }
    counts++;

}
console.log("the total string", count);
console.log(b_string.length);
// //Print only unique elements from an array [1,2,2,3,4,4,5].

//  let unique_array = [1,2,2,3,4,4,5];

// for(unique of unique_array){
// let unique11 = unique_array.filter((unique) => unique_array.indexof(unique)=== unique_array.lastindexof(unique));
// }
// console.log(unique11);

//Print numbers from 1 to 100 but:

// If divisible by 3 print "Fizz"

// If divisible by 5 print "Buzz"

// If divisible by both print "FizzBuzz"

let number = 0;
for(number= 1; number<=100; number++){
  if(number%3){
    console.log("fizz");
  }
  else if(number%5){
    console.log("buzz");
  }
  else{
    console.log("fizzbuzz");
  }
}
console.log(number);

// Find the largest number in an array.

let largest_array = [22,33,44,1,23,3,4,5,100];
let largests  = largest_array[0];
for(num of largest_array){
  if(num>largests){
    largests = num;

  } 
}
console.log(largests);
// Count how many numbers in an array are greater than 50.

let no_array = [222,3,11,33,55,343,22,24,33,11,44,3,7,6,58];
let count6= 0;
for(let nom of no_array){
  if(nom> 50 ){
   console.log(nom);
    count6++;
  }
} 
console.log(count6);
console.log(no_array.length);