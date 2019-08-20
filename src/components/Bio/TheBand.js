import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'reactstrap';
import ABio from './ABio';

const BandBioHeader = styled.div`
  text-align:center;
  font-family: 'Rye', cursive;
  font-size:1.9rem;
  font-weight: 100;
  color:#E0A607;
`;

const MainPageContent = styled.div`
  background:rgba(0,0,0, .5);
`;

const BioRow = styled.div`

  padding:25px;
  border: 1px solid red;
  
  @media (min-width: 1200px) {
    margin-left:200px;
    margin-right:200px;
  }
`;

const BioContentCol = styled(Col)`
  border:1px solid green;
`;


const MemberPictureContainer = styled(Col)`
  border:1px solid blue;
  text-align:center;
  @media (min-width: 768px) {
    text-align:right;
  }
  
`;

const MemberPicture = styled.div`
  display:inline-block;
  width:200px;
  height:225px;
  background-color:lightblue;
`;

const MemberBio = styled.div`
    font-size:1rem;
    line-height:1.2rem;
    text-align:left;
    color:#E0A607;
`;

export default class TheBand extends React.Component {
  render() {
    return (
      <MainPageContent>
        <div>
          <BioRow>
            <Row>
              <Col>
                <BandBioHeader>Get To Know The Band</BandBioHeader>
              </Col>
            </Row>
          </BioRow>
          <Row>
            <Col>
              <BioRow>
                <Row>
                  <MemberPictureContainer sm="12" md="4">
                    <MemberPicture></MemberPicture>
                  </MemberPictureContainer>
                  <BioContentCol sm="12" md="8">
                    <MemberBio>
                      Love, it’s our favorite addiction.  We love to play, we love to perform, we love to create, we love to build relationships, we love…  We are constantly inspired by our environment and each other.  Together we have over 50 years of musical experience and many more in life lessons.  We use our seasoning to spice the pot and serve excitement to the table.  Songs are never played the same way twice; we allow the music to take over like a breeze through an open window.  Our influences are eclectic, random, but our sound is certain; a touch of country, pinch of folk soaking in a broth of rock n’ roll stirred with the blues.  Like R.E.M. met Neil Young at Bob Dylan’s garage sale.  Always driven by passion we play from the heart and love to play live.
                    </MemberBio>
                  </BioContentCol>
                </Row>
              </BioRow>
            </Col>
          </Row>
        </div>
        <ABio
          memberName="Andy Greb"
          instruments={["Guitar", "Vocals", "Kazoo"]}
          picture=""
          born="Chicago, IL"
          influences="Eric Clapton, Drive By Truckers,  Locust Spawning,  Old 97’s, Tom Petty, REM, Rolling Stones, Slash, Muddy Waters, Neil Young."
        />

        <ABio
          memberName="Bobby Midnight"
          instruments={["Bass", "Vocals"]}
          picture=""
          born="Somewhere"
          influences=""
        />
      </MainPageContent>
    );
  }
}