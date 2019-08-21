import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'reactstrap';
import {BigLabel, SmallLabel} from '../../CommonStyledComponents';

const ABandBio = styled.div`
  margin-top:25px;
`;

const BandBioHeader = styled.div`
  text-align:center;

`;

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

const Instruments = styled.span`
  font-size:1.5rem;
  font-weight: 100;
  color:#E0A607;
`;

export default class TheBand extends React.Component {
  render() {

    const {memberName, instruments, picture, born, influences, bio} = this.props;

    return (
      <ABandBio>
        {memberName &&
        <BioRow>
          <Row>
            <Col>
              <BandBioHeader><BigLabel>{`${memberName}${instruments ? ": " : ""}`}</BigLabel><Instruments>{instruments ? instruments.join(", ") : ""}</Instruments></BandBioHeader>
            </Col>
          </Row>
        </BioRow>
        }
          <Row>
            <Col>
              <BioRow>
                <Row>
                  <MemberPictureContainer sm="12" md="4">
                    <MemberPicture src={picture}></MemberPicture>
                  </MemberPictureContainer>
                  <BioContentCol sm="12" md="8">
                    <MemberBio>
                      {bio &&
                        <div>
                          {bio}
                        </div>
                      }
                      {born &&
                        <div>
                          <SmallLabel>Born : </SmallLabel>{born}
                        </div>
                      }
                      {influences &&
                        <div>
                          <SmallLabel>Influences : </SmallLabel>{influences}
                        </div>
                      }
                    </MemberBio>
                  </BioContentCol>
                </Row>
              </BioRow>
            </Col>
          </Row>
        </ABandBio>
    );
  }
}