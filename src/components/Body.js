import styled from "styled-components";
import Logo from "../assets/logo.svg";

import Blacklists from "../assets/icon-blacklist.svg"; 
import TextSnippets from "../assets/icon-text.svg";
import SneakPreview from "../assets/icon-preview.svg"; 
import ComputerImg from "../assets/image-computer.png"; 
import DevicesImg from "../assets/image-devices.png"; 
import Google from "../assets/logo-google.png";
import IBM from "../assets/logo-ibm.png" ;
import Microsoft from "../assets/logo-microsoft.png";
import HewlettPackard from "../assets/logo-hp.png"; 
import VectorGraphics from "../assets/logo-vector-graphics.png"; 

const Body = () => {
  return (
    <>
    <HeroBox>
      <img src={Logo} alt="Clipboard logo" />
      <TextBoxBig>
        <BigTitle>A history of everything you copy</BigTitle>
        <Paragraph>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </Paragraph>
        <ButtonBox>
          <DownloadButtonIOS>Download for iOS</DownloadButtonIOS>
          <DownloadButtonMac>Download for Mac</DownloadButtonMac>
        </ButtonBox>
      </TextBoxBig>
    </HeroBox>

{/* Medium header */}
<TextBoxMedium>
<MediumTitle>Keep track of your snippets</MediumTitle>
        <Paragraph>
        Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
        </Paragraph>
</TextBoxMedium>

{/* Laptop and text flex container */}
<FlexContainer>
 <img src={ComputerImg} alt="Mac computer displaying clipboard app"/>
 <FlexColumn>
  <TextBoxSmall>
    <SmallTitle>Quick Search</SmallTitle>
    <Paragraph>Easily search your snippets by content, category, web address, application, and more.</Paragraph>
  </TextBoxSmall>
  <TextBoxSmall>
    <SmallTitle>iCloud Sync</SmallTitle>
    <Paragraph>Instantly saves and syncs snippets across all your devices.</Paragraph>
  </TextBoxSmall>
  <TextBoxSmall>
    <SmallTitle>Complete History</SmallTitle>
    <Paragraph>Retrieve any snippets from the first moment you started using the app.</Paragraph>
  </TextBoxSmall>
 </FlexColumn>
</FlexContainer>

{/* Medium Title */}
<TextBoxMedium>
<MediumTitle>Access Clipboard anywhere</MediumTitle>
        <Paragraph>
        Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
        </Paragraph>
</TextBoxMedium>

{/* iPhone and iPad photo */}
<DeviceImageBox>
<img src={DevicesImg} alt="iPad and iPhone displaying Clipboard app"/>
</DeviceImageBox>
{/* Medium Header */}
<TextBoxMedium>
<MediumTitle>Supercharge your workflow</MediumTitle>
        <Paragraph>
        We’ve got the tools to boost your productivity.
        </Paragraph>
</TextBoxMedium>

{/* Features Flex Container */}
<FlexRow>
<TextBoxSmallCenter>
  <img src={Blacklists} alt="Blacklist icon"/>
  <SmallTitle>Create blacklists</SmallTitle>
  <Paragraph> Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</Paragraph>
</TextBoxSmallCenter>
<TextBoxSmallCenter>
  <img src={TextSnippets} alt="Text snippets icon"/>
  <SmallTitle>Plain text snippets</SmallTitle>
  <Paragraph>Remove unwanted formatting from copied text for a consistent look.</Paragraph>
</TextBoxSmallCenter>
<TextBoxSmallCenter>
  <img src={SneakPreview} alt="Sneak preview icon"/>
  <SmallTitle>Sneak preview</SmallTitle>
  <Paragraph>Quick preview of all snippets on your Clipboard for easy access.</Paragraph>
</TextBoxSmallCenter>
</FlexRow>

{/* Image Flex Container */}
<FlexRow>
  <img src={Google} alt="Google sponsorship logo"/>
  <img src={IBM} alt="IBM sponsorship logo"/>
  <img src={Microsoft} alt="Microsoft sponsorship logo"/>
  <img src={HewlettPackard} alt="Hewlett Packard Enterprise sponsorship logo"/>
  <img src={VectorGraphics} alt="Vector Graphics sponsorship logo"/>
</FlexRow>

{/* Ending Hero Box */}
<HeroBoxEnd>
<TextBoxBig>
  <BigTitle>Clipboard for iOS and Mac OS</BigTitle>
  <Paragraph>
  Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.
  </Paragraph>
  <ButtonBox>
    <DownloadButtonIOS>Download for IOS</DownloadButtonIOS>
    <DownloadButtonMac>Download for Mac</DownloadButtonMac>
  </ButtonBox>
</TextBoxBig>
</HeroBoxEnd>

</>
  );
};

