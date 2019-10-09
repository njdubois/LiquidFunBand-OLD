import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap'
import {BigLabel, MainPageContent, StyledBulletList, StyledPTag} from '../CommonStyledComponents';
import ContactUs from '../components/ContactUsForm';

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

const HomePageColumn = styled(Col)`
  color:#E0A607;
  margin:0;
  padding:50px;
  
`;

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <MainPageContent>
          <HomePageColumn xs={{ size: 12, order: 2}} md={{ size: 6, order: 1}}>
            <LeftColumnContent>
              <HomePageLogo />
            </LeftColumnContent>
          </HomePageColumn>
          <HomePageColumn xs={{ size: 12, order: 1}} md={{ size: 6, order: 1}}>
            <RightColumnContent>
              <div>
              <StyledPTag>
                <BigLabel>Liquid Fun Band</BigLabel> is a high-energy band featuring catchy
                tunes about all aspects of life, love & observations.
              </StyledPTag>
              </div>
              <div>
              <p>
                ​Influenced heavily by rock n' roll, folk and alt-country. We
                always play from the heart and love to play live!
              </p>
              </div>
              <Row>
                <Col xs={{ size: 12}} sm={{ size: 6}} md={{ size: 12}}>
                  <StyledBulletList>
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
                  </StyledBulletList>
                </Col>
                <Col xs={{ size: 12}} sm={{ size: 6}} md={{ size: 0}}>
                  <SmallHomePageLogo />
                </Col>
              </Row>
            </RightColumnContent>
          </HomePageColumn>
        </MainPageContent>
        <MainPageContent>
          <HomePageColumn>
            <ContactUs />
          </HomePageColumn>
        </MainPageContent>
      </div>
    );
  }
}