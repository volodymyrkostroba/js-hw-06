import users from '../users.js';
// console.log(users);


const calculateTotalBalance = users => {
    let total = 0;

    users.forEach(user =>{
    total += user.balance;
    })

    return total;
  };
  
  console.log(calculateTotalBalance(users)); // 20916
  