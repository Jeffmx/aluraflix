import styled from "styled-components"

const BotaoStyled = styled.button`
  width: 180px;
  height: 54px;
  transition: .3s;
  background-color: transparent;

  border: 3px solid #F5F5F5;
  border-radius:15px;
  margin-right: 30px;
  cursor: pointer;

  font-family: Source Sans Pro, sans-serif;
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  text-align: center;
  
  &:hover{
    border-color: #2271D1;
    color: #2271D1;
  }
`

const Botao = ({ comando, children, click }) => {

  return (
    <BotaoStyled type={comando} onClick={click}>
      {children}
    </BotaoStyled>
  )
}

export default Botao