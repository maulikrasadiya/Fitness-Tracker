const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Fitness_Tracker_App').then(() => {
    console.log('Database Connect Succesfully');
}).catch((err) => {
    console.log('Database Connect Errer',err);
})

module.exports = mongoose;