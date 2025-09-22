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
