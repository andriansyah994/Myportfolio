// function hasilParam (name, ...data){
//     let jumlah = 0;
//     for (const count of data) {
//             jumlah += count;
//     }
//     console.info(`Jumlah buah ${name} : adalah ${jumlah}`);
// }
// hasilParam('Apel', 1, 2, 3, 4, 5);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}  
var Saad = new Person("Saad", "Mousliki");
console.info(Saad.firstName);