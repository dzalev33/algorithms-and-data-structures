// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples

//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}
reverse('apple')

module.exports = reverse;

// solution 1
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// solution 2
// function reverse(str) {
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }

// solution 3
//
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }