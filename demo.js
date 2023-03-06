let productNameInputElement = document.getElementById('product-name')
let remainingCharsElement = document.getElementById('remaining-char')

function updateRemainingCharacters(event){
let enteredText = event.target.value

let enteredTextLength = enteredText.length

remainingCharsElement.textContent = enteredTextLength
}

productNameInputElement.addEventListener('input', updateRemainingCharacters)