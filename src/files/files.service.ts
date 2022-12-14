import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static');
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.join(filePath, fileName), file?.buffer);
      return fileName;
    } catch (e) {
        console.log(file)
        console.log(e.message)
      throw new HttpException(
        'Error with write file',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}