import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap'

const LeftColumnContent = styled.div`
  text-align:center;
       
  @media (min-width: 768px) {
    text-align:right;
  }
`;

const RightColumnContent = styled.div`
  text-align:center;
  
  @media (min-width: 768px) {
    text-align:left;
  }
`;

const BandName = styled.span`
    font-family: 'Rye', cursive;
    font-size:1.9rem;
    font-weight: 100;
`;

const HomePageLogo = styled.img.attrs({
  src: '/images/logo.jpeg'
})`

  display:none;
  
  @media (min-width: 768px) {
    width:100%;
    max-width:350px;  
    display:inline-block;
  }
`;

const SmallHomePageLogo = styled.img.attrs({
  src: '/images/logo.jpeg'
})`
  max-width:150px; 
  @media (min-width: 768px) {
    display:none;  
  }
`;

const MainPageContent = styled(Row)`
  background:rgba(0,0,0, .5);
`;

const HomePageColumn = styled(Col)`
  color:#E0A607;
  margin:0;
  padding:50px;
  
  p {
    font-size:1.5rem;
    line-height:1.8rem;
    text-align:left;
    padding-left:25px; 
    padding-right:25px;
     
    @media (min-width: 768px) {
      max-width:350px;
      display:inline-block;  
    }
  
  }
  ul {
    max-width:350px;
    display:inline-block;
      
    li {
      font-family: 'Rye', cursive;
      font-weight:200;
      font-size:1.2rem;
      text-align:left;
    }
  }
 
`;

export default class Home extends React.Component {
  render() {
    return (
      <MainPageContent>
        <HomePageColumn xs={{ size: 12, order: 2}} md={{ size: 6, order: 1}}>
          <LeftColumnContent>
            <HomePageLogo />
          </LeftColumnContent>
        </HomePageColumn>
        <HomePageColumn xs={{ size: 12, order: 1}} md={{ size: 6, order: 1}}>
          <RightColumnContent>
            <div>
            <p>
              <BandName>Liquid Fun Band</BandName> is a high-energy band featuring catchy
              tunes about all aspects of life, love & observations.
            </p>
            </div>
            <div>
            <p>
              ​Influenced heavily by rock n' roll, folk and alt-country. We
              always play from the heart and love to play live!
            </p>
            </div>
            <Row>
              <Col xs={{ size: 6}} md={{ size: 12}}>
                <ul>
              <li>
                Live Performance<br />
                (4 Piece Band & Acoustic Duo)
              </li>
              <li>Open Mic</li>
              <li>Studio Recording</li>
              <li>Studio Musicians</li>
              <li>Sound Engineer</li>
              <li>Song Collaboration</li>
              <li>Networking</li>
            </ul>
              </Col>
              <Col xs={{ size: 6}} md={{ size: 0}}>
                <SmallHomePageLogo />
              </Col>
            </Row>
          </RightColumnContent>
        </HomePageColumn>
      </MainPageContent>
    );
  }
}