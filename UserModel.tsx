import mongoose from 'mongoose';

const { Schema } = mongoose;

interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthday: string;
};

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    birthday: { type: String, required: true },
});

const User = mongoose.model<IUser>('User', UserSchema);

export { User, IUser };