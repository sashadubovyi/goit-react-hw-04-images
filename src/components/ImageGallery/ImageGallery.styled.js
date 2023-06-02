import styled from 'styled-components';

export const ImageList = styled.ul`
  width: 1200px;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const MoreBtn = styled.button`
  margin-bottom: 24px;
  cursor: pointer;
  margin-left: 20px;
  height: 30px;
  background-color: #212121;
  font-family: monospace;
  letter-spacing: 1px;
  caret-color: #fa4753;
  color: #fa4753;
  box-shadow: 4px 4px 10px #070707;
  transition: 0.3s linear;
  border: 2px solid #fa4753;

  &:hover {
    border-top: 5px solid #fa4753;
    border-bottom: 5px solid #fa4753;
  }
`;

export const Error = styled.p`
  margin-top: 10px;
  padding: 2px;
  text-align: center;
  font-family: monospace;
  letter-spacing: 1px;
  color: #fa4753;
  font-size: 15px;
  transition: 0.3s linear;
  border: 1px solid #fa4753;
  animation: blink-1 0.6s both;

  @keyframes blink-1 {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }
`;
