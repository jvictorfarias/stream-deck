import path from 'path';
import multer, { Options } from 'multer';
import AppError from '../errors/AppError';

interface UploadConfig extends Options {
  directory: string;
  uploadDirectory: string;
}

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');
const uploadFolder = path.resolve(__dirname, '..', '..', 'tmp', 'uploads');

export default {
  directory: tmpFolder,
  uploadDirectory: uploadFolder,

  fileFilter: (_, file, callback) => {
    const allowedMimes = [
      'audio/mpeg',
      'audio/mp4',
      'audio/x-aiff',
      'audio/ogg',
      'audio/vnd.wav',
    ];

    if (allowedMimes.includes(file.mimetype)) callback(null, true);
    else callback(new AppError('Invalid file type'));
  },
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(_, file, callback) {
      return callback(null, file.originalname);
    },
  }),
} as UploadConfig;
