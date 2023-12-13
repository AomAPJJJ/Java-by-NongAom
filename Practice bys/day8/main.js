
console.log('-g Global search dont return after the first match')

let regexGlobal = /abc/g;
console.log(regexGlobal.test('abc')) //true 

console.log('------------------------------------------')

console.log('i Case-insensitive search')

let regexInsensitive = /abc/i;
console.log(regexInsensitive.test('ABC')) //true 

console.log('------------------------------------------')

console.log('/[]... []ไว้ใช้กำหนดตัวหน้า')
let regex = /[bt]ear/
console.log(regex.test('tear'))//true
console.log(regex.test('bear'))//true
console.log(regex.test('fear'))//false


console.log('/[^]... [^]ไว้ใช้กำหนดตัวที่ใช้ไม่ได้')
let regex2 = /[^bt]ear/
console.log(regex.test('tear'))//false
console.log(regex.test('bear'))//false
console.log(regex.test('fear'))//true


console.log('/[a-z]... [a-z]ไว้ใช้กำหนดตัวโดยต้องอยู่ใน a-z และต้องเป็นตัวเล็กเท่านั้น')
let regex3 = /[a-z]ear/
console.log(regex.test('Tear'))//false
console.log(regex.test('bear'))//true
console.log(regex.test('fear'))//true

console.log('------------------------------------------')

let regexDigit = /\w/;
console.log(regexDigit.test('+_'))

console.log('------------------------------------------')

    // \d - Match any digit character ( same as [0-91 ).
    // \w- Match any word character. A word character is any letter, digit,
    //     and underscore. (Same as[a-zA-Z0-9_1) i.e alphanumeric character.
    // \s - Match a whitespace character (spaces, tabs etc).
    // \t - Match a tab character only.
    // \b - Find a match at beginning or ending of a word. Also known as word boundary.
    // • = (period) Matches any character except for newline.
    // \D - Match any non digit character (same as [^0-91).
    // \W - Match any non word character (Same as [^a-zA-Z0-9_1 ).
    // \S - Match a non whitespace character.