import React from 'react';
import styled from 'styled-components';
import {MainPageContent, SmallLabel} from '../CommonStyledComponents';
import {Col} from 'reactstrap';
import {PageHeader} from '../components/pageHeader';
import YoutubeModal from '../components/YoutubeModal';

const Videos = styled.div`
text-align:center;
`;

const VideoContainer = styled.div`
  text-align:center;
  display:inline-block;
  margin:25px;  
`;
const VideoHeader = styled.div`
  color:white;
`;

export default class Music extends React.Component {


  render() {
    return (
      <MainPageContent>
        <Col>
          <PageHeader SectionHeader="Music" />
          <Videos>
          <VideoContainer>
            <SmallLabel>
              Offical Demo
            </SmallLabel>
            <YoutubeModal VideoId="kCB_7-79Kbo"/>
          </VideoContainer>
          <VideoContainer>
            <SmallLabel>
              Rosalie
            </SmallLabel>
            <YoutubeModal VideoId="DVV6i5sSXq0"/>
          </VideoContainer>
          <VideoContainer>
            <SmallLabel>
            Temping Fate
            </SmallLabel>
            <YoutubeModal VideoId="z3inKsQkxMw"/>
          </VideoContainer>
          </Videos>
        </Col>
      </MainPageContent>
    );
  }
}