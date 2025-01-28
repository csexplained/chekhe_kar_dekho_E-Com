import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true, // Removes leading/trailing whitespace
    minlength: 3,
    maxlength: 100,
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Validates phone number format (international and local)
        return /^\+?[1-9]\d{1,14}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true, // Prevent duplicate emails
    lowercase: true,
    trim: true,
    validate: {
      validator: function (v) {
        // Validates email format
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`,
    },
  },
  message: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 500,
  },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

 const Message= mongoose.model('Message', MessageSchema);
 export default Message;
