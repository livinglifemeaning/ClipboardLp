import styled from "styled-components"; 
import FacebookIcon from './Icon/FacebookIcon';
import TwitterIcon from "./Icon/TwitterIcon"; 
import InstagramIcon from "./Icon/InstagramIcon"; 
const SocialMediaBar = () => {
    let color = "hsl(210, 10%, 33%)"; 
    let hoverColor = "hsl(171, 66%, 44%)"; 
  return (
    <Bar>
      <FacebookIcon color={color} hoverColor={hoverColor}/>
      <TwitterIcon color={color} hoverColor={hoverColor}/>
      <InstagramIcon color={color} hoverColor={hoverColor}/>
    </Bar>
  )
}

export default SocialMediaBar

const Bar = styled.div`
display: flex; 
gap: 2rem; 
align-items: center; 
div {
  cursor: pointer; 
}

`