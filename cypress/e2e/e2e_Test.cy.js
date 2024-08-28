const {Login,Add,search,Admin} = require('../support/POM/POM_OR')
/// <reference types="Cypress"/>
require('cypress-xpath')
require('cypress-plugin-tab')
import 'cypress-file-upload'

const tiempo = 1000

describe('TEST THE ORANGE HRM PAGE FOR E2E TESTING', () => {

  before(function() {
    // Código para ejecutar una vez antes de todas las pruebas
    cy.fixture('employee').then(function(data){
        globalThis.data=data
        
    })
  })
  
  it('TESTING E2E FOR THE PAGE ORANGE HRM', () => {
    let employee1 = data[0]
    let employee2 = data[1]
    Login.visit()
    cy.url().should('contains','/login').wait(tiempo)
    cy.title().should('eq','OrangeHRM').wait(tiempo)
    Login.LoginForm('Admin','admin123')
    Add.visit()
    cy.url().should('contains','/addEmployee').wait(tiempo)
    Add.Addform(employee1.ruta, employee1.name, employee1.mname, employee1.lname, employee1.id)
    Add.visit()
    Add.Addlogindetails(employee2.ruta, employee2.name, employee2.mname, employee2.lname, employee2.id, employee2.username,
      employee2.password,employee2.password
    )
    Login.Logout()
    Login.LoginForm(employee2.username, employee2.password)
    Login.Logout()
    Login.LoginForm('Admin','admin123')
    Admin.visit()
    cy.url().should('contains','/viewSystemUsers').wait(tiempo)
    Admin.SearchEmployee(employee2.username)
    Admin.modifyemployeepass(employee2.password,employee2.password)
    Login.Logout()
    Login.LoginForm(employee2.username, employee2.password)
    Admin.visit()
    cy.url().should('contains','/viewSystemUsers').wait(tiempo)
    
  })

 








  

})