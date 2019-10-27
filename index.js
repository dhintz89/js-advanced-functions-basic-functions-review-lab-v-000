// Your code here

// declaration  (hoisted)
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// expression  (not hoisted)
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

// // Anonymous
// function() {
//     return "This type of function doesn't have a name"
// }

// IIFE (Instantly-Invoked Function Expression)  (hides scope within)
(function(x){return 2+x})(4)   // returns 6 

// scope chain
function wrapAdjective(flair = "*") {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}
wrapAdjective("?")("confusing") // "You are ?confusing?!"