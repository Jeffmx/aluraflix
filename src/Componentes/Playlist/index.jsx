import { useState } from "react";
import styled from "styled-components";
import deleteSVG  from "../../assets/delete.svg"
import editSVG    from "../../assets/edit.svg"
import Edit       from "../EditarVideo";
import Formulario from "../Formulario";

const Colaborador =styled.div`
  background-color: #000;
  border: 5px solid ${props => props.$cor};
  border-radius: 20px;

  &, .thumb{
    width: min(432px, 77vw);
  }

  .thumb {
    height:min(250px, 20svh);
    border-radius: 15px 15px 0px 0px;
  }
`
const Rodape = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  height:60px;
  gap:40px;

  background: #000000;
  border-radius: 0px 0px 20px 20px;
`
const Icone = styled.button`
  display:flex;
  align-items: center;
  background-color: transparent;
  height:30px;
  border:none;
  cursor: pointer;

  img{
    width:25px;
    height:25px;
    top:0;
    padding-right: 5px;
  }
  
  p{
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }
`

const Playlist = ({ video, cor, deletar, editFunction }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOverlay = () =>{    
    setIsOpen(!isOpen);
  }

  return (
    <>
    <Colaborador $cor={cor}>
      <a href={video.link} target="blank">
        <img className="thumb" src={video.imagem} alt={video.nome}/>
      </a>
      <Rodape>
        <Icone onClick={()=>deletar(video)}>
          <img src={deleteSVG} />
          <p>DELETAR</p>
        </Icone>
        <Icone onClick={toggleOverlay}>
          <img src={editSVG} />
          <p>EDITAR</p>
        </Icone>
      </Rodape>
    </Colaborador>
    <Edit isOpen={isOpen} onClose={toggleOverlay}>
      <Formulario 
        titulo={'Editar card:'} 
        tituloCor={'#2271d1'}
        tituloBold={900}
        edit={video} y='112px' 
        editW='100%'
        borderC='#2271D1'
        editFunction={editFunction}
      />
    </Edit>
    </>
  )
}

export default Playlist