import styled from 'styled-components';
import {Col, Row} from 'reactstrap';

export const MainPageContent = styled(Row)`
  background:rgba(0,0,0, .5);
  margin:0 !important;
`;

export const BigLabel = styled.span`
  text-align:center;
  font-family: 'Rye', cursive;
  font-size:1.9rem;
  font-weight: 100;
  color:#E0A607;
`;

export const SmallLabel = styled.span`
  font-family: 'Rye', cursive;
  font-size:1.2rem;
  font-weight: 100;
  color:#E0A607;
`;

export const StyledBulletList = styled.ul`
  max-width:350px;
  display:inline-block;
    
  li {
    font-family: 'Rye', cursive;
    font-weight:200;
    font-size:1.2rem;
    text-align:left;
  }
`;

export const StyledPTag = styled.p`
  font-size:1.5rem;
  line-height:1.8rem;
  text-align:left;
  padding-left:25px;
  padding-right:25px;
`;