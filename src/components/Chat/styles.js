import styled from 'styled-components'
import { Form } from 'antd'

export const ChatHeader = styled.div`
  border: 1px solid rgb(235, 237, 240);
  padding: 10px;
  display: flex;
  align-items: center;

  h4 {
    font-weight: 600;
    margin-bottom: 0;
  }
`

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: calc(100% - 80px);
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