/*
//1. User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.
let a=prompt("enter the first number:","a")
let b=prompt("enter the second number:","b")
let result=a/b
let remainder=a%b
console.log(result, remainder)
*/


/*
//2. The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).
let a=prompt("enter the first number:","enter a")
let b=prompt("enter the second number:","enter b")
let c=a;
a=b;
b=c;
console.log(a,b);
*/


/*
//3. The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X) of the standard linear equation, where A*X+B=C.
let a=prompt("enter the first number:","enter a")
let b=prompt("enter the second number:","enter b")
let c=prompt("enter the first number:","enter c")
if (a!=0 && b!=0 && c!=0){
    let x=(c-b)/a;
    console.log(x);
    }
*/


/*
//4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.
let a=prompt("enter the first number:","enter a")
let b=prompt("enter the second number:","enter b")
if (a>b) {
    let result=(parseFloat(a)+parseFloat(b));
    console.log(result);
}
if (a==b) {
    let result=a*b
    console.log(result);
}
if (a<b) {
    let result=a-b;
    console.log(result);
}

*/

/*
//5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.
let a=prompt("enter the first number:","enter a")
let b=prompt("enter the second number:","enter b")
let c=prompt("enter the first number:","enter c")
let discriminant=b**2-4*a*c;
let root1;
let root2;
if(discriminant<0){
    console.log("no real roots")
}
else if(discriminant==0){
    root1=-b/(2*a)
    console.log("The root is", root1)
}
else if(discriminant>0){
    root1=(-b+Math.sqrt(discriminant))/(2*a)
    root2=(-b-Math.sqrt(discriminant))/(2*a)
    console.log("First root is", root1)
    console.log("second root is", root2)
}
*/

