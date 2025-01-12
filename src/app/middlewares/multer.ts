import { Request } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
  filename: function (
    req: Request,
    // eslint-disable-next-line no-undef
    file: Express.Multer.File,
    // eslint-disable-next-line no-unused-vars
    cb: (error: Error | null, filename: string) => void,
  ) {
    return cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export default upload;
