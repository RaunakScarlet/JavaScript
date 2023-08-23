// .Display the original properties of an array.
// A. Concept -> By using prototype we can insert new properties in an array, but those will not be considered as original properties. 
// So, to get original properties just add a check to array elements using hasOwnProperty syntax.




Array.prototype.Raunak = "Scarlet"
console.log(Array.prototype.Raunak);
//prints Scarlet
// we can add extra property using prototype

const arr = [1, 2, 3, 4, 5];
// arr.map((item) => {
//     console.log(item);
    
// })

for (let v in arr) {
    console.log(v);
//print index not value
}

for (let v in arr) {
    if(arr.hasOwnProperty(v))
    console.log(v);

}