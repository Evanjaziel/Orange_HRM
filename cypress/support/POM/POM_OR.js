import 'cypress-file-upload'
let tiempo=1000

class Loginpage{

    visit() {
        cy.visit(Cypress.env('loginurl'));
    }

    get = {

        Userfield: () => cy.get(".oxd-input").eq(0),
        Passwordfield: () => cy.get(".oxd-input").eq(1),
        Loginbutton: () => cy.get(".oxd-button"),
        userdropdown: () => cy.get(".oxd-userdropdown-tab"),
        Logoutbutton: () => cy.get(".oxd-userdropdown-link").eq(3),
        

    }

    LoginForm(user,pass){
        this.get.Userfield().type(user).wait(tiempo)
        this.get.Passwordfield().type(pass).wait(tiempo)
        this.get.Loginbutton().click().wait(tiempo)

    }
    Logout(){
        this.get.userdropdown().click().wait(tiempo)
        this.get.Logoutbutton().click().wait(tiempo)

    }
    
}

class AddEmployeepage{

    visit() {
        cy.visit(Cypress.env('addemployeeurl'));
    }

    get = {
        

        Employeeimage: () => cy.get('input[type="file"]'),
        Firstnamefield: () => cy.get(".oxd-input").eq(1),
        Middlenamefield: () => cy.get(".oxd-input").eq(2),
        Lastnamefield: () => cy.get(".oxd-input").eq(3),
        Idfield: () => cy.get(".oxd-input").eq(4).clear(),
        switchdetails: () => cy.get(".oxd-switch-input"),
        Userfield: () => cy.get(".oxd-input").eq(5),
        Passwordfield: () => cy.get(".oxd-input").eq(6),
        ConfirmPasswordfield: () => cy.get(".oxd-input").eq(7),
        savebutton: () => cy.get(".oxd-button").eq(1),



    }

    Addform(image,fname,mname,lname,id){

        this.get.Employeeimage().selectFile(`cypress/fixtures/${image}`,{ force: true }).wait(tiempo)
        this.get.Firstnamefield().type(fname).wait(tiempo)
        this.get.Middlenamefield().type(mname).wait(tiempo)
        this.get.Lastnamefield().type(lname).wait(tiempo)
        this.get.Idfield().type(id).wait(tiempo)
        this.get.savebutton().click().wait(tiempo)

    }

    Addlogindetails(image,fname,mname,lname,id,user,pass,cpass){

        this.get.Employeeimage().selectFile(`cypress/fixtures/${image}`,{ force: true }).wait(tiempo)
        this.get.Firstnamefield().type(fname).wait(tiempo)
        this.get.Middlenamefield().type(mname).wait(tiempo)
        this.get.Lastnamefield().type(lname).wait(tiempo)
        this.get.Idfield().type(id).wait(tiempo)
        this.get.switchdetails().click().wait(tiempo)
        this.get.Userfield().type(user).wait(tiempo)
        this.get.Passwordfield().type(pass).wait(tiempo)
        this.get.ConfirmPasswordfield().type(cpass).wait(tiempo)
        this.get.savebutton().click().wait(2500)


    }
    
}

class Employeelistpage{

    visit() {
        cy.visit(Cypress.env('employeelisturl'));
    }

    get = {

        Employeenamefield: () => cy.get(".oxd-autocomplete-text-input").eq(0),
        EmployeeIdfield: () => cy.get(".oxd-input").eq(1),
        searchbutton: () => cy.get(".oxd-button").eq(1),
        modifybutton: () => cy.get(".bi-pencil-fill").eq(0),
        deletebutton: () => cy.get(".bi-trash").eq(0),
        confirmdeletebutton: () => cy.get(".oxd-button--label-danger"),
        

           }

    SearchEmployee(name,id){
        this.get.Employeenamefield().type(name).wait(tiempo)
        this.get.EmployeeIdfield().type(id).wait(tiempo)
        this.get.searchbutton().click().wait(tiempo)




    }

    modifyemployee(){
        this.get.modifybutton().click().wait(tiempo)
    }
    deleteemployee(){
        this.get.deletebutton().click().wait(tiempo)
        this.get.confirmdeletebutton().click().wait(tiempo)
    }

  
}

class Systemuserspage{

    visit() {
        cy.visit(Cypress.env('systemusersurl'));
    }

    get = {

        searchusername: () => cy.get(".oxd-input").eq(1),
        searchbutton: () => cy.get(".oxd-button").eq(1),
        addbutton: () => cy.get(".oxd-button").eq(2),
        modifybutton: () => cy.get(".bi-pencil-fill").eq(0),
        deletebutton: () => cy.get(".bi-trash").eq(0),
        rolefield: () => cy.get(".oxd-select-text").eq(0),
        adminoption: () => cy.get(".oxd-select-dropdown > :nth-child(2)"),
        statusfield: () => cy.get(".oxd-select-text").eq(1),
        employeenamefield: () => cy.get(".oxd-input").eq(1),
        userfield: () => cy.get(".oxd-input").eq(2),
        changepassoption: () => cy.get(".oxd-checkbox-input-icon"),
        Passwordfield: () => cy.get(".oxd-input").eq(2),
        Passwordfield2: () => cy.get(".oxd-input").eq(3),
        savebutton: () => cy.get(".oxd-button").eq(1),


           }

    SearchEmployee(name){
        this.get.searchusername().type(name).wait(tiempo)
        this.get.searchbutton().click().wait(tiempo)


    }

    modifyemployee(){
        this.get.modifybutton().click().wait(tiempo)
        this.get.rolefield().click().wait(tiempo)
        this.get.adminoption().click().wait(tiempo)
        this.get.savebutton().click().wait(tiempo)


    }
    modifyemployeepass(pass,pass2){
        this.get.modifybutton().click().wait(tiempo)
        this.get.rolefield().click().wait(tiempo)
        this.get.adminoption().click().wait(tiempo)
        this.get.changepassoption().click().wait(tiempo)
        this.get.Passwordfield().type(pass).wait(tiempo)
        this.get.Passwordfield2().type(pass2).wait(tiempo)
        this.get.savebutton().click().wait(tiempo)


    }

  
}




export const Login = new Loginpage;
export const Add = new AddEmployeepage;
export const search = new Employeelistpage;
export const Admin = new Systemuserspage;