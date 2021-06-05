import monogoose from 'mongoose';


const userSchema = new monogoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true }
}, {
    timestamps: true
})

const User = monogoose.model("User", userSchema);
export default User;