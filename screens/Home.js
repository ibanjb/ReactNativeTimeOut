import React from 'react';
import { StyleSheet,View, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_BACKGROUND = require('../assets/img/background.jpg');
const BARCELONA = require('../assets/img/barcelona.png');
export default class Home extends React.Component {  

  onPress = () => {
    console.log('pressed');
  }

  render() {
    // with footer, height - 140 
    //const availableHeight = SCREEN_HEIGHT - 140;

    // withou footer, height - 84
    const availableHeight = SCREEN_HEIGHT - 84;

    const boxHeight = availableHeight / 3;
    
    return (
        <ImageBackground source={IMAGE_BACKGROUND} style={{flex: 1}}>
            <Container>
                <Content>
                <View style={{ flex: 1, backgroundColor: 'white', height: 60}}>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View>
                            <TouchableOpacity onPress={this._onPressButton} style={{ flex: 1, backgroundColor: '#8b9fbf', height: boxHeight, width: undefined, alignItems: 'center'}}>
                                <Image source={BARCELONA} style={{ resizeMode: 'cover', opacity: 0.2 }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this._onPressButton} style={{ flex: 1, backgroundColor: 'white', height: boxHeight, width: undefined, alignItems: 'center'}}>
                                <Image source={BARCELONA} style={{ resizeMode: 'cover', opacity: 0.2 }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this._onPressButton} style={{ flex: 1, backgroundColor: 'grey', height: boxHeight, width: undefined, alignItems: 'center'}}>
                                <Image source={BARCELONA} style={{ resizeMode: 'cover', opacity: 0.2 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
                {/* 
                <Footer>
                    <FooterTab style={{ backgroundColor: 'tomato' }}>
                        <Button>
                            <Icon active name="md-navigate" style={{ color: '#e3cd1d'}} />
                        </Button>
                        <Button>
                            <Icon name="md-apps" />
                        </Button>
                        <Button>
                            <Icon name="md-chatbubbles" />
                        </Button>                        
                        <Button>
                            <Icon name="md-person" />
                        </Button>
                    </FooterTab>
                </Footer>
                */ }
            </Container>
        </ImageBackground>
    );
  }
}
