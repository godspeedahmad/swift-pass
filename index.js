function generatePassword (length, flags = {}) {

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_+=~`[]{}|;:,.<>?';

    const {
        uppercase = true,
        lowercase = true,
        numbers = true,
        symbols = true
    } = flags;

    let charSet = '';

    if (uppercase)
        charSet += uppercaseChars;
    if (lowercase)
        charSet += lowercaseChars;
    if (numbers)
        charSet += numberChars;
    if (symbols)
        charSet += symbolChars;

    if (charSet == '')
        throw new Error('You must specify at least one character type!');

    let outputPassword = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        outputPassword += charSet[randomIndex];
    }

    return outputPassword;
}

module.exports = generatePassword;