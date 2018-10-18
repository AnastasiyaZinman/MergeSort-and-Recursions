//Bubble Sort
var arr=[5,1,4,3,8];
console.log("arr",arr.length);

for(let i=0;i<arr.length-1;i++){
for(let j=i; j<arr.length;j++){
  if (arr[j]>arr[j+1]){
    console.log("change")
    storeForChange=arr[j];
    arr[j]=arr[j+1];
    arr[j+1]=storeForChange;
  }
}
}

console.log("sort array",arr)