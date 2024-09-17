const {Login,Add,search,Admin} = require('../support/POM/POM_OR')

/// <reference types="Cypress"/>
import 'cypress-file-upload'

const tiempo = 1000

describe('REGRESSION TEST FOR ORANGE HRM', () => {



    before(function() {
        // Código para ejecutar una vez antes de todas las pruebas
        cy.fixture('employee').then(function(data){
            globalThis.data=data
            
        })
    })
  
    it('TESTING THE LOGIN WITH ADMIN USER', () => {

        Login.visit()
        cy.url().should('contains','/login').wait(tiempo)
        cy.title().should('eq','OrangeHRM').wait(tiempo)
        Login.LoginForm("Admin","admin123")

    })

    it('TESTING THE ADD USER TOOL', () => {
        let employee2 = data[1]
        Login.visit()
        Login.LoginForm("Admin","admin123")
        Add.visit()
        cy.url().should('contains','/addEmployee').wait(tiempo)
        Add.Addlogindetails(employee2.ruta, employee2.name, employee2.mname, employee2.lname, employee2.id, employee2.username,
        employee2.password,employee2.password)
        Login.Logout()
        Login.LoginForm(employee2.username, employee2.password)

    });

    it('TESTING THE SEARCH TOOL', () => {

        let employee1 = data[2]
        Login.visit()
        Login.LoginForm("Admin","admin123")
        Add.visit()
        Add.Addform(employee1.ruta, employee1.name, employee1.mname, employee1.lname, employee1.id)
        search.visit()
        cy.url().should('contains','/viewEmployeeList').wait(tiempo)
        search.SearchEmployee(employee1.name,employee1.id)
        search.modifyemployee()
        search.visit()
        search.SearchEmployee(employee1.name,employee1.id)
        search.deleteemployee()
        

    });
  

})