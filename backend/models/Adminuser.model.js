import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

const userSchema = new Schema(
    {
        mobileno: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

// don't do arroq here  because it don't have contaxt scope or it needs

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()

})

userSchema.methods.isPasswordCorrect = async function (password) {

    return await bcrypt.compare(password, this.password)

}

userSchema.methods.genrateAccessToken = function () {
    // some debuging = console.log("yha aa gaya")

    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            mobileno: this.mobileno,
            fullname: this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.genrateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const AdminUser = mongoose.model("AdminUser", userSchema)