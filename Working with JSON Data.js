// Parsing JSON string to JavaScript object
const jsonData = '{"name": "Alice", "age": 25}';
const obj = JSON.parse(jsonData);
console.log(obj.name); // Output: Alice

// Converting JavaScript object to JSON string
const jsonString = JSON.stringify({ name: "Bob", age: 30 });
console.log(jsonString); // Output: '{"name":"Bob","age":30}'
