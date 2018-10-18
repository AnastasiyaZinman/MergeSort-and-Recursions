// Exercise 1
//Write a function using recursion to check if a number n is prime
function prime(n, i) {
    // console.log("inside", i);
    if (i <= n / 2) {
        if (n % i !== 0) {
            prime(n, i + 1);
        }
        else if (n % i === 0) return true;
    }
    return false;

}
// var x = prompt("Enter x>0");
let x=7;
(prime(x, 2)) ? console.log(x, " isn't prime") : console.log(x, " prime");
