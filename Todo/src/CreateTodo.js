import fs from "fs";

function createUser(name, email, password) {
    try {
        let users = [];

        if (fs.existsSync("todo.json")) {
            users = JSON.parse(fs.readFileSync("todo.json", "utf-8"));

            let isUserExist = users.some(
                (value) => value.name === name || value.email === email
            );

            if (isUserExist) {
                return "user already exists";
            }
        }

        let newUser = {
            id: Date.now(),
            name,
            email,
            password,
            todo: []
        };

        users.push(newUser);

        fs.writeFileSync("todo.json", JSON.stringify(users, null, 2));

        return "user created successfully";
    } catch (error) {
        console.log(error);
    }
}

export default createUser;
