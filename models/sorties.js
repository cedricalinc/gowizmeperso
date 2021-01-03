var mongoose = require('./connection')

var sortieSchema = mongoose.Schema({
    evenementLie: [{ type: mongoose.Schema.Types.ObjectId, ref: 'evenements' }],
    organisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    nomSortie: String,
    image: String,
    adresse: String,
    cp: String,
    date_debut: String,
    date_fin: String,
    duree: Number,
    type: String,
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
})


var sortieModel = mongoose.model('sorties', sortieSchema)

module.exports = sortieModel;