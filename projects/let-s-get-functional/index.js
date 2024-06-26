// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
/**
 * I: Array is given.
 * O: Number returned of male count.
 * C: Use filter().
 * E: N/A
 */
var maleCount = function(array) {
    // let males = returned array of males from customers array using filter()
    let males = _.filter(array, function(customers){
        return customers.gender === 'male';
    })
    //returns length of males array
    return males.length;
};
/**
 * I: Array is given.
 * O: Number is returned of female count.
 * C: Use reduce().
 * E: N/A
 */
var femaleCount = function(array){
    let females = _.reduce(array, function(acc, curr){
        
        //if condition to test if current's gender is female
        if(curr.gender === 'female'){
            acc += 1;
        }
        //return acc count
        return acc;
    }, 0);
    //return final female count
    return females;
}
/**
 * I: Array is given.
 * O: String is returned.
 * C: N/A
 * E: N/A
 */
var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(acc, curr){
        //if current's age is > acc age
        if(curr.age > acc.age){
            //return current obj properties
            return curr;
        } 
        //returns acc properties
        return acc;
        
    }, {name: '', age: 0});
    //returns oldest customer's name prop value
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(acc, curr){
        //if condition to return younger when comparing customers
        if(curr.age < acc.age){
            //returns youngest
            return curr;
        }
        //returns acc is younger than curr
        return acc;
    }, {name: '', age: 999});
    return youngest.name;
};

var averageBalance = function(array) {
    let totalBalance = _.reduce(array, function(acc, curr){
        // create 2 variable: 1 to replace $ & , and 1 to convert to integers
        let stringBalance = curr.balance.replace('$', '').replace(',', '');
        let numberBalance = parseFloat(Math.round(stringBalance).toFixed(2));
          //returns acc plus current customers balance
           return acc + numberBalance; 
    }, 0);
    // declares and initializes avgBalance = balance / customers
    let avgBalance = totalBalance / array.length;
    //converts avgBalance to 2 decimal places
    let shortenedAvgBalance = parseFloat(avgBalance.toFixed(2));
    //returns avgBalance
    return shortenedAvgBalance;
};

var firstLetterCount = function(array, letter){
    let firstLetterCount = _.reduce(array, function(acc, curr){
        //if condition to test for first letter of each customer after lowerCase()
        if(curr['name'].charAt(0).toLowerCase() === letter.toLowerCase()){
            acc++;
            
        }
        return acc;
    }, 0);
    //return firstLetterCount
    return firstLetterCount
}

var friendFirstLetterCount = function(array, customer, letter){
    return _.reduce(array, function(acc, curr){
        //if customer name is === to current customer name in object
        if(customer.toLowerCase() === curr.name.toLowerCase()){
            //for loop to iterate thru current friends list
            for(let i = 0; i < curr.friends.length; i++){
                //if first letter of friend at current friend list index 0 
                //is equal to letter
                if(curr.friends[i].name.charAt(0).toLowerCase() === letter.toLowerCase()){
                    //increments acc if true
                    acc++;
                }
            }
        }
        //returns total acc
        return acc;
    }, 0);
};
    

var friendsCount = function(array, name){
    //if condition to check if there is a name or if name isnt a string
    if (!name || typeof name !== 'string') {
        return []; 
    }
    
    return _.reduce(array, function(acc, curr) {
        //loop thru current customer's friends list
        for(let i = 0; i < curr.friends.length; i++){
            //if friend at index in friends list is equal to name 
            //lowerCased all letters and removed spaces
            if(curr.friends[i].name.replace(/\s/g, '').toLowerCase() === name.replace(/\s/g, '').toLowerCase()){
                //push current customer name to acc array
                acc.push(curr.name);
                //break once a friend in friendslist matches name input
                break;
            }
        }
        //returns acc array
        return acc;
    }, []);   
};

var topThreeTags = function(array) {
   // use the reduce() to accumulate the key counts
   let tagCounter = array.reduce((acc, curr) => {
    // check if curr has tags array
    if (curr.tags && Array.isArray(curr.tags)) {
      // iterate over each tag in the curr customer's tags array
      curr.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
    }
    return acc;
  }, {});
  // convert the tagCounter object to an array of tag/count pairs
  let tagCountArray = Object.entries(tagCounter);
  // sorts the array by count in descending order
  tagCountArray.sort((a, b) => b[1] - a[1]);
  // find the top three tags
  let topThreeTags = tagCountArray.slice(0, 3).map(item => item[0]);

  return topThreeTags;
}


var genderCount = function(array){
    // use reduce() to accumulate the gender counts
  let genderCount = array.reduce((acc, customer) => {
    // check if customer object has a 'gender' property and it's a string
    if (customer.gender && typeof customer.gender === 'string') {
      let gender = customer.gender.toLowerCase(); // convert to lowercase 
      // increment the count for gender
      if (gender === 'male') {
        acc.male++;
      } else if (gender === 'female') {
        acc.female++;
      } else if (gender === 'non-binary') {
        acc['non-binary']++;
      }
    } else {   
    }
    return acc;
  }, { male: 0, female: 0, 'non-binary': 0 });

  return genderCount;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
