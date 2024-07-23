const getDayOfWeek = d => new Date(d).getDay();

console.log(getDayOfWeek('2024-06-22')); // Output: 5 (Thursday)

// Using a Date object directly
const date = new Date('2024-06-22');
console.log(getDayOfWeek(date)); // Output: 5 (Thursday)
