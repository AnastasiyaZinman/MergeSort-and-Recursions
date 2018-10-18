// Exercise 2
// Write a function using recursion to print numbers from n to 0
// Write a function using recursion to print numbers from 0 to n
function printNumbers(n,i) {
    if(i<=n){
    // console.log(i)      //0...n
    printNumbers(n,i+1)
    console.log(i)   //n...0
    }
    return null

}
let x=5;
printNumbers(x,0);