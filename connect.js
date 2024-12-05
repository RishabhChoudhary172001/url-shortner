const mongoose = require('mongoose');

const connectToMongoDB = async (url) => {
    try {
        await mongoose.connect(url, {});
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

module.exports = {
    connectToMongoDB
}

