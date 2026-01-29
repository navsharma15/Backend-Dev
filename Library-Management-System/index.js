import fs from "fs";
import createBook from "./src/book.js";
import createMember from "./src/member.js";
import borrowBooks from "./src/borrow.js";
import borrowingSummary from "./src/summary.js";

// Books
const book1 = createBook(1, "Atomic Habits", "James Clear", 500);
const book2 = createBook(2, "Deep Work", "Cal Newport", 600);
const book3 = createBook(3, "Clean Code", "Robert C. Martin", 700);

// Members
const member1 = createMember(101, "Tarun", "gold");
const member2 = createMember(102, "Amit", "normal");

// Borrow records
const record1 = borrowBooks(member1, [book1, book2]);
const record2 = borrowBooks(member2, [book3]);

// DECLARE FIRST
const summaries = [];

// Push summaries
summaries.push(borrowingSummary(record1, 200));
summaries.push(borrowingSummary(record2, 200));

// Write to file
fs.writeFileSync(
  "book.json",
  JSON.stringify(summaries, null, 2)
);

console.log("Borrowing summary saved to book.json");
