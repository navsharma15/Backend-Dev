import registerUser from "./src/registerUser.js";
import loginUser from "./src/login.js";

registerUser("Tarun", "tarun@gmail.com", "123456");
console.log(loginUser("Tarun", "123456"));
