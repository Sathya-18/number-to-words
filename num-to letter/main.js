const input = document.getElementById('int');
const button = document.getElementById('btn');
const result = document.getElementById('res');

const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function word(x) {

    let Ld;
    let rs = '';

    while (x != 0) {
        Ld = x % 10;
        rs = rs + ' ' + words[Ld];
        x = (x - Ld) / 10;
    }

    return rs;
}

button.addEventListener('click', () => {
    result.innerText = word(parseInt(input.value));
})


