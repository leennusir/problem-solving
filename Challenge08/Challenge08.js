"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01

// Important:
// To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.values, Object.entries )

// Resources:
// for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// You given an object that contain name
// and age of some customers as below :

// {
//     "Romio Joliat": 35,
//     "Mario Ristrova": 39,
//     "Sofia firnando": 50,
// }

// You have to return an array of strings that follow the below syntax
//
// the string format is "Customer Name :*** *** , Age :**"
// ['Customer Name :Romio Joliat , Age :35', 'Customer Name :Mario Ristrova , Age :39', ... ]

// -------------------------------------------------------------------------------------------------------

const customerAndAge = (obj) => {
  const arrOfCustomer = [];
  for (const i in obj){
    arrOfCustomer.push(`Customer Name :`+ i +` , `+`Age :`+obj[i]);
  }
return arrOfCustomer
};

// -------------------------------------------------------------------------------------------------------
// Challenge 02

// Write a function called getRecipeKey that take recipe info object and return an array of recipe info as strings
// as in the example

// Ex:-
// Input:
// let recipeInfo = {
//   name: "pizza",
//   ingredients: ["bread", "tomato", "chicken", "mayo"],
//   cookTime: "twoHours",
//   price: "25$",
// };
//
// Output:
// ["name: pizza", "ingredients: bread,tomato,chicken,mayo", "cookTime: twoHours", "price: 25$"]
//
// Note:
// You can solve this challenge by using Object.entries

// -------------------------------------------------------------------------------------------------------

const getEntries = (obj) => {
  let getRecipeKey = [];
  for (const [key, value] of Object.entries(obj)) {
    getRecipeKey.push(`${key}: ${value}`);
  }
  return getRecipeKey
};

// -------------------------------------------------------------------------------------------------------
// Challenge 03

// Write a function named getCourseName that returns object of 2 new arrays
// first one is containing the names of all of the courses in the data set.
// second one is containing the names of all the students
// -------------------------------------------------------------------------------------------------------

const courses = [
  {
    course: 'Java',
    Instructor: 'David',
    Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
    GroupName: 'Stars',
  },
  {
    course: 'JavaScript',
    Instructor: 'Van',
    Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
    GroupName: 'Nerd-ware',
  },
  {
    course: 'Python',
    Instructor: 'Delaney',
    Students: ['Barney', 'Kalé', 'Alisha'],
    GroupName: 'Whats-Up',
  },
  {
    course: 'DotNet',
    Instructor: 'Keanna',
    Students: ['Oli', 'Gisselle', 'Pru'],
    GroupName: 'Lol',
  },
];

const getInfo = (arr) => {
  var coursesName = [];
  var studentsName = [];
  for(let i = 0 ;i<arr.length;i++){
  for (const [key, value] of Object.entries(arr[i])) {
    if (key== "course"){
    coursesName.push(value)};
    if (key== "Students"){
      for (var j=0;j<value.length;j++){
        studentsName.push(value[j])};
      }
      
  }
}

  return { coursesName, studentsName };
};

//  ------------------------------------------------------------------------------------------------------
// Challenge 04

// The Head manager wants to get a more organized info about some students, he wants you to find the students from the courses dataset
// and return their info following the below syntax
//
// Input: ['Kalé', 'Alisha','Alphonso', 'Briana']
// Output: 
// [
//   {
//     Student: 'Kalé',
//     course: 'Python'
//   },
//   ...
// ]

//  ------------------------------------------------------------------------------------------------------

const getStudents = (arr) => {
  var arrayStudent = [];
    
  for(let i = 0 ;i <arr.length;i++){
  for(const j in courses){
    for(let k = 0 ;k <courses[j]["Students"].length;k++){
        if(courses[j]["Students"][k]==arr[i]){
          arrayStudent.push({"course":courses[j]["course"],"Student":arr[i]});
    }
  }
}
  }
  return arrayStudent;
  

};

module.exports = {
  customerAndAge,
  getEntries,
  courses,
  getInfo,
  getStudents,
};