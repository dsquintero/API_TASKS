const _mongoose =  require('mongoose')

const fields = {
    firstname: String,
    lastname: String,
    email:{ type:String, unique:true },
    status: Boolean,
    createdAt: Date,
    updatedAt: Date
}

module.exports = _mongoose.model('user', fields)