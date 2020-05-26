import styled, { css } from 'styled-components';

interface DropContainerProps {
  isDragActive: boolean;
  isDragReject: boolean;
}

interface UploadMessageProps {
  type: 'error' | 'success' | 'info'
}

const messageColors = {
  info: '#999',
  error: '#ff5555',
  success: '#50fa7b'
}

const dragActive = css`
  border-color: #50fa7b;

`

const dragReject = css`
  border-color: #ff5555;
`

export const DropContainer = styled.div.attrs({
  ClassName: 'dropzone'
}) <DropContainerProps>`
  border: 4px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

export const UploadMessage = styled.p<UploadMessageProps>`
  display: flex;
  color: ${props => messageColors[props.type]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;
