import multer from 'multer';
import timestamp from 'time-stamp';
import path from 'path'

const storage=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,timestamp()+path.extname(file.originalname));

    }
})

export default multer({storage});