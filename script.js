let numeros = [1, 2, 3, 4, 5]
let guardar =[]
function search(arr,i){
for (num of arr){
    if (num > i){
       guardar.push(num);
       break   
    }
}
console.log(guardar);
}
search(numeros, 2)