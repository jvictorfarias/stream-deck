import path from 'path';

import sound from 'sound-play';
import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';

interface Request {
  filename: string;
}

class PlayMusicService {
  public async execute({ filename }: Request): Promise<void> {
    const filePath = path.join(uploadConfig.uploadDirectory, filename);

    if (!filePath) {
      throw new AppError('File does not exists');
    }

    sound.play(filePath).then(() => console.log('done'));
  }
}

export default PlayMusicService;
