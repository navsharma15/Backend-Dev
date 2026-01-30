const fs = require('fs');

fs.readFileSync("./answers.txt", 'utf-8');

fs.writeFileSync("./answers.txt",
                "Answer1: Synchronous file operations block the program until the task is finished.They execute code step by step and can slow down applications.Asynchronous file operations run in the background without blocking execution.They improve performance and are better for real-world applications." ,
                'utf-8');

fs.appendFileSync("./answer.txt", 
                "Answer2: ",
                'utf-8');