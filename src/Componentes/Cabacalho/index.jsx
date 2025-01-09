import styled from "styled-components";
import logo from '../../assets/aluraflix.png'
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
  display: flex;
  padding: 42px;
  align-items: center;
  background-color: #262626;
  justify-content:space-between;

  @media (max-width: 375px) {
    padding: 42px 10px;
    img{
      width: 50%;
    }
  }

  Link{
    color:red;
  }
`

const Cabecalho = () =>{
  return(
    <HeaderStyled>
      <img src={logo} height={'40px'}/>
      <div>
        <Link style={{ textDecoration: 'none' }} to='/'><h2>HOME</h2></Link>
        <Link style={{ textDecoration: 'none' }} to='/novo-video'><h2>NOVO VíDEO</h2></Link>
        
      </div>
    </HeaderStyled>
  )
}

export default Cabecalho;