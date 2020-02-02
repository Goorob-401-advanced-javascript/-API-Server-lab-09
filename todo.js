'use strict';
const mongoose = require('mongoose');
const MONGODB_URI='mongodb://localhost:27017/virtuals-demo';
mongoose.connect(MONGODB_URI);
const toDoSchema = mongoose.Schema({
    task :{ type : String},
    assignee:{type : String},
    complete: {type : Booleen },
},{toObject : { virtuals : true }, toJson:{ virtuals : true }}); // for virtuals 

const PersonSchema = mongoose.Schema({
    name :{ type : String , required : true },
    email :{type : String},
    phone :{type :String}
})

toDoSchema.virtuals('assigneeDetails' ,{ //create someone who is assigned for all the info (name ,email) assignee hold all personschema info
    ref :  'people'  ,     //what specific modls do we refreance 
    localField:'assignee',
    foreignField : 'name',
    justOne : true // just give me back one response 
}); 

function join(){
    try {
    //this is where we assign a todo item to a spesific person

    }
    catch{

    }
}

//mongoose models 
const Todo = mongoose.model('todo' , todoSchema); // model calling todo and the blue print is todoSchema 
const Person = mongoose.model('people' , personSchema ) ;