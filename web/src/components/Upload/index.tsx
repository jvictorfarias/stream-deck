import React, { useCallback } from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

const Upload: React.FC = () => {

  const renderDragMessage = useCallback((isDragActive: boolean, isDragReject: boolean) => {
    if (!isDragActive) return <UploadMessage type="info">Arraste arquivos aqui!</UploadMessage>
    if (isDragReject) return <UploadMessage type="error">Arquivo não suportado!</UploadMessage>

    return <UploadMessage type="success">Solte os arquivos aqui!</UploadMessage>
  }, [])

  return (
    <Dropzone accept="audio/*" onDropAccepted={() => { }}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer {...getRootProps()} isDragActive={isDragActive}
          isDragReject={isDragReject}>
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  )
};

export default Upload;
