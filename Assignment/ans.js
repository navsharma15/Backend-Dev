const fs = require('fs');


fs.writeFileSync(
  "./answers.txt",
  "Answer1: Synchronous file operations block the program until the task is finished. \n" +
  "They execute code step by step and can slow down applications. \n" +
  "Asynchronous file operations run in the background without blocking execution. \n" +
  "They improve performance and are better for real-world applications.\n\n",
  'utf-8'
);


fs.appendFileSync(
  "./answers.txt",
  "\n\nAnswer2: File streams should be used when handling large files or continuous data because they process \n" +
  "data in small chunks rather than loading the entire file into memory. \n" +
  "This approach reduces memory usage, improves performance, and allows data to be processed progressively. \n" +
  "File streams are especially suitable for applications that require efficiency, scalability, or real-time data handling.\n\n",
  'utf-8'
);


fs.appendFileSync(
  "./answers.txt",
  "\n\nAnswer3: The utf8 encoding parameter specifies how file data should be interpreted as text. \n" +
  "When utf8 is provided, the file content is read and written as human-readable strings instead of raw binary data (buffers). \n" +
  "This ensures correct handling of characters, symbols, and international text, making file data easier to process and display.\n\n",
  'utf-8'
);


fs.appendFileSync(
  "./answers.txt",
  "\n\nAnswer4: Common file system error codes indicate why a file operation failed.\n " +
  "ENOENT means the file or directory does not exist, EACCES indicates permission is denied, \n" +
  "EPERM means the operation is not allowed, EISDIR occurs when a directory is used where a file is expected, \n" +
  "and ENOTDIR means a file is used where a directory is expected. Other frequent errors include EMFILE (too many open files), \n" +
  "ENOSPC (no space left on disk), and EBUSY (resource is busy or locked).\n\n",
  'utf-8'
);


fs.appendFileSync(
  "./answers.txt",
  "\n\nAnswer5: To safely delete a directory with all its contents, \n" +
  "you should first ensure that the directory exists and that you have the required permissions. \n" +
  "Then, use a recursive delete operation that removes all files and subdirectories before deleting the main folder. \n" +
  "In Node.js, this is commonly done using fs.rm() or fs.rmdir() with the recursive option, along with proper error handling to avoid accidental data loss. \n" +
  "Always double-check the directory path before performing the operation, especially in production.\n\n",
  'utf-8'
);


fs.appendFileSync(
  "./answers.txt",
  "\n\nAnswer6: Piping in streams connects the output of one stream directly to the input of another, \n" +
  "allowing data to flow automatically without manual handling. It is used to efficiently process large data by transferring it chunk by chunk between streams.\n\n",
  'utf-8'
);


fs.appendFileSync(
  "./answers.txt",
  "\n\nAnswer7: It is important to handle errors in file operations to prevent application crashes and unexpected behavior. \n" +
  "Proper error handling helps identify issues such as missing files, permission denials, or insufficient disk space, allowing the application \n" +
  "to respond gracefully. It also ensures data integrity and improves reliability and user experience.\n\n",
  'utf-8'
);


fs.appendFileSync(
  "./answers.txt",
  "\n\nAnswer8: The writeFile method is used to create a new file or replace the entire content of an existing file with new data. \n" +
  "If the file already exists, its previous content is erased before writing. In contrast, the appendFile method adds new data to the end of an existing file, \n" +
  "preserving the existing content. Because of this behavior, writeFile is suitable for saving fresh data or updates, while appendFile is commonly used for logs or records where data needs to be added over time.\n",
  'utf-8'
);

console.log("Added in answers.txt");
