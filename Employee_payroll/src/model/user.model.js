import fs from "fs";

const FILE_PATH = "user.json";


export function usercreate(name, email, password) {
  try {
    let users = [];

    
    if (fs.existsSync(FILE_PATH)) {
      const rawData = fs.readFileSync(FILE_PATH, "utf-8");
      users = rawData ? JSON.parse(rawData) : [];
    }

    // 🔥 Check duplicate email
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return "email already exists";
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password
    };

    users.push(newUser);

    fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));

    // Do NOT return password
    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    };

  } catch (error) {
    console.log("usercreate error:", error);
    return null;
  }
}


export function deleteuser(id) {
  try {
    if (!fs.existsSync(FILE_PATH)) return null;

    const rawData = fs.readFileSync(FILE_PATH, "utf-8");
    const users = rawData ? JSON.parse(rawData) : [];

    const userExists = users.find((user) => user.id == id);
    if (!userExists) return "not found";

    const updatedUsers = users.filter((user) => user.id != id);

    fs.writeFileSync(FILE_PATH, JSON.stringify(updatedUsers, null, 2));

    return "user deleted";

  } catch (error) {
    console.log("deleteuser error:", error);
    return null;
  }
}


export function userupdate(id, name, email) {
  try {
    if (!fs.existsSync(FILE_PATH)) return null;

    const rawData = fs.readFileSync(FILE_PATH, "utf-8");
    const users = rawData ? JSON.parse(rawData) : [];

    const index = users.findIndex((user) => user.id == id);
    if (index === -1) return "not found";

    users[index].name = name || users[index].name;
    users[index].email = email || users[index].email;

    fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));

    return {
      id: users[index].id,
      name: users[index].name,
      email: users[index].email
    };

  } catch (error) {
    console.log("userupdate error:", error);
    return null;
  }
}


export function userlogindb(email) {
  try {
    if (!fs.existsSync(FILE_PATH)) return null;

    const rawData = fs.readFileSync(FILE_PATH, "utf-8");
    const users = rawData ? JSON.parse(rawData) : [];

    const user = users.find((u) => u.email === email);

    return user || null;

  } catch (error) {
    console.log("userlogindb error:", error);
    return null;
  }
}