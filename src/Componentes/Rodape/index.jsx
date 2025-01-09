import styled from "styled-components"
import logo from '../../assets/aluraflix.png'

const RodapeStyled = styled.footer`
  background-color: #000;
  display: flex;
  padding: 42px;
  margin-top:72px;
  justify-content: center;
  box-shadow: 0px -5px 30px 10px #2271D1B2;
`

const Rodape = () => {
  return(
    <RodapeStyled>
      <img src={logo} height={'40px'}/>
    </RodapeStyled>
  )
}

export default Rodape