var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var planSchema = new Schema({
    name: String,
    minutes: String,
    dataCriacao: { type: Date, default: Date.now }
}, {versionKey: false});

planSchema.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});
module.exports = mongoose.model("Plan", planSchema);
