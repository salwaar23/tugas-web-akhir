import Users from "../models/UserModels.js";
import argon2 from "argon2";

export const getUsers = async(req, res) =>{
    try {
        const response = await Users.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUsersById = async(req, res) => {
    try {
        const response = await Users.findOne({
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createUsers = async(req, res) => {
    const {username, password} = req.body;
    const hashPassword = await argon2.hash(password);
    try {
        await Users.create({
            username: username,
            password: hashPassword
        });
        res.status(201).json({msg: "Register Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const UpdateUsers = (req, res) => {

}

export const deleteUsers = (req, res) => {
    
}