import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'reactstrap';
import {BigLabel} from '../../CommonStyledComponents';

const HeaderRow = styled.div`
  text-align:center;
  
  @media (min-width: 1200px) {
    margin-left:200px;
    margin-right:200px;
    
  }
`;

export const PageHeader = ({SectionHeader}) => {
    return (
      <HeaderRow>
        <Row>
          <Col>
            <BigLabel>{SectionHeader}</BigLabel>
          </Col>
        </Row>
      </HeaderRow>
    );
};