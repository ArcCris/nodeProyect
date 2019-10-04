const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user : String,
    menssage: {
        type: String,
        required: true,
    },
    date : Date,
});


const model = mongoose.model("message", mySchema);

module.exports = model;