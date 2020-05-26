import { Request, Response } from 'express';

import StoreFileService from '../services/StoreFileService';

class FilesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { filename } = request.file;

    const storeFile = new StoreFileService();

    const confirmation = await storeFile.execute({ filename });

    return response.status(200).json(confirmation);
  }
}

export default FilesController;
