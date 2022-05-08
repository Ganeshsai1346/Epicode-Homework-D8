/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/


let numbers = [1, 2, 3, 4, 5]



/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/


let person = 
{ 
    name : 'Ganesh',
    surname : 'Devarakonda',
    emailAddress : 'ganeshsai1346@gmail.com',
    age : 24,
}


/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/


person.haveDrivingLicence = true
console.log(person)


/* EXERCISE 4
 Remove from the previously created object the age property.
*/



delete person.age;
console.log(person)



/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/


let person1 = 
{ 
    name : 'Naveen',
    surname : 'Manchala',
    emailAddress : 'naveenmanchala9698@gmail.com',
    age : 23,
}
console.log(
    'email address of person is not equal to the email address of person1',
    person.emailAddress !== person1.emailAddress
)



/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 200;
if (totalShoppingCart <= 50) {
    totalShoppingCart += 10;
}


/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/



/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car = { brand: "tesla", model: "Z60", licensePlate: "ADDGF50" }

let car1 = {}
Object.assign(car1, car)
car1.licensePlate = "AGAA50"

let car2 = {}
Object.assign(car2, car)
car2.licensePlate = "UYTYU50"

let car3 = {}
Object.assign(car3, car)
car3.licensePlate = "YUTY96"

let car4 = {}
Object.assign(car4, car)
car4.licensePlate = "FGHFH20"

let car5 = {}
Object.assign(car5, car)
car5.licensePlate = "YTTYT20"

console.log(car, car1, car2, car3, car4, car5)

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [car1, car2, car3, car4, car5];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
console.log(carsForRent.shift());
console.log(carsForRent.pop());


/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(typeof car, typeof car.licensePlate, typeof car.brand);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [car1, car3, car5]
let totalCars = {
carsForSale: carsForSale.length,
CarsForRent: carsForRent.length,
}

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/


for (let i = 0; i < carsForSale.length; i++) {
    console.log(carsForSale[i].brand);
    console.log(carsForSale[i].model);
    console.log(carsForSale[i].licensePlate);
  }

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/

for (let i = 100; i >= 0; i--){
console.log(i)
}
