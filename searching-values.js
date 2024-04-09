const people = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 },
    { name: 'Emily Davis', age: 35 },
    { name: 'Jannet Jones', age: 22 }
];

// Log the result after each task:

// 1. Sort people by age...
people.sort((a,b)=>b.age - a.age)
console.log(people)
// 2. Find a person whose name starts with 'Jan'...
const startWithJan=people.filter(function (e){
    return e.name.startsWith("Jan")
})
console.log(startWithJan)

// 3. Joining all names together to form a single string separated by a comma...
peopleNames=people.map(function (obj){
    return obj.name
})
console.log(peopleNames)
