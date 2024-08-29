const {Login,Add,search,Admin} = require('../support/POM/POM_OR')
/// <reference types="Cypress"/>
require('cypress-xpath')
require('cypress-plugin-tab')
import 'cypress-file-upload'

const tiempo = 1000

describe('SOMOKE TESTING FOR DE ADD ADMIN USERS TOOL', () => {


  
    
    it('TESTING ALL KIND OF USERS AND MAKETHEM ADMIN USERS', () => {
        

        // Código para ejecutar una vez antes de todas las pruebas
        cy.fixture('employee').then(function(data){
            globalThis.data=data
            cy.wrap(data).each(($el,index)=>{
                let employee = $el
                Login.visit()
                Login.LoginForm('Admin','admin123')
                Add.visit()
                cy.log('ADD THE EMPLOYEE NUMBER '+(index+1))
                Add.Addlogindetails(employee.ruta, employee.name, employee.mname, employee.lname, employee.id, employee.username,
                employee.password,employee.password)
                Admin.visit()
                Admin.SearchEmployee(employee.username)
                Admin.modifyemployeepass(employee.password,employee.password)
                Login.Logout()
                Login.LoginForm(employee.username, employee.password)
                Admin.visit()
                cy.url().should('contains','/viewSystemUsers').wait(tiempo)                
                Login.Logout()

            })
            
        })
        

    })

})