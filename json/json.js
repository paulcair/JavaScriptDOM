// READING A JSON THAT HAS BEEN CREATED OR PASSED //
// Declare json strong. numbers and booleans don't need quote
// const meJson =`
//     {
//         "name": "paul", 
//         "age": 35,
//         "graduated":true,
//         "favoriteColors": [
//             "blue",
//             "green"
//         ]
//     }
// `;
// const me = JSON.parse(meJson); // this is the code to parse  meJson created above
// console.log(me);
// console.log(me.favoriteColors[1]); // can get the value of an array as well

// TURNING AN OBJECT OR VARIABLE INTO A JSON //
// Declare object
// const car ={
//     make: "Honda",
//     model: "Civic",
//     email: function(){
//         return "email@123.com";
//     }
// };
// const carJson = JSON.stringify(car); // turn the string into a JSON
// console.log("this is the JSON"+carJson);//notice that you cannot stringify a function 
// console.log(car.email());

// // TURNING AN ARRAY INTO A JSON //
// const cars = ["Honda", "Mazda", "Ford"];
// const carsJson = JSON.stringify(cars);
// console.log(cars);

// CREATING AN ARRAY OF OBJECTS AND STRINGIFYING IT //
// var people = [
//     {
//         name : "Paul",
//         age: 35
//     },
//     {
//         name: "Nadia",
//         age: 36
//     },
//     {
//         name: "Maru",
//         age: "32"
//     }
// ]

// var peopleJson = JSON.stringify(people);
// console.log("This is the people JSON"+peopleJson);
// console.log(people[1].name);

// // Can create a for loop to loop through the object
// for(var i=0;i<people.length;i++){
//     console.log(people[i]);
    
// }

// // Can now append the people to the <ul> with id people
// var output ='';
// for(var i=0;i<people.length;i++){
//     output += '<li>'+people[i].name+'</li>'; // the '+=' sign means to append to the empty object
// }
// document.getElementById("people").innerHTML = output;


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       console.log(xhttp.responseText);
       var response = JSON.parse(xhttp.responseText);
       var people = response.people;

       var output ='';
       for(var i=0;i<people.length;i++){
       output += '<li>'+people[i].name+'</li>'; // the '+=' sign means to append to the empty object
       }
        document.getElementById("people").innerHTML = output;
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();





