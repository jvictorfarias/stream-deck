import React from 'react';

import { Container, Content } from './styles';

import Upload from '../../components/Upload';
import FileList from '../../components/FileList';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Upload />
        <FileList />
      </Content>
    </Container>
  );
};

export default Home;
