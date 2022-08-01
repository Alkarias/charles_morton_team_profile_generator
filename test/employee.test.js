const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it ('should create an object with "name", "id", and "email"', () => {
            const employee = new Employee('John', 25, 'example@email.com');

            expect(employee).toEqual({ name:'John', id: 25, email: 'example@email.com'});
        });
    });
    describe('getName', () => {
        it ('should return the name of the employee', () => {
            const employee = new Employee('John', 25, 'example@email.com');

            expect(employee.getName()).toEqual('John');
        });
    });
    describe('getId', () => {
        it ('should return the id of the employee', () => {
            const employee = new Employee('John', 25, 'example@email.com');

            expect(employee.getId()).toEqual(25);
        });
    });
    describe('getEmail', () => {
        it ('should return the email of the employee', () => {
            const employee = new Employee('John', 25, 'example@email.com');

            expect(employee.getEmail()).toEqual('example@email.com');
        });
    });
    describe('getRole', () => {
        it ('should return the role of the employee', () => {
            const employee = new Employee('John', 25, 'example@email.com');

            expect(employee.getRole()).toEqual('Employee');
        });
    });
});