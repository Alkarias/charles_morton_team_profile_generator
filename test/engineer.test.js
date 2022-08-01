const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it ('should create an object with "name", "id", "email", and "github"', () => {
            const engineer = new Engineer('John', 25, 'example@email.com', 'John');

            expect(engineer).toEqual({ name:'John', id: 25, email: 'example@email.com', github: 'John'});
        });
    });
    describe('getName', () => {
        it ('should return the name of the engineer ', () => {
            const engineer = new Engineer('John', 25, 'example@email.com', 'John');

            expect(engineer.getName()).toEqual('John');
        });
    });
    describe('getId', () => {
        it ('should return the id of the engineer ', () => {
            const engineer = new Engineer('John', 25, 'example@email.com', 'John');

            expect(engineer.getId()).toEqual(25);
        });
    });
    describe('getEmail', () => {
        it ('should return the email of the engineer ', () => {
            const engineer = new Engineer('John', 25, 'example@email.com', 'John');

            expect(engineer.getEmail()).toEqual('example@email.com');
        });
    });
    describe('getRole', () => {
        it ('should return the role of the engineer ', () => {
            const engineer = new Engineer('John', 25, 'example@email.com', 'John');

            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
    describe('getGithub', () => {
        it ('should return the github username of the engineer ', () => {
            const engineer = new Engineer('John', 25, 'example@email.com', 'John');

            expect(engineer.getGithub()).toEqual('John');
        });
    });
});