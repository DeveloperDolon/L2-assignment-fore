import { Request } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
  filename: function (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename) => void,
  ) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export default upload;