export default Body;

const HeroBox = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 
gap: 4rem; 

@media (min-width: 750px){
  max-width: 600px; 
  margin: 0 auto; 
}
`;

const HeroBoxEnd = styled(HeroBox)`
margin: 10rem 0; 
@media (min-width: 750px){
  max-width: 600px; 
  margin: 15rem auto 10rem; 
}
`
const TextBoxBig = styled.div`
  text-align: center;
`;
const BigTitle = styled.p`
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.3em;
  color: var(--c-gray-dark);
  margin-bottom: 1.5rem; 
  @media (min-width: 750px){
    font-size: 2.3rem; 
  }
`;
const Paragraph = styled.p`
  color: var(--c-gray-mid);
`;
const ButtonBox = styled.div`
  margin-top: 3rem; 
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (min-width: 750px) {
    flex-direction: row; 
  }
`;
const DownloadButtonIOS = styled.div`
  background-color: var(--c-cyan);
  color: #fff;
  padding: 0.8rem 3rem;
  border-radius: 5rem;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 2px 2px hsl(171, 66%, 30%);
  letter-spacing: 0.1em;
  &:active {
    scale: 0.98;
  }
  &:hover{
    background-color: hsl(171, 66%, 50%)
  }
`;
const DownloadButtonMac = styled(DownloadButtonIOS)`
  background-color: var(--c-blue);
  box-shadow: 0 2px 2px hsl(233, 100%, 60%);
  &:hover{
    background-color:  hsl(233, 100%, 75%);
  }
`;

const MediumTitle = styled(BigTitle)`
font-size: 1.8rem; 
line-height: 1.2em; 
margin-bottom: 1rem; 
margin-top: 8rem; 

`;
const FlexContainer = styled.div`
@media (min-width: 750px){
  display: flex; 
  align-items: center; 
  justify-content: flex-start; 
  gap: 6rem; 
  translate: -4vw; 

}`;
const FlexColumn = styled.div`
display: flex; 
flex-direction: column; 
gap: 3rem; 
margin-top: 4rem; 
@media (min-width: 750px){
  margin: 0; 
}
`;
const TextBoxMedium = styled(TextBoxBig)`
margin-bottom: 4rem;
@media (min-width: 750px){
  max-width: 600px; 
  margin: 0 auto 6rem; 
}
`;
const TextBoxSmall = styled(TextBoxBig)`
@media (min-width: 750px){
text-align: left; 
max-width: 400px; 
}
`;
const TextBoxSmallCenter = styled(TextBoxBig)`
display: flex; 
flex-direction: column; 
align-items: center; 
img {
  margin-bottom: 2rem; 
}
@media (min-width: 750px){
  max-width: 400px; 
}
`;
const SmallTitle = styled(BigTitle)`
font-size: 1.6rem; 
margin-bottom: .5rem; 
`;
const FlexRow = styled(FlexColumn)`
align-items: center; 

@media (min-width: 750px){
  flex-direction: row; 
  justify-content: center; 
  margin: 0 auto 8rem;
  max-width: 80%; 
}
`;

const DeviceImageBox = styled.div`
@media (min-width: 750px){
  img{ margin: 0 auto; 
 
  } 
}`; 