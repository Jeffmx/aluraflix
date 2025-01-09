import styled from "styled-components";
import Playlist from "../Playlist";

const Time = styled.section`
  text-align: center;
  padding: 40px 30px;

  h2{
    display:flex;
    width: min(432px, 70vw);
    height:70px;
    border-radius:15px;
    background-color: ${props => props.$cor};

    font-weight: 800;
    font-size:32px;
    align-items:center;
    justify-content:center;
    margin-bottom:40px;
  }
  
  .playlist{
    display:flex;
    gap:40px;
    overflow-x: auto;
    padding-bottom:40px;
  }
  .playlist::-webkit-scrollbar{
    height:20px;
    background-color:#1b2839;
    border-radius:20px;
    padding:10px;
  }
  .playlist::-webkit-scrollbar-thumb{
    background-color: ${props => props.$cor};
    border-radius:20px;
  }
`

const VideosContainer = (props) => {
  return (
    (props.videos.length > 0) &&
    <Time $cor={props.corTag}>
      <div>
        <h2>{props.nome}</h2>
        <div className="playlist">
          {props.videos.map(video => <Playlist
            key={video.titulo}
            video={video}
            cor={props.corTag}
            deletar={props.del}
            editFunction={props.edit}
            />)}
        </div>
      </div>
    </Time>
  )
}

export default VideosContainer