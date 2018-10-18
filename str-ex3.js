// Exercise 3
// Write a function using recursion that takes in a string and returns a reversed copy of the string. The only String method you are allowed to use is string concatenation.
function printString(s,i,new_str) {
    if(i>=0){
    new_str=new_str+s[i]; 
    console.log("inside",new_str);
    return printString(s,i-1,new_str);
    }
    return new_str;
}
let x='string';
console.log(printString(x,x.length-1,''));