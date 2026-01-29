import fs from "fs";

function deleteUser(name) {
    try {
        if (!fs.existsSync("todo.json")) {
            return "no user found";
        }

        let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"));

        let index = data.findIndex((value) => value.name === name);

        if (index === -1) {
            return "user not found";
        }

        data.splice(index, 1);

        fs.writeFileSync("todo.json", JSON.stringify(data, null, 2));

        return "user deleted successfully";
    } catch (error) {
        console.log(error);
    }
}

export default deleteUser;
