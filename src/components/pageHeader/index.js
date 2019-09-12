import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'reactstrap';
import {BigLabel} from '../../CommonStyledComponents';

const HeaderRow = styled.div`
  text-align:center;
  margin: 25px 200px 25px 200px;  
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