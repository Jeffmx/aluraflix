import styled from "styled-components"
import Formulario from "../../Componentes/Formulario"
import { useState } from "react"

const MainStyled = styled.main`
  display:flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #191919;
  padding: 0 7svw;

  .introducao{
    padding: 72px 0px 42px 0px;
  } & h1{
    font-size: 60px;
  } & p{
    font-size: 20px;
  }
`

const NovoVideo = (props) => {
  return(
    <MainStyled>
      <div className="introducao">
        <h1>NOVO VÍDEO</h1>
        <p>Complete o formulário para criar um novo card de vídeo.</p>
      </div>
      <Formulario cadastrado={props.cadastrado} titulo={'Criar Card'}/>
    </MainStyled>
  )
}

export default NovoVideo
