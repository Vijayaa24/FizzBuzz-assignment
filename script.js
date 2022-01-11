// divisible by 3 => Fizz
//  divisible by 5 => Buzz
//  divisible by 3 e 5 => FizzBuzz
//  not divisible by 3 e 5 => Number
// is not a number => is not a number

function FizzBuzz() {

    let number = Number(document.getElementById('number').value)
    let res = document.getElementById('res')

    if (typeof number != "number" || number == 0 || number == '') {
        res.style.color = "whitesmoke"
        res.innerText = `Please Enter a Number...`
    }
    else if (number % 3 == 0 && number % 5 == 0) {
        res.style.color = `rgb(2, 194, 2)`
        res.innerText = `The number ${number} is a Fizzbuzz.`
    }
    else if (number % 3 == 0) {
        res.style.color = `rgb(2, 194, 2)`
        res.innerText = `The number ${number} is Fizz.`
    }
    else if (number % 5 == 0) {
        res.style.color = `rgb(2, 194, 2)`
        res.innerText = `The number ${number} is Buzz.`
    }
    else {
        res.style.color = `rgb(255, 8, 0)`
        res.innerText = `This number is neither Fizz nor Buzz.`
    }
}

document.getElementById('verificar').addEventListener('click', FizzBuzz)