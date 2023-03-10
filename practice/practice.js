const books = [
  "A Smarter Way to Learn JavaScript",
  "Eloquent JavaScript",
  "Secrets of the JavaScript Ninja",
  "You Don't Know JS: ES6 and Beyond",
  "Professional JavaScript for Web Developers",
];
const java1 = "javaScript";
let JavaScript = [];
for (const book of books) {
  if (book.toLowerCase().includes(java1.toLowerCase())) {
    JavaScript.push(book);
  }
}
console.log(JavaScript);
