import {Request,Response} from 'express';

export function getImagenes(req:Request, res:Response){


}

export function crearImagen(req:Request,res:Response){

    console.log('guardando imagen')
    
    

    return res.json({
        message:'imagen guardada en '+ req.file.path
    })
}