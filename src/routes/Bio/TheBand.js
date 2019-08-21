import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'reactstrap';
import ABio from './ABio';
import {BigLabel, MainPageContent} from '../../CommonStyledComponents';
import {PageHeader} from '../../components/pageHeader';

const BioRow = styled.div`
  @media (min-width: 1200px) {
    margin-left:200px;
    margin-right:200px;
  }
`;

const BioContentCol = styled(Col)`

`;

const MemberPictureContainer = styled(Col)`
  text-align:center;
  @media (min-width: 768px) {
    text-align:right;
  }
  
`;

const MemberPicture = styled.img`
  width:200px;
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
        <Col>
          <PageHeader SectionHeader="Get to know the band" />

          <ABio
            picture="images/band-bio-image.jpeg"
            bio="Love, it’s our favorite addiction.  We love to play, we love to perform, we love to create, we love to build relationships, we love…  We are constantly inspired by our environment and each other.  Together we have over 50 years of musical experience and many more in life lessons.  We use our seasoning to spice the pot and serve excitement to the table.  Songs are never played the same way twice; we allow the music to take over like a breeze through an open window.  Our influences are eclectic, random, but our sound is certain; a touch of country, pinch of folk soaking in a broth of rock n’ roll stirred with the blues.  Like R.E.M. met Neil Young at Bob Dylan’s garage sale.  Always driven by passion we play from the heart and love to play live."
          />
          <ABio
            memberName="Andy Greb"
            instruments={["Guitar", "Vocals", "Kazoo"]}
            picture="images/andy-bio-image.jpeg"
            born="Chicago, IL"
            influences="Eric Clapton, Drive By Truckers,  Locust Spawning,  Old 97’s, Tom Petty, REM, Rolling Stones, Slash, Muddy Waters, Neil Young."
          />

          <ABio
            memberName="Bobby Midnight"
            instruments={["Bass", "Vocals"]}
            picture="images/bobby-bio-image.jpeg"
            born="Somewhere"
            influences="A lot of stuff!"
          />

          <ABio
            memberName='Tony "The Tony" Giangreco'
            instruments={["Drums", "Vocals"]}
            picture="images/tony-bio-image.jpeg"
            born="Elmhurst, IL"
            influences="Beatles, The Who, Nirvana, Genesis and The Everly Brothers."
          />

          <ABio
            memberName='Nick DuBois'
            instruments={["Guitar", "Vocals"]}
            picture=""
            born="Itasca, IL"
            influences="Beatles, Offspring, Green Day and Neil Young."
          />
        </Col>

      </MainPageContent>
    );
  }
}