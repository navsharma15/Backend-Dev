import fs from "fs";

function loginUser(name, password) {
    try {
        if (!fs.existsSync("todo.json")) {
            return "no user found";
        }

        let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"));

        let user = data.find(
            (value) => value.name === name && value.password === password
        );

        if (!user) {
            return "invalid credentials";
        }

        return "login successful";
    } catch (error) {
        console.log(error);
    }
}

export default loginUser;
    