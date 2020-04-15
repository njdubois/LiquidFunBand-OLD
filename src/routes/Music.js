import React from 'react';
import styled from 'styled-components';
import {MainPageContent, SmallLabel} from '../CommonStyledComponents';
import {Col, Row} from 'reactstrap';
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
const Albums = styled.div`
  text-align:center;
`;

const AlbumCover = styled.div`
  display:inline-block;
  width:250px;
  text-align:center;

  cursor: pointer;
  
  img {
    border: 1px solid #7F38BC;
    width:100%;
  }
  
  button {
    margin:5px; 
    background-color: #7F38BC;
    border: 2px solid #E0A607;
    color: white;
    padding:10px 50px 10px 50px;
    border-radius: 50px;
    outline: 0;
  }
`;

export default class Music extends React.Component {


  render() {
    return (
      <MainPageContent>
        <Col>
          <PageHeader SectionHeader="Media" />



          <Row>
            <Col sm={{ size: 12}} md={{ size: 4 }} lg={{ size: 4}}>
              <PageHeader SectionHeader="Albums" />
            </Col>
            <Col sm={{ size: 12}} md={{ size: 8 }} lg={{ size: 8}}>
              <Albums>
                <AlbumCover>
                  <img src="images/one-short-of-a-six-pack.png" />
                  <button>Buy Now</button>
                </AlbumCover>
              </Albums>
            </Col>
          </Row>

          <Row>
            <Col sm={{ size: 12}} md={{ size:12 }} lg={{ size: 4}}>
              <PageHeader SectionHeader="Videos" />
            </Col>
            <Col sm={{ size: 12}} md={{ size: 12 }} lg={{ size: 8}}>
              <Videos>
                <VideoContainer>
                  <SmallLabel>
                    Offical Demo
                  </SmallLabel>
                  <YoutubeModal VideoId="3hrAlzj32VM"/>
                </VideoContainer>
                <VideoContainer>
                  <SmallLabel>
                    Rosalie
                  </SmallLabel>
                  <YoutubeModal VideoId="Kc6qteYZ6z8"/>
                </VideoContainer>
                <VideoContainer>
                  <SmallLabel>
                  Temping Fate
                  </SmallLabel>
                  <YoutubeModal VideoId="z3inKsQkxMw"/>
                </VideoContainer>
              </Videos>
            </Col>
          </Row>

        </Col>
      </MainPageContent>
    );
  }
}