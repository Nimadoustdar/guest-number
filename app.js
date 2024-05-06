const randomNumber = Math.ceil(Math.random() * 100)
let numberOfGuess = 0
console.log(randomNumber)

const validateNumber = (value) => {
    if (isNaN(value)) {
        return "Please Enter Valid Number"
    } else if (+value < 1 || +value > 100) {
        return "Please Enter Number Between 1 to 100"
    }
}


const checkGuess = (guess) => {
    numberOfGuess++
    console.log(numberOfGuess)
    if (guess === randomNumber) {
        console.log('correct number')
    } else if (guess < randomNumber) {
        console.log("to low! Try again.")
        play()
    } else {
        console.log("to high! Try again.")
        play()

    }
}

const play = () => {
    const number = prompt("Enter a number between 0 to 100 ")

    if (number === null) {
        return
    }
    if (numberOfGuess >= 10) {
        console.log('Game over')
        return
    }
    const validation = validateNumber(number)

    if (validation) {
        console.log(validation)
        return play()
    }

    checkGuess(+number)
}
play()