// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Checks valid phone number', () => {
    expect(functions.isPhoneNumber('408-981-2823')).toBe(true)
});
test('Checks valid phone number', () => {
    expect(functions.isPhoneNumber('408-930-0911')).toBe(true)
});
test('Checks invalid phone number', () => {
    expect(functions.isPhoneNumber('111111111111')).toBe(false)
});
test('Checks invalid phone number', () => {
    expect(functions.isPhoneNumber('jaredosaurus@gmail.com')).toBe(false)
});

test('Checks valid email', () => {
    expect(functions.isEmail('jaredosaurus@gmail.com')).toBe(true)
});
test('Checks valid email', () => {
    expect(functions.isEmail('jalevy@ucsd.edu')).toBe(true)
});
test('Checks invalid email', () => {
    expect(functions.isEmail('408-981-2823')).toBe(false)
});
test('Checks invalid email', () => {
    expect(functions.isEmail('@#^$&@728')).toBe(false)
});

test('Checks valid strong password', () => {
    expect(functions.isStrongPassword('Qetuoljgda')).toBe(true)
});
test('Checks valid strong password', () => {
    expect(functions.isStrongPassword('a1b2c3d4e5')).toBe(true)
});
test('Checks invalid strong password', () => {
    expect(functions.isStrongPassword('cat')).toBe(false)
});
test('Checks invalid strong password', () => {
    expect(functions.isStrongPassword('dog')).toBe(false)
});

test('Checks valid date', () => {
    expect(functions.isDate('01/24/2000')).toBe(true)
});
test('Checks valid date', () => {
    expect(functions.isDate('12/25/2000')).toBe(true)
});
test('Checks invalid date', () => {
    expect(functions.isDate('123/456/78910')).toBe(false)
});
test('Checks invalid date', () => {
    expect(functions.isDate('dog')).toBe(false)
});

test('Checks valid hexcolor', () => {
    expect(functions.isHexColor('FF5733')).toBe(true)
});
test('Checks valid hexcolor', () => {
    expect(functions.isHexColor('7AFF33')).toBe(true)
});
test('Checks invalid hexcolor', () => {
    expect(functions.isHexColor('77777-')).toBe(false)
});
test('Checks invalid hexcolor', () => {
    expect(functions.isHexColor('@@@@jjj')).toBe(false)
});
