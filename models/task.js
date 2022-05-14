const { default: mongoose} = require('mongoose');
const _mongoose =  require('mongoose');
const {Schema} = _mongoose;

const fields = {
    description: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    createdAt: Date,
    updatedAt: Date    
}

module.exports = _mongoose.model('task', fields)