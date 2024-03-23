// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

const result = returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(result);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
console.log(result); 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(far){
    return function(y){
        return y*far
    }
}
const fareDoubler = createFareMultiplier(2)
console.log(fareDoubler(2))

function createFareMultiplier(b){
    return function (l){
        return b * l
    }
}
const fareTripler = createFareMultiplier(3)
console.log(fareTripler(3))

function selectDifferentDrivers (returnFirstTwoDrivers, returnLastTwoDrivers){
    return function returnFirstTwoDrivers
}





