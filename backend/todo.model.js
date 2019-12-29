const mongoose = require('mongoose');
const Schema = mongoose.Schema;
{/* defining the schema */}
let Todo = new Schema({
    todo_description:{
        type: String
    },
    todo_responsible:{
        type: String
    },
    todo_priority:{
        type: String
    },
    todo_completed:{
        type: Boolean
    }
});
{/* exporting model so server can access data*/}
module.exports = mongoose.model('Todo', Todo);