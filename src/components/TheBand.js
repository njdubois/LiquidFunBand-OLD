import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'reactstrap';

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
margin-left:25px;
margin-right:25px;
margin-bottom:25px;
`;

const MemberPicture = styled.div`
  display:inline-block;
  width:200px;
  height:250px;
  background-color:lightblue;
`;
const MemberBio = styled.div`
    font-size:1rem;
    line-height:1.8rem;
    text-align:left;
    padding-left:25px; 
    padding-right:25px;
    color:#E0A607;
`;

export default class TheBand extends React.Component {
  render() {
    return (
      <MainPageContent>
        <BioRow>
          <Row>
            <Col>
              <BandBioHeader>Get To Know The Band</BandBioHeader>
            </Col>
          </Row>
        </BioRow>
        <BioRow>
          <Row>
            <Col sm="12" md="2"><MemberPicture></MemberPicture></Col>
            <Col sm="12" md="10">
              <MemberBio>
                Love, it’s our favorite addiction.  We love to play, we love to perform, we love to create, we love to build relationships, we love…  We are constantly inspired by our environment and each other.  Together we have over 50 years of musical experience and many more in life lessons.  We use our seasoning to spice the pot and serve excitement to the table.  Songs are never played the same way twice; we allow the music to take over like a breeze through an open window.  Our influences are eclectic, random, but our sound is certain; a touch of country, pinch of folk soaking in a broth of rock n’ roll stirred with the blues.  Like R.E.M. met Neil Young at Bob Dylan’s garage sale.  Always driven by passion we play from the heart and love to play live.
              </MemberBio>
            </Col>
          </Row>
        </BioRow>
      </MainPageContent>
    );
  }
}