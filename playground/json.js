// var obj ={
//   name:`Navdeep`
// };
// var stringObj = JSON.stringify(obj);
// console.log(stringObj);
// console.log(typeof stringObj);

// var personString = `{"name":"Navdeep","Age":"23"}`;
// var personObj = JSON.parse(personString);
// console.log(typeof personString);
// console.log(typeof personObj);
// console.log(personObj);

const fs = require (`fs`);

var originalNote = {
  title : 'Title goes here',
  body :  'Body goes here'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var readNote = fs.readFileSync('notes.json');
var note = JSON.parse(readNote);

console.log(typeof readNote);
console.log(note.title);
