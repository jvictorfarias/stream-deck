import React, { useState, useCallback, useEffect } from 'react';

import { uniqueId } from 'lodash';
import filesize from 'filesize';

import { Container, Content } from './styles';

import Upload from '../../components/Upload';
import FileList from '../../components/FileList';

import api from '../../services/api';
import FileStored from '../../components/FileStored';

export interface UploadedFile {
  file: File | string;
  id: string;
  name: string;
  readableSize: string;
  progress: number;
  uploaded: boolean;
  error: boolean;
  url: string | null;
}

const Home: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [storedFiles, setStoredFiles] = useState<string[]>([])

  useEffect(() => {
    api.get('/files').then(response => {
      setStoredFiles(response.data)
    })

  }, [storedFiles.length])

  useEffect(() => {

    uploadedFiles &&
      uploadedFiles.forEach(uploadedFile => processUpload(uploadedFile))

  }, [uploadedFiles.length])

  const handleUpload = useCallback((files: File[]) => {
    const upload: UploadedFile[] = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }))

    console.log(upload)

    setUploadedFiles([...uploadedFiles, ...upload])


  }, [uploadedFiles])

  const updateFile = useCallback((id: string, data: any) => {
    setUploadedFiles(uploadedFiles.map(uploadedFile => {
      return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile
    }))
  }, [uploadedFiles])

  const processUpload = useCallback((file: UploadedFile) => {
    const data = new FormData();

    data.append('file', file.file, file.name);

    api.post('/files', data, {
      onUploadProgress: event => {
        const progress = Math.round((event.loaded * 100) / event.total)
        updateFile(file.id, {
          progress,
        })
      }
    })
  }, [updateFile])

  const handleDelete = useCallback(async (name: string) => {
    await api.delete('/files', {
      params: {
        filename: name
      }
    })
    setUploadedFiles(uploadedFiles.filter(uploadedFile => uploadedFile.name !== name))
  }, [])

  const handleStoredDelete = useCallback(async (name: string) => {
    await api.delete('/files', {
      params: {
        filename: name
      }
    })

    const files = storedFiles.filter(storedFile => storedFile !== name);

    setStoredFiles(files)
  }, [])

  return (
    <Container>
      <Content>
        <Upload onUpload={handleUpload} />
        {!!uploadedFiles.length && (
          <FileList files={uploadedFiles} onDelete={handleDelete} />
        )}

        {storedFiles && <FileStored files={storedFiles} onDelete={handleStoredDelete} />}
      </Content>
    </Container>
  );
};

export default Home;
