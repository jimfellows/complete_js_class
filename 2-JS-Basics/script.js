/**************************
Variables and Data types
**************************/

/*
//defining vars
var firstName = 'Jim';
var lastName = 'Jeffries';
var age = 300;
var fullAge = true;
var job;

console.log(firstName + ' ' + lastName + ' is years old.');
console.log(fullAge);
console.log(job);

job = 'Teacher';

console.log(job);
*/

/**************************
Variable mutation and type coercion
**************************/
/*
var firstName = 'Jim';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

//type coercion
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
console.log('Age value now = ' + age);

//user alert
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//prompt user
var lastName = prompt('What is his last name?');
console.log('Last Name entered = ' + lastName);
*/


/**************************
Basic Operators
**************************/
/*
var year, yearJohn, yearMark, ageJohn, ageMark
year = 2018;
ageJohn = 28;
ageMark = 33

yearJohn = year - ageJohn;
yearMark = year - ageMark;
console.log(yearJohn);
console.log(yearMark);

//logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark');
console.log(typeof x);
*/


/**************************
Operator Precedence
**************************/
/*
var now, yearJohn, fullAge, isFullAge;
now = 2018;
yearJohn = 1989;
fullAge = 18;

isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);


var x, y;
x = y = (3 + 5) * 4 - 6; 
console.log(x, y);


//more operators
x = 2
x *= 2
console.log(x);
x++;
console.log(x);
*/


/**************************
Coding Challenge #1
**************************/
/*
var weightMark, weightJohn, heightMark, heightJohn, bmiMark, bmiJohn;

weightMark = 100;
weightJohn = 90;
heightMark = 2.0;
heightJohn = 2.1;

function bmi(kg, m){
    return kg / (m * m)
}

bmiMark = bmi(weightMark, heightMark);
bmiJohn = bmi(weightJohn, heightJohn);

console.log('Marks BMI = ' + bmiMark);
console.log('Johns BMI = ' + bmiJohn);
console.log('Is Johns BMI higher than Marks? ' + bmiJohn > bmiMark);
*/


/**************************
IF ELSE
**************************/

/*
var firstName = 'John';
var civilStatus = 'Single';

if (civilStatus === 'Married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon.');
}

var isMarried = false;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon.');
}

//revamp challenge #1
var weightMark, weightJohn, heightMark, heightJohn, bmiMark, bmiJohn;

weightMark = 110;
weightJohn = 90;
heightMark = 2.0;
heightJohn = 2.1;

function bmi(kg, m){
    return kg / (m * m)
}

bmiMark = bmi(weightMark, heightMark);
bmiJohn = bmi(weightJohn, heightJohn);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}
*/


/**************************
Boolean Logic
**************************/
/*
var firstName = 'John';
var age = 46;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else {
    console.log(firstName + ' is a man.');
}


*/


/**************************
Terneray operator
**************************/
/*
var firstName = 'John';
var age = 11;

//ternery, three operants
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');


var drink = age >= 18 ? 'Beer' : 'Juice';
console.log('Johns Drink: ' + drink);


// switch statement

var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designes stuff.');
        break;
    default:
        console.log(firstName + ' does something else.');
}




switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13:
        console.log(firstName + ' is not a boy');
        break;
    default:
        console.log(firstName + ' name unknown!')
}
*/




/**************************
Truthy & Falsey and equality
**************************/
/*
//falsy: undefined, null, 0, '', NaN,
//truthy: all values that are not falsy

var height;
height = '';
if (height || height == 0) {
    console.log('Var defined');
} else {
    console.log('Var not defined');
}


height = 23;
if (height === '23') {
    console.log('The == does type coercion');
}

*/


/**************************
Coding Challenge #2
**************************/
/*
var mikeScores, johnScores, mikeAvg, johnAvg;

function avgArr (arr) {
    return (arr.reduce((previous, current) => current += previous)) / arr.length;
}
// mike wins
//johnScores = [89, 120, 103];
//mikeScores = [116, 94, 123];

// john wins
mikeScores = [89, 120, 103];
johnScores = [116, 94, 123];

// tie
//johnScores = [89, 120, 103];
//mikeScores = [89, 120, 103];

johnAvg = avgArr(johnScores);
mikeAvg = avgArr(mikeScores);


console.log('John\'s Avg: ' + johnAvg);
console.log('Mike\'s Avg: ' + mikeAvg);

if (johnAvg > mikeAvg) {
    console.log('John wins on average with a score of ' + johnAvg);
} else if (mikeAvg > johnAvg) {
    console.log('Mike wins on average with a score of ' + mikeAvg);
} else {
    console.log('Mike and John tie with avg scores of ' + johnAvg);
}

*/


/**************************
Functions
**************************/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}


var ageJim, ageJane, ageJohn;

ageJim = calculateAge(1990);
ageJane = calculateAge(1958);
ageJohn = calculateAge(2001);

console.log(calculateAge(1990));


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years');
    } else {
        console.log(firstName + ' is already retired')
    }
    
}
yearsUntilRetirement(1920, 'Jim');

*/


/**************************
Function Statements and Expressions
**************************/
/*
//function declaration
function whatDoYouDo(job, firstName) {}

//function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' is a teacher';
        case 'driver':
            return firstName + ' is a driver';
        default:
            return firstName + ' has occupation ' + job;
    }
}

console.log(whatDoYouDo('asdfas', 'Bill'));


*/

/**************************
Function Statements and Expressions
**************************/
/*
//create arrays
var names = ['Jim', 'Bates', 'Matt',];
var years = new Array(1990, 1999, 1995);
console.log(names);
console.log(names.length);

//mutate arraws
names[1] = 'Ben';
console.log(names);
names[4] = 'Mary';
console.log(names);
names[names.length] = 'Barry';
console.log(names);

// different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('Blue');
console.log(john);
john.unshift('Mr.');
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);
console.log(john.indexOf(1990));


var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
*/

/**************************
Coding Challenge #3
**************************/
/*
function tipCalc(bill) {
    if (bill < 50) {
        return bill * .2;    
    } else if (bill >= 50 && bill < 200) {
        return bill * .15
    } else {
        return bill * .1;
    }
}


console.log(tipCalc(10));



var bills = [124, 48, 268];
var tips = [
    tipCalc(bills[0]),
    tipCalc(bills[1]),
    tipCalc(bills[2])
]
var finalBills = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]
console.log(bills);
console.log(tips);
console.log(finalBills);
*/


/**************************
Objects and properties
**************************/
var john = {
    firstName: 'John',
    lastName: 'Smith', 
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);




john.job = 'Designer';
john.job = 'Designer';
john['isMarried'] = true;
console.log(john);



var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);






































