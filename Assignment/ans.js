const fs = require('fs');

fs.readFileSync("./answers.txt", 'utf-8');

fs.writeFileSync("./answers.txt",
                "Answer1: Synchronous file operations block the program until the task is finished.
                They execute code step by step and can slow down applications.
                Asynchronous file operations run in the background without blocking execution.
                They improve performance and are better for real-world applications." ,
                'utf-8');

fs.appendFileSync("./answer.txt", 
                "Answer2: File streams should be used when handling large files or continuous data because they process 
                data in small chunks rather than loading the entire file into memory. 
                This approach reduces memory usage, improves performance, and allows data to be processed progressively. 
                File streams are especially suitable for applications that require efficiency, 
                scalability, or real-time data handling.",
                'utf-8');

fs.appendFileSync("./answer.txt", "Answer3: The utf8 encoding parameter specifies how file data should be interpreted as text.
                   When utf8 is provided, the file content is read and written as human-readable strings instead of raw binary data (buffers). 
                   This ensures correct handling of characters, symbols, and international text, making file data easier to process and display.",
                  utf-8);                