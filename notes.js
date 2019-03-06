console.log('[Starting notes...]');
const fs = require ('fs');
const chalk = require('chalk');
const chalkCtx = new chalk.constructor({enabled: false});
const log = console.log;
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const success = chalk.bold.green;

/*
***********************************************Function to add Note *************************
*/
const addNote = (title,body) => {
  var notes = loadNotes();//read already saved notes.
  var note = {  title,  body }; //create JSON element of provided title and body.

//  var duplicateNotes = notes.filter((noteEle) => {  return noteEle.title === title;});// is an array which will check if note title is equal to title provided by user. if they are equal then return 1 else nothing. //Hence at the end of this execution, we would have array of duplicates.
  var duplicateNote = notes.find((noteEle)=>{ return noteEle.title===title; });
  debugger
  if(!duplicateNote){
    notes.push(note);
    saveNotes(notes);
    log(success('Note Created Successfully..'));
    log('----');
    log(note.title,note.body);
  }else {
    log(error('Note exist already... '));
  }


};
/*
**********************************************Function to fetch all notes **********************
*/
var getAll = () =>{
  var notes = loadNotes();
  if(notes){
    log(success('Notes Found as follows:'));
    log(notes);
  }else{
    log(error('Notes not found..'));
  }

};

/*
**********************************************Function to remove a note **********************
*/
var removeNote = (title)=>{
  //console.log('removeNote',title);
  var notes = loadNotes();
  //if title is equal to any note in notes, then remove it.
  var filteredNotes = notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes(filteredNotes);
  log(success('Note removed successfully...'));
};

/*
**********************************************Function to read a note **********************
*/
var readNote = (title)=>{
  var notes = loadNotes();
  var nodeFound = notes.find((note)=>{
    return note.title === title;
  });
  if(nodeFound){
    log(success("Node Found as follows: "));
    log(nodeFound);
  }else{
    log(error('Not could not be found...'));
  }
};


/**
****************************************Reuseable Functions************************************************
*/
//function to fetch the notes from disk
var loadNotes = () =>{
  try{
    const dataBuffer = fs.readFileSync('notes-data.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }catch(e){
    return [];
  }
};

//Function to save note on disk.
var saveNotes = (notes) =>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

module.exports ={
  addNote,
  getAll,
  removeNote,
  readNote
}
