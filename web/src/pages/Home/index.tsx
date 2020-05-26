import React from 'react';

import { Container, Content } from './styles';

import Upload from '../../components/Upload';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Upload />
      </Content>
    </Container>
  );
};

export default Home;
