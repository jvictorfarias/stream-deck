import React, { HtmlHTMLAttributes } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { UploadedFile } from '../../pages/Home';

import { MdCheckCircle, MdError, MdMusicNote, MdPlayArrow } from 'react-icons/md';

import { Container, FileInfo } from './styles';

interface FileListProps extends HtmlHTMLAttributes<HTMLUListElement> {
  files: UploadedFile[]
  onDelete(name: string): void
}

const FileList: React.FC<FileListProps> = ({ files, onDelete }) => {
  return (
    <Container>
      {files.map(uploadedFile => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <MdMusicNote size={48} color="#ff79c6" />
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>{uploadedFile.readableSize}</span>
              <button onClick={() => onDelete(uploadedFile.name)}>Excluir</button>
            </div>
          </FileInfo>
          <div>
            {!uploadedFile.uploaded && !uploadedFile.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: '#44475a' }
                }}
                strokeWidth={10}
                value={uploadedFile.progress}
              />
            )}

            {uploadedFile.uploaded && (
              <MdCheckCircle size={24} color="#50fa7b" />
            )}
            {uploadedFile.error && (
              <MdError size={24} color="#ff5555" />
            )}

          </div>
        </li>
      ))}
    </Container>
  )
}

export default FileList;
