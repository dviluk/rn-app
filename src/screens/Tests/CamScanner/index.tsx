import {Button} from '@ui-kitten/components';
import Screen from 'components/screen';
import React, {Component} from 'react';
import {Image} from 'react-native';

import Scanner, {PictureCallbackProps} from 'react-native-rectangle-scanner';

export default class CamScannerScreen extends Component {
  state = {
    img: undefined,
    originalImg: undefined,
  };

  camera = React.createRef<any>();

  handleOnPictureProcessed = ({
    croppedImage,
    initialImage,
  }: PictureCallbackProps) => {
    this.setState({img: croppedImage, originalImg: initialImage});
  };

  onCapture = () => {
    if (this.camera.current) {
      this.camera.current.capture();
    }
  };

  render() {
    return (
      <Screen>
        <Scanner
          onPictureProcessed={this.handleOnPictureProcessed}
          ref={this.camera}
          style={{flex: 1}}
        />
        <Button onPress={this.onCapture.bind(this)}>Take</Button>
        {this.state.img && (
          <Image
            source={{uri: this.state.img}}
            style={{height: 200, width: '100%'}}
          />
        )}
      </Screen>
    );
  }
}
