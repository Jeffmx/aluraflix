import styled from "styled-components";

const TituloStyled = styled.h1`
  display:flex;
  font-family: Source Sans Pro, sans-serif;
  font-size: 36px;
  font-weight: ${props=> props.$bold ? props.$bold : 'normal'};
  line-height: 24px;
  text-align: left;
  align-items: center;
  height: 90px;
  width:100%;

  border-width: 3px 0px;
  border-style: solid;
  border-color: ${props=> props.$cor ? props.$cor : '#262626'};
`

const Titulo = ({cor, bold, children}) =>{  
  return(
    <TituloStyled $bold={bold} $cor={cor}>
      {children}
    </TituloStyled>
  )
}

export default Titulo