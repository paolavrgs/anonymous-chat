import styled from 'styled-components'

export const ListUl = styled.ul`
  padding-left: 0;
`

export const ListItem = styled.li`
  list-style: none;
  border: 1px solid rgb(235, 237, 240);
  padding: 10px;
  cursor: pointer;
  margin-bottom: 5px;

  &.active {
    border-color: #238df9;
    font-weight: bold;
    color: #238df9;
  }
`