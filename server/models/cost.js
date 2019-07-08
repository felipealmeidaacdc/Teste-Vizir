var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var costSchema = new Schema({
    source_code: String, 
    target_code: String,
    value: String,
    dataCriacao: { type: Date, default: Date.now }
}, {versionKey: false});

costSchema.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model("Cost", costSchema);
