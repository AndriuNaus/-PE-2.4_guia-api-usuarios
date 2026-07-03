import {Router} from "expres";
import *as userServie from "../services/userService"

const router = Router();

router.get('/', async (req, res, _next) =>{
    try{
        const user = await userService.getAll();
        res.status(200).json()
    } catch(error){
        _next(error)
    }
})

router.get('/:id', async (req, res, _next) =>{
    try{
        const user = await userService.getbyId(req.params.id)
        res.status(200).json({
            data:user
        })
    }catch (error){
        _next(error);
    }

})

router.get('/', async (req, res, _next) =>{
    try{
        const user = await userService.create(req.body);
        res.status(201).json({data:user })
    } catch(error){
        _next(error)
    }
})
// en el get para accedera a la info es el .params 
//y para el pos es el req.body