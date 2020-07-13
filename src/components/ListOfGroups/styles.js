import styled from 'styled-components'
import { Button } from 'antd'

export const ListUl = styled.ul`
  padding-left: 0;
`

export const ListItem = styled.li`
  list-style: none;
  border: 1px solid rgb(235, 237, 240);
  padding: 10px;
  cursor: pointer;
`

export const StyledButton = styled(Button)`
  margin-bottom: 20px;
  width: 100%;
`