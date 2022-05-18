const { default: mongoose} = require('mongoose');
const _mongoose =  require('mongoose');
const {Schema} = _mongoose;

const fields = {
    title: String,
    description: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    complete: Boolean,
    createdAt: Date,
    updatedAt: Date    
}

module.exports = _mongoose.model('task', fields)