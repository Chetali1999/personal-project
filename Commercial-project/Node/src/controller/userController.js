
// const asyncHandler = require('../utils/asyncHandler')
// const BaseError = require('../utils/baseError')
// const { response, generateToken } = require('../utils/utils')
// const jwt = require('jsonwebtoken');

// const dotenv = require('dotenv');
// dotenv.config('./config.env');

const User = require('../models/userModel')

// user Sign Up page
exports.SignUp = async (req, res) => {
    try {
        const user = {
            email,
            password,
            userName,
            role,
            dob
        } = req.body;

        if (!email && !password) {
            return res.status(400).json({ message: 'please provide input' });
        }
        const newUser = await User.create(user)
        if (!newUser) {
            return res.status(400).json({ message: 'User failed to create' });

        }
        res.status(201).json({ message: 'User created successfully', data: newUser });

    } catch (error) {
        error.message(error)
    }

};

// signIn
exports.SignIn = async (req, res) => {
    try {
        const credentials = req.body
        const { email, password } = credentials
        if (!credentials) {
            return res.status(400).json({ message: 'Provide the valid email or password' });
        }
        const user = await User.findOne({ email, isActive: true }).lean();
        if (!user) {
            return res.status(400).json({ message: 'Provide valid email and/or user is inactive' });
        }
        const providedPassword = user?.password;
        if (!providedPassword === password) {

            return res.status(400).json({ message: 'password is incorrect' });
        }
        else {
            // let token = generateToken(user._id);
            res.status(201).json({ message: 'User login has done successfully', data: user });
        }
    } catch (error) {
        error.message(error)

    }

}


exports.UserDetails = async (req, res) => {
    try {
        const userId = req.params.userId

        if (!userId) {
            return res.status(400).json({ message: 'please provide valid userID' });
        }
        const user = await User.findById(userId).lean();
        if (!user) {
            return res.status(400).json({ message: 'Provided user is inactive' });
        }
        res.status(201).json({ message: 'User created successfully', data: user });

    } catch (error) {
        error.message(error)
    }

};

