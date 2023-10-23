
console.log(`arrayRollnumbers=[113,45,56,11,32,45,109,799,56,45]`);

const arrayRollnumbers=[113,45,56,11,32,45,109,799,56,45]
console.log(`==========================Reverse array=========================`);
const reverseArray = arrayRollnumbers.reverse();
console.log(`reverse array :- [${reverseArray}]`);

console.log(`==========================sort array without custom logic =========================`);
const sortedArray = arrayRollnumbers.sort();
console.log(`sort() array  [${sortedArray}]`);

console.log(`==========================sort array using assending order =========================`);
const arrayassending = arrayRollnumbers.sort( (a, b) => {
    return a>b ? 1 : -1;
} );
console.log(`array [${arrayassending}]`);

console.log(`==========================greaest number of aaray=====================`);
//arrayRollnumbers.sort(function(a, b){return b-a});
console.log(`greatter number ==> ${arrayRollnumbers[arrayRollnumbers.length-1]}`);

console.log(`==========================smallest number of aaray=====================`);
const smallarray=arrayRollnumbers.sort(function(a, b){return b-a});
console.log(`smallest number ${smallarray[smallarray.length-1]}`);

console.log(`==========================remove duplicate element=====================`);

  const eliminateDuplicates= [...new Set(arrayRollnumbers)];
//console.log(`After eliminating duplicates ${eliminateDuplicates}`)
eliminateDuplicates.sort(function(a, b){return a-b});
console.log(`After eliminating duplicates [ ${eliminateDuplicates}]`);

