import styled from "styled-components"

const Nav = () => {
  return (
    <NavBox>
      <p>FAQs</p>
      <p>Contact Us</p>
      <p>Privacy Policy</p>
      <p>Press Kit</p>
      <p>Install Guide</p>
    </NavBox>
  )
}

export default Nav

const NavBox = styled.div`
color: var(--c-gray-dark); 
display: flex; 
flex-direction: column; 
gap: 1.5rem; 
font-size: 1.2rem; 
p{
    cursor: pointer; 
}
p:hover{
    color: var(--c-cyan); 
}

@media (min-width: 750px){
    display: grid; 
    grid-template-rows: 1fr 1fr; 
    grid-template-columns: 1fr 1fr 1fr; 
    text-align: left; 
}
`