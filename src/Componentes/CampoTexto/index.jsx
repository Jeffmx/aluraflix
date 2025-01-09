import styled from "styled-components";

const CampoStyled = styled.section`
  margin: 15px 0;
  display: grid;
  align-content:flex-start;
  width: ${props => props.$w ? props.$w : '48%'};

  @media (max-width: 625px) {
    width:100%;
  }
  
  label{
    display: block;
    text-align:left;
    margin-bottom: 8px;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }
`
  const TextStyled = styled.textarea`
  resize: none;
  background-color: transparent;
  font-size: 18px;
  padding: 18px 9px;
  box-sizing: border-box;
  border: 3px solid ${props=> props.$borderC ? props.$borderC : '#262626'};
  border-radius: 20px;
  height: ${props =>props.$y ? props.$y : '65px'};
  outline:none;
`

const CampoTexto = (vars) => {
  const digitado = (evento) => {
    vars.alterado(evento.target.value)
  }

  return (
    <CampoStyled $label={vars.label} $W={vars.width}>
      <label>{vars.label}</label>
      <TextStyled $y={vars.y} $borderC={vars.borderC}
        value={vars.valor}
        onChange={digitado}
        required={vars.obrigatorio}
        placeholder={vars.placeholder}>
      </TextStyled>
    </CampoStyled>
  )
}

export default CampoTexto;