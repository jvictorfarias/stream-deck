import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';

class ListFilesService {
  public async execute(): Promise<string[]> {
    const files = await fs.promises.readdir(
      path.resolve(uploadConfig.uploadDirectory),
    );

    return files;
  }
}

export default ListFilesService;
