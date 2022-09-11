const mongoose = require('mongoose');

const uri = ``;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const MovieSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type: String,  
        unique: true,
    },
    produtora: String,
    duracao: String,
    ano: String,
});

const MovieModel = mongoose.model('MovieModel', MovieSchema);

module.exports = {
    MovieModel,
};