import styled from "styled-components"
import categorias from "../../json/categorias.json"
import VideosContainer from "../../Componentes/VideosContainer"

const Banner = styled.figure`
  background-image:${props => `url(${props.$bg})`};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::after{
    content:'';
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    background-color: #000000;
    opacity: .6;
  }

  display: flex;
  justify-content:center;
  align-items:center;
  gap: 50px;

  max-width: 100%;
  padding: 0 40px;
  height: 80svh;

  @media (max-width: 760px) {
    display:none;
  }
  
  img, div{
    z-index: 1;
    max-width: 100%;
    width: 665px;
  }
  
    img{
      height: 50%;    
      border-radius: 15px;
      border: 4px solid ${props => props.$color};
      width: min( 60% ,665px);
    }

  h2{
  font-size: 46px;
  font-weight: 400;
  line-height: 53.91px;
  text-align: left;
  padding-bottom:9px;
  }

  p{
  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
  text-align: left;
  }
`

const CategoriaTitulo = styled.h1`
  display: inline;
  font-size: 2rem;
  font-weight: 800;
  height: 72px;
  text-align: center;
  align-items: center;

  background-color: ${props=> props.$color};
  border-radius: 15px;
  padding: 5px 15px;
  margin-bottom: 40px;
`

const Vazio = styled.main`
  padding-left:30px;
  font-size: 63px;
  padding: 31.6svh 30px;
`

const Inicio = ({colaboradores, del, edit}) => {  
  if (colaboradores.length === 0) {
    return (<Vazio>
      Nenhum video no momento...
      </Vazio>)
  }

  let videoRandom =colaboradores[Math.floor(Math.random() * colaboradores.length)]
  let corCategoria = categorias.find(categoria => categoria.nome === videoRandom.categoria).fundos

  return (
    <main>
      <Banner $bg={videoRandom.imagem} $color={corCategoria}>
        <div>
          <CategoriaTitulo $color={corCategoria}>{videoRandom.categoria}</CategoriaTitulo>
          <h2>{videoRandom.titulo}</h2>
          <p>{videoRandom.desc}</p>
        </div>
        <img src={videoRandom.imagem}></img>
      </Banner>
      {categorias.map(categoria=><VideosContainer
        key={categoria.nome}
        nome={categoria.nome}
        corTag={categoria.fundos}
        videos={colaboradores.filter(colaborador=> colaborador.categoria===categoria.nome)}
        del={del}
        edit={edit}
      />)}
    </main>
  )
}

export default Inicio