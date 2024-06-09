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

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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
