import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';


export const Container = styled.ul`
  list-style: none;
  margin-top: 20px;

  li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;

    & + li{
      margin-top: 16px;
    }

    > div{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button{
      background: transparent;
      border: 0;
    }
  }

`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;


  div{
    display: flex;
    flex-direction: column;

    button{
      border: 0;
      background: transparent;
      color: #ff5555;
    }
  }
`;

