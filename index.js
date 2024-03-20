// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(nyash="*"){
    return function mwachi(special="special"){
        return `You are ${nyash}${special}${nyash}!`
    }
}