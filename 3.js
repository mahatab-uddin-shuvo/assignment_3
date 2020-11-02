// arr=[5,4,6,1,1,2,2,3,4,5,5,6,7,7,8,9,9,9];
// arr.sort()
// var out=[];
// for(var i=0,len=arr.length-1;i<len;i++){
//     if(arr[i]!==arr[i+1]){
//         out.push(arr[i]);
//     }
// }
// out.push(arr[i]);
// console.log(out)


let arr = [1, 2, 2, 3, 4, 4, 5];
let count_arr = [100000];
let result = [];
for (i = 0; i < 100000; i++) {
  count_arr[i] = 0;
}
for (i = 0; i < arr.length; i++) {
    count_arr[arr[i]]++;
}

for (i = 0; i < arr.length; i++) {
  if(count_arr[arr[i]] == 1){
    // console.log(arr[i]);
    result.push(arr[i]);
  }
}
console.log(result);
