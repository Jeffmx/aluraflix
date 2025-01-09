import { useState }  from "react"
import ListaSuspensa from "../ListaSuspensa"
import styled     from "styled-components"
import CampoTexto from "../CampoTexto"
import Titulo     from "../Titulo"
import Botao      from "../Botao"

const FormStyled = styled.form`
  padding-top:30px;
  flex-wrap: wrap;
  display:flex;
  gap: 20px;

  .botaoContainer{
    display: flex;
    justify-content:left;
    width:51%

  }
  @media (max-width: 625px) {
    .botaoContainer{
      width:100%;
    }
  }
`
const Formulario = (props) => {
  const [titulo,   setTitulo]   = useState(props.edit ? props.edit.titulo:'')
  const [categoria,setCategoria]= useState(props.edit ? props.edit.categoria: '')
  const [imagem,   setImagem]   = useState(props.edit ? props.edit.imagem: '')
  const [video,    setVideo]    = useState(props.edit ? props.edit.link: '')
  const [desc,     setDesc]     = useState(props.edit ? props.edit.desc: '')

  const salvar = (evento) => {
    evento.preventDefault()
    if(props.cadastrado){
      props.cadastrado({
        titulo,
        categoria,
        imagem,
        video,
        desc
      })
      setTitulo('');
      setCategoria('');
      setImagem('');
      setVideo('');
      setDesc('');
    } else {
      const editVideo={
        titulo: (titulo),
        categoria: (categoria),
        imagem: (imagem),
        video: (video),
        desc: (desc)
      }
      props.editFunction(editVideo);
    }
  }

  const reset = () =>{
    setTitulo('');
    setCategoria('');
    setImagem('');
    setVideo('');
    setDesc('');
  }

  return (
    <FormStyled onSubmit={salvar}>
      <Titulo bold={props.tituloBold} cor={props.tituloCor}>{props.titulo}</Titulo>
      <CampoTexto
        obrigatorio
        label='Título'
        valor={titulo}
        alterado={valor => setTitulo(valor)}
        placeholder='Digite o título do vídeo'
        width={props.editW}
        borderC={props.borderC}
      />
      <ListaSuspensa
        obrigatorio
        label="Categoria"
        valor={categoria}
        alterado={valor => setCategoria(valor)}
        width={props.editW}
        borderC={props.borderC}
      />
      <CampoTexto
        obrigatorio
        label='Imagem'
        valor={imagem}
        alterado={valor => setImagem(valor)}
        placeholder='Cole o link para imagem do vídeo'
        width={props.editW}
        borderC={props.borderC}
      />
      <CampoTexto
        obrigatorio
        label='Vídeo'
        valor={video}
        alterado={valor => setVideo(valor)}
        placeholder='Cole o link do vídeo'
        width={props.editW}
        borderC={props.borderC}
      />
      <CampoTexto
        obrigatorio
        label='Descrição'
        valor={desc}
        alterado={valor => setDesc(valor)}
        placeholder='Adicione uma descrição para o vídeo'
        y={props.y ? props.y : '220px'}
        width={props.editW}
        borderC={props.borderC}
      />
      <div className="botaoContainer">
        <Botao comando='submit'>Salvar</Botao>
        <Botao comando='reset' click={reset}>Limpar</Botao>
      </div>
    </FormStyled>
  )
}

export default Formulario