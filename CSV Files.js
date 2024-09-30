// Parsing a CSV string into an array of object
const csvData = `name,age
Alice,25
Bob,30
Charlie,35`;

const parsedData = csvData.split('\n').slice(1).map(row => {
  const [name, age] = row.split(',');
  return { name, age: Number(age) };
});
console.log(parsedData);
// Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
