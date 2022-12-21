import users from "../users.js";
console.log(users);


const getUsersWithGender = (users, gender) => users.filter(user =>{
 return user.gender === gender;
})
  // твой код


console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]












