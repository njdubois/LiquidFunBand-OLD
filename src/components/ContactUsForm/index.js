import React from 'react';
import styled from 'styled-components';
import {BigLabel, SmallLabel} from '../../CommonStyledComponents';
import {Col, Row} from 'reactstrap';
import * as axios from 'axios';

const ContactUsWrapper = styled.div`
  text-align:center;
`;

const FormWrapper = styled.div`
  border: 1px solid purple;
  text-align:left;
  width:500px;
  margin-left: auto;
  margin-right:auto;
  display:inline-block;
`;

const ContactFieldRow = styled(Row)`
  margin-bottom:10px;
  padding:2px;
`;

const LabelCol = styled(Col)`
    text-align:center;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

const InputCol = styled(Col)`
  input, textarea {
    width: 100%;
  }
`;

const SubmitCol = styled(Col)`
  text-align:right;
`;

export default class ContactUs extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };



  handleSubmit= (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url:  process.env.REACT_APP_API_URL + '/mailer',
      headers: {
        'apiKey': process.env.REACT_APP_API_KEY,
      },
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  setInput = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    this.setState({[name]: value})
  };

  render() {
    return (
      <ContactUsWrapper>
        <p><BigLabel>Contact Us</BigLabel></p>
        <FormWrapper>
        <form action={process.env.API_URL}>
          <ContactFieldRow>
            <LabelCol sm="12" md="4">
              <label><SmallLabel>Your Name</SmallLabel></label>
            </LabelCol>
            <InputCol sm="12" md="8">
              <input type="text" id="name" name="name" placeholder="Your name.." value={this.state.name} onChange={this.setInput}/>
            </InputCol>
          </ContactFieldRow>

          <ContactFieldRow>
            <LabelCol sm="12" md="4">
              <label><SmallLabel>Email</SmallLabel></label>
            </LabelCol>
            <InputCol sm="12" md="8">
              <input type="email" id="email" name="email" placeholder="Your email" value={this.state.email} onChange={this.setInput}/>
            </InputCol>
          </ContactFieldRow>

          <ContactFieldRow>
            <LabelCol sm="12" md="4">
              <label><SmallLabel>Subject</SmallLabel></label>
            </LabelCol>
            <InputCol sm="12" md="8">
              <textarea id="message" name="message" placeholder="Write something.." onChange={this.setInput} value={this.state.message} />
            </InputCol>
          </ContactFieldRow>
          <ContactFieldRow>
            <SubmitCol>

              <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </SubmitCol>
          </ContactFieldRow>
        </form>
        </FormWrapper>
      </ContactUsWrapper>
    );
  }
}