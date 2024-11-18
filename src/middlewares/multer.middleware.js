import multer from "multer";

const storage = multer.diskStorage(
    {
        destination: function(req, file, cb) {
            cb(null, "./public/temp")
        },
        filename: function(req, file, cb){
            cb(null, file.originalname)
        }
    }
);

export const upload = multer({
    storage,
    // limit file size: 10MB
    limits: { fileSize: 10000000 }
})