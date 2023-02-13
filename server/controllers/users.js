import mongoose from "mongoose";
import User from '../models/auth.js'

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        const allUsersDetails = []
        allUsers.forEach(users =>{
            allUsersDetails.push({_id: users._id, name: users.name, about: users.about, tag: users.tags, joinedOn: users.joinedON
            })
        })
        res.status(200).json(allUsersDetails)
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
}


export const updateProfile = async (req, res) => {
    const {id: _id} = req.params;
    const {name, about , tags} = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("question unavailable...");
    }

    try {
        const updatedProfile = await User.findByIdAndUpdate(_id, { $set: {'name': name, 'about': about, 'tags': tags}},{new:true})
        res.status(200).json(updatedProfile)
    } catch (error) {
        res.status(405).json({message: error.message})
    }


}