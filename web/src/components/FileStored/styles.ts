import styled from 'styled-components';


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

  svg{
    margin-right: 15px;
  }

  strong{
    width: 100%;
    max-width: 240px;
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    button{
      margin: 5px;
      border: 0;
      background: transparent;
      color: #ff5555;
    }
  }
`;

