import React from 'react';
import { StyleSheet,View, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_BACKGROUND = require('../assets/img/background.jpg');
const BARCELONA = require('../assets/img/barcelona.jpg');
const TARRAGONA = require('../assets/img/tarragona.jpg');
const GIRONA = require('../assets/img/girona.png');
const LLEIDA = require('../assets/img/lleida.jpg');

export default class Home extends React.Component {  

  onPress = () => {
    console.log('pressed');
  }

  render() {
    // with footer, height - 140 
    //const availableHeight = SCREEN_HEIGHT - 140;

    // withou footer, height - 84
    const availableHeight = SCREEN_HEIGHT - 60;

    const boxHeight = availableHeight / 4;

    _openMenu = () => {
        console.log('click');
    }

    return (
        <ImageBackground source={IMAGE_BACKGROUND} style={{flex: 1}}>
            <Container>
                <Content>
                    <View style={{ flex: 1, backgroundColor: 'white', height: 60, paddingTop: 15 }}>
                        <Button>
                            <Icon name='menu' onClose={() => this._openMenu()}  />
                        </Button>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View>                            
                            <TouchableOpacity onPress={this._onPressButton} style={{ flex: 1, backgroundColor: '#8b9fbf', height: boxHeight, width: undefined, alignItems: 'center'}}>
                                <Image source={BARCELONA} style={{ resizeMode: 'cover', opacity: 0.2 }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this._onPressButton} style={{ flex: 1, backgroundColor: '#8b9fbf', height: boxHeight, width: undefined, alignItems: 'center'}}>
                                <Image source={GIRONA} style={{ resizeMode: 'cover', opacity: 0.2 }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this._onPressButton} style={{ flex: 1, backgroundColor: '#8b9fbf', height: boxHeight, width: undefined, alignItems: 'center'}}>
                                <Image source={LLEIDA} style={{ resizeMode: 'cover', opacity: 0.2 }} />
                            </TouchableOpacity>
                        </View>                        
                        <View>
                            <TouchableOpacity onPress={this._onPressButton} style={{ flex: 1, backgroundColor: '#8b9fbf', height: boxHeight, width: undefined, alignItems: 'center'}}>
                                <Image source={TARRAGONA} style={{ resizeMode: 'cover', opacity: 0.2 }} />
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
