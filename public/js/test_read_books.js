// const fs = require('fs');

// fs.readFile('../data/books.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading the file:', err);
//     return;
//   }
//   try {
//     const jsonData = JSON.parse(data);
//     console.log(jsonData);
//   } catch (parseErr) {
//     console.error('Error parsing JSON:', parseErr);
//   }
// });

// import jsonData from '../data/books.json' assert { type: 'json' };

// console.log(jsonData);
/**/
fetch('../data/books.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // const books = response.json()
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });
