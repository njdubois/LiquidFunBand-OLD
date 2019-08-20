import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'reactstrap';

const BandBioHeader = styled.div`
  text-align:center;

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

const MemberName = styled.span`
  font-family: 'Rye', cursive;
  font-size:1.9rem;
  font-weight: 100;
  color:#E0A607;
`;

const Instruments = styled.span`
  font-size:1.5rem;
  font-weight: 100;
  color:#E0A607;
`;

const BioLabel = styled.span`
  font-family: 'Rye', cursive;
  font-size:1.2rem;
  font-weight: 100;
  color:#E0A607;
`;

export default class TheBand extends React.Component {
  render() {

    const {memberName, instruments, picture, born, influences} = this.props;

    return (
      <div>
          <BioRow>
            <Row>
              <Col>
                <BandBioHeader><MemberName>{ `${memberName}: `}</MemberName><Instruments>{instruments.join(", ")}</Instruments></BandBioHeader>
              </Col>
            </Row>
          </BioRow>
          <Row>
            <Col>
              <BioRow>
                <Row>
                  <MemberPictureContainer sm="12" md="4">
                    <MemberPicture src={picture}></MemberPicture>
                  </MemberPictureContainer>
                  <BioContentCol sm="12" md="8">
                    <MemberBio>
                      <div>
                        <BioLabel>Born : </BioLabel>{born}
                      </div>
                      <div>
                        <BioLabel>Influences : </BioLabel>{influences}
                      </div>
                    </MemberBio>
                  </BioContentCol>
                </Row>
              </BioRow>
            </Col>
          </Row>
        </div>
    );
  }
}