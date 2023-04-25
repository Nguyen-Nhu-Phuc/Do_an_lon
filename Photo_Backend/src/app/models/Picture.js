const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Picture = new mongoose.Schema(
    {
        ID: { type: String, required: true, unique: true },
        keywords: { type: String, required: true },
        platform: {type: String, required: true},
        address: {type: String, required: true}
    },
    {
        collection:"pictures"
    },
);

// mongoose.set('strictQuery', false)
// // Add plugins
// mongoose.plugin(slug);
// Picture.plugin(mongooseDelete, {
//     deletedAt: true,
//     overrideMethods: 'all',
// });

module.exports = mongoose.model('Picture', Picture);
