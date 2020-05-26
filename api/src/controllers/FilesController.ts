import { Request, Response } from 'express';

import StoreFileService from '../services/StoreFileService';
import DeleteFileService from '../services/DeleteFileService';
import ListFilesService from '../services/ListFilesService';

interface FileRequest extends Request {
  query: {
    filename: string;
  };
}

class FilesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { filename } = request.file;

    const storeFile = new StoreFileService();

    const confirmation = await storeFile.execute({ filename });

    return response.status(200).json(confirmation);
  }

  public async delete(
    request: FileRequest,
    response: Response,
  ): Promise<Response> {
    const { filename } = request.query;

    const deleteFile = new DeleteFileService();

    await deleteFile.execute({ filename });

    return response.status(204).json();
  }

  public async index(_request: Request, response: Response): Promise<Response> {
    const listFiles = new ListFilesService();

    const files = await listFiles.execute();

    return response.status(200).json(files);
  }
}

export default FilesController;
