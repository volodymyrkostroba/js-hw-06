import users from '../users.js';

const getSortedUniqueSkills = users => users.reduce((acc,user) =>{
    user.skills.forEach(element => {
        if(!acc.includes(element)) {
            acc.push(element)
        }
    });

    return acc;
},[])
.sort();
  
  console.log(getSortedUniqueSkills(users));

// 