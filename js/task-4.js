import users from '../users.js';


const getInactiveUsers = users => users.filter(user =>{
    return !user.isActive;
  })
    // твой код
  
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]