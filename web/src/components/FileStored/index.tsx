import React, { HTMLAttributes, useCallback } from 'react';

import { MdLibraryMusic, MdPlayArrow } from 'react-icons/md';

import { Container, FileInfo } from './styles';
import api from '../../services/api';

interface FileStoreProps extends HTMLAttributes<HTMLUListElement> {
  files: string[]
  onDelete(name: string): void
}


const FileStored: React.FC<FileStoreProps> = ({ files, onDelete }) => {
  const handlePlay = useCallback((name: string) => {
    api.get('/files/play', {
      params: {
        filename: name
      }
    })
  }, [])

  return (
    <Container>
      {files.map(file => (
        <li key={file}>
          <FileInfo>
            <MdLibraryMusic size={24} color="#ff79c6" />
            <div>
              <strong>{file}</strong>
              <button onClick={() => onDelete(file)} > Excluir</button>
            </div>
          </FileInfo>
          <div>
            <button type="button" onClick={() => handlePlay(file)}>
              <MdPlayArrow size={64} color="#ffb86c" />
            </button>
          </div>
        </li>
      ))}
    </Container>
  )
}

export default FileStored;
