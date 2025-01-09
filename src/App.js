import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho  from "./Componentes/Cabacalho";
import Rodape     from "./Componentes/Rodape";
import NovoVideo  from "./Pages/NovoVideo";
import Inicio     from "./Pages/Inicio";

function App() {
  const [colaboradores, setColaboradores] = useState([
    {
      "titulo": "anon",
      "categoria": "UX e Design",
      "imagem": "https://i.redd.it/f6vd12pomb131.jpg",
      "link": "https://www.youtube.com/watch?v=FaxI5oNATLE",
      "desc": "inhae"
    },
    {
      "titulo": "ado",
      "categoria": "Programação",
      "imagem": "https://preview.redd.it/wdfgm849st791.png?width=1080&crop=smart&auto=webp&s=b5894a54e0b48a9a935de0b96f2a748eec341950",
      "link": "https://www.youtube.com/watch?v=5ndo4sBLOPY",
      "desc": "inhae"
    },
    {
      "titulo": "Tengen Toppa Gurren Lagann",
      "categoria": "Mobile",
      "imagem": "https://i.pinimg.com/originals/3e/f3/70/3ef370ced117c7b63014253c9f70e2ef.jpg",
      "link": "https://www.youtube.com/watch?v=5EXFilTUiko",
      "desc": "Simplesmente o melhor anime ja feito no cap fr fr"
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
