const Manager = require('../lib/manager');

describe('Intern', () => {
    describe('Initialization', () => {
        it ('should create an object with "name", "id", "email", and "officeNumber"', () => {
            const manager = new Manager('John', 25, 'example@email.com', 302);

            expect(manager).toEqual({ name:'John', id: 25, email: 'example@email.com', officeNumber: 302});
        });
    });
    describe('getName', () => {
        it ('should return the name of the manager ', () => {
            const manager = new Manager('John', 25, 'example@email.com', 302);

            expect(manager.getName()).toEqual('John');
        });
    });
    describe('getId', () => {
        it ('should return the id of the manager ', () => {
            const manager = new Manager('John', 25, 'example@email.com', 302);

            expect(manager.getId()).toEqual(25);
        });
    });
    describe('getEmail', () => {
        it ('should return the email of the manager ', () => {
            const manager = new Manager('John', 25, 'example@email.com', 302);

            expect(manager.getEmail()).toEqual('example@email.com');
        });
    });
    describe('getRole', () => {
        it ('should return the role of the manager ', () => {
            const manager = new Manager('John', 25, 'example@email.com', 302);

            expect(manager.getRole()).toEqual('Manager');
        });
    });
    describe('getOfficeNumber', () => {
        it ('should return the office number of the manager ', () => {
            const manager = new Manager('John', 25, 'example@email.com', 302);

            expect(manager.getOfficeNumber()).toEqual(302);
        });
    });
});