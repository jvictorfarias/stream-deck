import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';

interface Request {
  filename: string;
}

class DeleteFileService {
  public async execute({ filename }: Request): Promise<void> {
    const filePath = path.join(uploadConfig.uploadDirectory, filename);

    try {
      await fs.promises.stat(filePath);
      await fs.promises.unlink(filePath);
    } catch (error) {
      throw new AppError('File does not exists');
    }
  }
}

export default DeleteFileService;
