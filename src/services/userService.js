//import { removeUser,createUser,updateuser,findAll, findByID } from "../models/userModel.js";
import *as Usermodel from "../models/userModel.js";

const getAll = async () => {
    return await Usermodel.findAll()

}

const getById= async(id) => {
    const user = await Usermodel.findById(id);
    if (!user) throw new Error (`El usuario con id: ${id} no existe `)
        return user;
}
const create = async({name, email})=>{
    if(!name ) throw new Error ("El campo name es requerido")
    if(!email ) throw new Error ("El campo email es requerido")
        return await Usermodel.createUser({name,email});
}
const update = async (id, data ) => {
    await UserModel.findById(id);
    return UserModel.updateUser(id,data)
}

const remove = async(id,data) =>{
    const deleted= Usermodel.removeUser(id)
    if (!deleted) throw new Error(`ID : ${id} Usuario no encontrado`)
    return {
        message= `ID: ${id} Usuario eliminado`
    }

}