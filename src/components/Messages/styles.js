import styled from 'styled-components'

export const ChatMessage = styled.div`
  font-size: 14px;
  padding: 6px 16px;
  border-radius: 10px;
  color: #000;
  background-color: #e6e7ec;
  max-width: 600px;
  width: fit-content;
  position: relative;
  margin: 5px 0;
  word-break: break-all;

  &.own {
    color: #fff;
    margin-left: auto;
    background-color: #1890ff;
  }
`