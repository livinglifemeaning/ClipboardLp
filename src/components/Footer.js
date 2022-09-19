import styled from "styled-components"; 
import Nav from './Nav';
import SocialMediaBar from './SocialMediaBar';
import Logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <FooterBox>
      <img src={Logo} alt="Clipboard logo" />
      <Nav/>
      <SocialMediaBar/>
    </FooterBox>
  )
}

export default Footer

const FooterBox = styled.div`
background-color: hsl(201, 11%, 97%); 
display: flex; 
flex-direction: column; 
align-items: center; 
justify-content: center; 
text-align: center; 
gap: 3rem; 
padding: 3rem 0; 
img {
  width: 50px; 
}

@media (min-width: 750px){
  flex-direction: row; 
  justify-content: space-between; 
  padding: 3rem 10rem;
}
`