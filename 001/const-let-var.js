// function example() {
//     if (false) {
//         var ex = 5;
//     }
// returns undefined 
// returns 5 if we change from false to true because it's running as if we have ex defined above the if statement

//     return ex; 
// }

// block scope, variable only exists in the expected scope, within the if statement. 

function example() {
    if (false) {
        let ex = 5;
    }

    return ex; 
}

// console.log(example());

let conEx = 5;
conEx++; 

const conEx1 = 5;
conEx1++; 

const conEx2 = [];
conEx2.push(2);
conEx2.push(4); 

const conEx3 = {};
conEx3.name = "Steph";
conEx3.age = "36"; 

console.log(conEx);
console.log(conEx2);
console.log(conEx3);


