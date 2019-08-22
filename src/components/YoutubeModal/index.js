import React from 'react';
import styled from 'styled-components';
import {Col, Row, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {BigLabel} from '../../CommonStyledComponents';
import YouTube from 'react-youtube';


const VideoPreview = styled.div`
  display:inline-block;
  width:250px;
  background-color:lightgray;
  border: 1px solid #7F38BC;
  cursor: pointer;
  
  img {
    width:100%;
  }
`;

const VideoModal = styled(Modal)`
  &.modal-dialog {
    max-width:670px;
  }
  
  &.modal-content {
    //width:700px;
  }
`;

export default class YoutubeModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
  }

  toggleShown = () => {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  };


  render() {
    const { VideoId } = this.props;
    const { modalIsOpen } = this.state;
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div>
        <VideoPreview onClick={this.toggleShown}>
          <img src={`http://img.youtube.com/vi/${VideoId}/0.jpg`} />
        </VideoPreview>

        <VideoModal isOpen={modalIsOpen} toggle={this.toggleShown}>
          <ModalBody>
            <YouTube
              videoId={VideoId}
              opts={opts}
              onReady={this._onReady}
            />
          </ModalBody>
          <ModalFooter>
            <button color="secondary" onClick={this.toggleShown}>Ok</button>
          </ModalFooter>
        </VideoModal>
      </div>
    );
  }
};