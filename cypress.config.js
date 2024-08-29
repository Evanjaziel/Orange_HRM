const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "x9pp5m",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    loginurl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    employeelisturl: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
    addemployeeurl: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee",
    systemusersurl: "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"

  }
});
