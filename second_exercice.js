// LENGTH EXERCICE 
// ******************
// should display 
// you have written XXX characters , you have 42 characters left

function remainingCharacter () {
    let maxCharacter = 200
    let  userText = prompt('Write your name here --> ')

    numberOfCharacter = userText.length
    remainingCharacter = maxCharacter - numberOfCharacter
    alert ("You have written " + numberOfCharacter + " characters , you have -" + remainingCharacter + " left")

}

remainingCharacter()