import styled from 'styled-components'
import { Form } from 'antd'

export const ChatHeader = styled.div`
  border: 1px solid rgb(235, 237, 240);
  padding: 10px;

  h4 {
    font-weight: 600;
  }
`

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 70vh;
`

export const ChatMessage = styled.div`
  font-size: 14px;
  padding: 6px 16px;
  border-radius: 10px;
  color: #000;
  background-color: #e6e7ec;
  max-width: 600px;
  width: fit-content;
  position: relative;
  margin: 15px 0;
  word-break: break-all;

  &.own {
    color: #fff;
    margin-left: auto;
    background-color: #1890ff;
  }
`

export const ChatForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr auto;
  position: absolute;
  bottom: 20px;
  width: calc(100% - 40px);

  .ant-form-item {
    margin-bottom: 0;
  }

  textarea {
    resize: none;
    overflow-y: scroll;
  }
`