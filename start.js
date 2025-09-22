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

