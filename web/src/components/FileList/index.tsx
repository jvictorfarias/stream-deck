import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import { MdCheckCircle, MdError, MdMusicNote, MdPlayArrow } from 'react-icons/md';

import { Container, FileInfo } from './styles';

const FileList: React.FC = () => {
  return (
    <Container>
      <li>
        <FileInfo>
          <MdMusicNote size={48} color="#ff79c6" />
          <div>
            <strong>Teste.mp3</strong>
            <button onClick={() => { }}>Excluir</button>
          </div>
        </FileInfo>
        <div>
          <CircularProgressbar
            value={10}
            styles={{
              root: { width: 24 },
              path: { stroke: '#44475a' }
            }}
            strokeWidth={10}
          />

          <MdCheckCircle size={24} color="#50fa7b" />
          <MdError size={24} color="#ff5555" />
          <button type="button">
            <MdPlayArrow size={64} color="#ffb86c" />
          </button>
        </div>
      </li>
    </Container>
  )
}

export default FileList;
