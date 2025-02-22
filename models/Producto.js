const mongoose = require('mongoose');

const ProductosSchema = mongoose.Schema({
    nombre: {
    type : String,
    required: true,
    trim: true
    },
    existencia:{
        type: Number,
        required : true,
        trim: true
    },
     precio:{
         type:Number,
         default: Date.now()
     },
        creado:{
        type: Date,
        default: Date.now()
}
});



module.exports = mongoose.model('Producto' , ProductosSchema);