/*
const numere=[1, 2, 3];
console.log(numere);
 numere[3]=5;
console.log(numere);
/* 
out range
*/
/*numere[10]=5;
console.log(numere);
console.log(numere[5]);
*/
//Tabel asociative
const numere[1, 2, 3];
console.log("Lungimea tabel", numere.length);
console.log("Lungimea masivului", numere.length);
numere[null] = 111;
console.log(numere);
numere['carevaIndex'] = 15;
console.log(numere);
numere["nume"] = "Ion Creanga";
console.log(numere);
console.log("Lungimea masivului", numere.length);

//parcurgera tabel
console.log("Cu For");
for (let index = 0; index < numere.length; index++) {
    console.log(numere[index]);
}

console.log("Cu While");
 index = 0; 
while (index < numere.length) {
    console.log(numere[index]);
    index++;
}

console.log("Cu Do..While");
index = 0; 
do {
    console.log(numere[index]);
    index++;
}while (index < numere.length);

//For in
console.log("Parcurgerea tabel cu FOR IN");
for (const key in numere) {
    //delete numere[key];
    if (Object.hasOwnProperty.call(numere, key)) {
        console.log(numere[key]);
        
    }else{
        console.log("EMPTY");
    }
}
// Cu FOR OF
console.log("FOR OF");
for (const number of numere)
{
    console.log(numar);
}

console.log("FOREach");
numere.forEach((numar) => {
    console.log(numar);
});