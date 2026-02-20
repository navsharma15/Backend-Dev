const express = require("express");
const app = express();
const path = require("path");

const { readEmployees, writeEmployees } = require("./modules/fileHandler");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



app.get("/", async (req, resp) => {
    const employees = await readEmployees();
    resp.render("index", { employees });
});


app.get("/add", (req, resp) => {
    resp.render("add");
});

app.post("/add", async (req, resp) => {

    const { name, department, salary, profile, day, month, year } = req.body;

    if (!name || !department || salary <= 0) {
        return resp.send("Invalid Data");
    }

    let startDate = "";

    if (day && month && year) {
        startDate = `${day} ${month} ${year}`;
    }

    const employees = await readEmployees();

    const newEmployee = {
        id: Date.now().toString(),
        name,
        department,
        salary: Number(salary),
        profile,
        startDate   
    };

    employees.push(newEmployee);

    await writeEmployees(employees);

    resp.redirect("/");
});



app.get("/delete/:id", async (req, resp) => {

    const id = req.params.id;

    let employees = await readEmployees();

    const updatedemployees = employees.filter(emp => emp.id.toString() !== id.toString());

    await writeEmployees(updatedemployees);

    resp.redirect("/");
});


app.get("/edit/:id", async (req, resp) => {

    const id = req.params.id;

    const employees = await readEmployees();

    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return resp.send("Employee not found");
    }

    resp.render("edit", { employee });
});


app.post("/edit/:id", async (req, resp) => {

    const id = req.params.id;

    const { name, department, salary } = req.body;

    let employees = await readEmployees();

    employees = employees.map(emp => {

        if (emp.id === id) {
            return {
                id,
                name,
                department,
                salary: Number(salary)
            };
        }

        return emp; 
    });

    await writeEmployees(employees);

    resp.redirect("/");
});



app.listen(2700, () => {
    console.log("Employee Payroll running on 2700");
});
