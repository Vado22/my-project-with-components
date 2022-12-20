import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
});

export const User = mongoose.model('User', userSchema);

