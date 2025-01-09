import styled from "styled-components";
import itens from '../../json/categorias.json'

const CampoTime = styled.div`
  margin: 15px 0;
  display: grid;
  align-content:flex-start;
  width: 48%;

  @media (max-width: 625px) {
    width:100%;
  }
`

const LabelStyled = styled.label`
  display: block;
  text-align:left;
  margin-bottom: 8px;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`

const SelectStyled = styled.select`
  background-color:${props=> props.$borderC ? '#03122f' : '#191919'};
  font-size: 18px;
  padding: 18px 9px;
  box-sizing: border-box;
  border: 3px solid ${props=> props.$borderC ? props.$borderC : '#262626'};
  border-radius: 20px;
  appearance: none;

  option{
    color:#a5a5a5;
  }
`

const ListaSuspensa = (props) => {
  return (
    <CampoTime>
      <LabelStyled>{props.label}</LabelStyled>
      <SelectStyled onChange={evento => props.alterado(evento.target.value)} 
        required={props.required} 
        value={props.valor}
        $borderC={props.borderC}
        >
        <option></option>
        {itens.map(item => <option key={item.nome}>{item.nome}</option>)}
      </SelectStyled>
    </CampoTime>
  )
}

export default ListaSuspensa