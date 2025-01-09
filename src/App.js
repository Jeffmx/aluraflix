import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho  from "./Componentes/Cabacalho";
import Rodape     from "./Componentes/Rodape";
import NovoVideo  from "./Pages/NovoVideo";
import Inicio     from "./Pages/Inicio";

function App() {
  const [colaboradores, setColaboradores] = useState([
    {
      "titulo": "Isekai Quartet",
      "categoria": "Isekai",
      "imagem": "https://i.redd.it/f6vd12pomb131.jpg",
      "link": "https://www.youtube.com/watch?v=ld7UUwjE-n8",
      "desc": "O botão apareceu do nada. Não havia nenhuma indicação para NÃO apertar... Então a solução é óbvia, não é mesmo? É uma armadilha ou o começo de algo novo e empolgante? O elenco de Re:Zero, Overlord, Konosuba e The Saga of Tanya the Evil descobrirá quando eles saírem dos seus mundos para ficarem presos... em uma sala de aula?"
    },
    {
      "titulo": "Made in Abyss",
      "categoria": "Fantasia",
      "imagem": "https://i.ytimg.com/vi/i6T_2x_nCbk/maxresdefault.jpg",
      "link": "https://www.youtube.com/watch?v=EJYKsY0Vcts",
      "desc": "Abyss, é assim que é conhecido um grande conjunto de carvernas inexplorado pela humanidade. Anos se passaram e ninguém conseguia desvendar o mistério acerca deste local, até que em Oosu, uma cidade à beira do abismo, surge alguém com a promessa de explorar a região. Trata-se de Riko, uma corajosa garotinha órfã."
    },
    {
      "titulo": "Tengen Toppa Gurren Lagann",
      "categoria": "Mecha",
      "imagem": "https://i.pinimg.com/originals/3e/f3/70/3ef370ced117c7b63014253c9f70e2ef.jpg",
      "link": "https://www.youtube.com/watch?v=5EXFilTUiko",
      "desc": "Em Tengen Toppa Gurren Lagann, um garoto que só conhece o subterrâneo encontra uma pequeno amuleto que muda não só sua vida, mas o mundo como conhece. No anime, Simon é um menino que vive embaixo da terra e passa seus dias escavando túneis para conseguir comida e expandir a vila que mora. Ao lado de seu amigo Kamina, que sonha em conhecer a superfície, ele encontra um artefato em forma de broca que acaba abrindo caminhos que ele nunca teria imaginado."
    }
  ])
  
  const deletar = (video) => {    
    setColaboradores((colaboradoresAtuais) =>
      colaboradoresAtuais.filter((alvo) => alvo.titulo !== video.titulo)
    );
  };
  
  const editar = (video) =>{
    const videoEditado = colaboradores.map(colaborador => {
      if(video.titulo === colaborador.titulo){
        console.log(video);
          return{
            ...colaborador,
            titulo: video.titulo,
            categoria: video.categoria,
            imagem: video.imagem,
            link: video.video,
            desc: video.desc,
          }
      } else {
        return colaborador;
      };
    })
    setColaboradores(videoEditado);
  }

  const adicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <BrowserRouter>
      <Cabecalho/>
      <Routes>
        <Route path="/" element={<Inicio colaboradores={colaboradores} edit={editar} del={deletar}/>}></Route>
        <Route path="/novo-video" element={<NovoVideo cadastrado={colaborador => adicionado(colaborador)}/>}></Route>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
