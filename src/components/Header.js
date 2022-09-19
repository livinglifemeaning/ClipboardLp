import styled from "styled-components"
import backgroundImgDesktop from "../assets/bg-header-desktop.png" 
import backgroundImgMobile from "../assets/bg-header-mobile.png" 

const Header = (props) => {
 return(
  <BackgroundImage />
 )
   
};

const BackgroundImage = styled.div`
background: url(${backgroundImgMobile}) top/cover no-repeat; 
width: 100vw; 
height:50vh;  
position: absolute; 
top: 0; 
left: 0; 
@media (min-width: 750px){
    background-image: url(${backgroundImgDesktop}); 
}
`
export default Header;
