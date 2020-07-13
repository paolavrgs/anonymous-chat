import styled from "styled-components"
import { Layout } from 'antd'
const { Header } = Layout

export const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
`

export const Nickname = styled.div`
  padding: 5px;
  color: #fff;
  font-size: 20px;
`

export const Logo = styled.img`
  width: 100px;
  object-fit: cover;
  height: 100%;
`