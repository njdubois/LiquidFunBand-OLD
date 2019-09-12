import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  background:rgba(0,0,0, .5);
  display:inline-block;
  width:100%
  height:100px;
`;

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FooterDiv>

      </FooterDiv>
    );
  }
}