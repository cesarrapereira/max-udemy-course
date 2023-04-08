function test3 () {
    alert('How are you');
}

function userTest(username) {
    alert ('Whats up?'+ username);
}

function combine(A, B, C) {
    const combineText = `${A} ${B} ${C}`;
    return combineText;
}

test3('Hi')

task3Element.addEventListener('click', userTest)

const combineText = combine('Hello','my','friend');
alert (combineText)