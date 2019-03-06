console.log('[Starting app-Node..]');

//const fs = require('fs');
//const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

//console.log(process.argv);
//var y_arg = yargs.argv;

yargs.version('1.1.0');

//var arg = process.argv[2];
//console.log(arg);

yargs.command({
  command:`add`,
  describe:'[Add a new note]',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    },
    body:{
      describe:'Note body',
      demandOption:true,
      type:'string'
    }
  },
  handler: (argv)=>{
    notes.addNote(argv.title,argv.body);
  }
});

yargs.command({
  command:`remove`,
  describe:'[Remove a new note]',
  builder:{
    title:{
      describe:'Note title to be removed',
      demandOption:true,
      type:'string'
    }
  },
  handler: function(argv){
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command:`list`,
  describe:'[List all Notes]',
  handler: () =>{
    notes.getAll();
  }
});

yargs.command({
  command:`read`,
  describe:'[Read a new note]',
  builder:{
    title:{
      describe:'Title to read',
      demandOption:true,
      type:'string'
    }
  },
  handler: function(argv){
    notes.readNote(argv.title);

  }
});

//console.log(yargs.argv); or use below. we need to access yargs.
yargs.parse();

console.log('[Finished..]');
