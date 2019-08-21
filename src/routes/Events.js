import React from 'react';
import styled from 'styled-components';
import {MainPageContent} from '../CommonStyledComponents';
import {Col} from 'reactstrap';
import {PageHeader} from '../components/pageHeader';

export default class Events extends React.Component {


  render() {
    return (
      <MainPageContent>
        <Col>
          <PageHeader SectionHeader="Upcoming Events" />
        </Col>
      </MainPageContent>
    );
  }
}