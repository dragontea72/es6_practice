
const hubby = "elias khanchon";
//hubby = "omar sunny";
console.log(hubby);

const numbers = [12,45];
numbers[1] = 88;
numbers.push(13);
//numbers = ["sunny","salman","omit"];
const nayok = {name:"sakib khan",phone:45287};

//console.log(numbers);

let patientName = "Rahim chacha";
patientName = "fatema khala";
console.log(patientName);
let sum = 0;
for (let i = 0 ;i< 10 ;i++){
    sum = sum + i;
    //console.log(i);
}
//console.log(i);


// DEFAULT JS

function add (num1 , num2 = 5){
    // if (num2 == undefined){
    //     num2 = 0;
    // }
    //num2 = num2 || 0;
    return num1 + num2;
}
const total = add(15,8);
//console.log(total);

// TEMPLATE JS
const firstName = "Justin";
const lastName = "Timberlake";
const fullName = firstName + " " + lastName + " is a good boy.";
const fullName2 = `${firstName} ${lastName} is a good boy.`;
const multiline = "I love you\n" + "I miss you\n"+"I need you";
const multiline2 = `I love you.
I miss you.
no. i dont need you.`
//console.log(multiline2);

// ARROW JS
// function doubleIt(num){
//     return num*2;
// }
// const doubleIt = function(num){
//     return num*2;
// }

const doubleIt = num => num*2;
const add1 = (x, y)=> x+y;
const give5 = () => 5;
const doMath = (x, y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add1(5,7);
const result2 = give5();
const result3 = doMath(7,5);
//console.log(result3);

// SPREAD OPERATOR , CONCATENATE MULTIPLE ARRAYS , ARRAYS MAX

const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36 , 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges2);

const business =650;
const minister = 450;
const sochib = 240;
const takaPoisha = [650, 450, 250];
//const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisha);
//console.log(maximum);

// class constructor , create object from class
class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school";
    }

}

const student1 = new student(12, "shuvo");
const student2 = new student(14, "mahiya");
const student3 = new student(29, "Bappi");
//console.log(student1, student2,student3);

// INHERITANCE JS
// class Child{
//     constructor(name){
//         this.name = name;
//     }
// }

// const baby = new Child("Arnold");
// const baby2 = new Child("Tom");
// console.log(baby);
// console.log(baby2);

class Parent {
    constructor(){
        this.fatherName = "Schwrnznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
//console.log(baby.getFullName());
//console.log(baby2);

// DESTRUCTOR , OBJECT, ARRAY , DESTRUCTURE COMPLEX OBJECT,

const person = { name : 'Jack william', age: 17, job:'facebooker', gfName: 'ema watson', friends:['crick','Jack','bita']};

const gfName = person.gfName;
console.log(gfName);
console.log(gfName);