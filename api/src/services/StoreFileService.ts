import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';

interface Request {
  filename: string;
}

class StoreFileService {
  public async execute({ filename }: Request): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.directory, filename),
      path.resolve(uploadConfig.uploadDirectory, filename),
    );

    return `${process.env.APP_URL}/files/${filename}`;
  }
}

export default StoreFileService;
