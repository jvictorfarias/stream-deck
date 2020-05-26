import React, { useCallback } from 'react';
import Dropzone, { DropzoneInputProps } from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

interface UploadProps extends DropzoneInputProps {
  onUpload(files: any): void
}

const Upload: React.FC<UploadProps> = ({ onUpload }) => {

  const renderDragMessage = useCallback((isDragActive: boolean, isDragReject: boolean) => {
    if (!isDragActive) return <UploadMessage type="info">Arraste arquivos aqui!</UploadMessage>
    if (isDragReject) return <UploadMessage type="error">Arquivo não suportado!</UploadMessage>

    return <UploadMessage type="success">Solte os arquivos aqui!</UploadMessage>
  }, [])

  return (
    <Dropzone accept="audio/*" onDropAccepted={onUpload}>
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
