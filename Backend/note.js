const mongoose= require("mongoose");
const {Schema}= mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'             // works as foriegn key for the user.js file
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    }
  });

  module.exports = mongoose.model('notes', NotesSchema);