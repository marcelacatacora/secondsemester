const library = [
    {title: 'The Road Ahead', author: 'Bill Gates', year: 1995, bestseller: true},
    {title: 'Walter Isaacson', author: 'Steve Jobs', year: 2011, bestseller: true},
    {title: 'Mockingjay', author: 'Suzanne Collins', year: 2010, bestseller: false},
    {title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008, bestseller: true}
]

// Log the result after each task:

// List each author (without duplicates)...
//MC: Done!
const authors= library.filter((v,i,a)=>a.findIndex(v2=>['author']. every(k=>v2[k] ===v[k])) ===i)
    .map((names)=>names.author)
console.log(authors)

// List all book titles published after 2000...
//MC:Done!
const booksAfter2000= library.filter((books)=> books.year>2000)
console.log(booksAfter2000)

// List all property names of the first book separated by a comma (expected output: 'title, author, year')...
//MC:Done!
const propNames=[]
library.forEach(function (o){
    Object.keys(o).forEach(function (prop){
        if (propNames.indexOf(prop)<0)
            propNames.push(prop)
    })
})
console.log(propNames)
// List all bestseller book titles...
//MC:Done!
const bestsellers=  library.filter((bestsellers)=>bestsellers.bestseller===true).map(library=>library.title)
console.log(bestsellers)

