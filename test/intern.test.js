const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it ('should create an object with "name", "id", "email", and "school"', () => {
            const intern = new Intern('John', 25, 'example@email.com', 'Lost Ark Academy');

            expect(intern).toEqual({ name:'John', id: 25, email: 'example@email.com', school: 'Lost Ark Academy'});
        });
    });
    describe('getName', () => {
        it ('should return the name of the intern ', () => {
            const intern = new Intern('John', 25, 'example@email.com', 'Lost Ark Academy');

            expect(intern.getName()).toEqual('John');
        });
    });
    describe('getId', () => {
        it ('should return the id of the intern ', () => {
            const intern = new Intern('John', 25, 'example@email.com', 'Lost Ark Academy');

            expect(intern.getId()).toEqual(25);
        });
    });
    describe('getEmail', () => {
        it ('should return the email of the intern ', () => {
            const intern = new Intern('John', 25, 'example@email.com', 'Lost Ark Academy');

            expect(intern.getEmail()).toEqual('example@email.com');
        });
    });
    describe('getRole', () => {
        it ('should return the role of the intern ', () => {
            const intern = new Intern('John', 25, 'example@email.com', 'Lost Ark Academy');

            expect(intern.getRole()).toEqual('Intern');
        });
    });
    describe('getSchool', () => {
        it ('should return the school of the intern ', () => {
            const intern = new Intern('John', 25, 'example@email.com', 'Lost Ark Academy');

            expect(intern.getSchool()).toEqual('Lost Ark Academy');
        });
    });
});