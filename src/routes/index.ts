import { TokenValidation } from './../libs/validateToken';
import {Router} from 'express';
const router=Router();


import {crearImagen, getImagenes}from '../controllers/imagen.controller'

import multer from '../libs/multer'

router.route('/imagenes')
    
    .post(multer.single('image'), TokenValidation,crearImagen)
    .get(getImagenes)

export default router;