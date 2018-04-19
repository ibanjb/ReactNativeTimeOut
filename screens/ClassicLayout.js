import React from 'react';
import { StyleSheet,View, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_BACKGROUND = require('../assets/img/background.jpg');

export default class ClassicLayout extends React.Component {
  render() {
    return (
        <ImageBackground source={IMAGE_BACKGROUND} style={{flex: 1}}>
            <Container>
                <Content />
                <Footer>
                    <FooterTab style={{ backgroundColor: 'tomato'}}>
                        <Button vertical active style={{ backgroundColor: 'tomato'}}>
                            <Icon active name="walk" style={{ color: 'yellow'}} />
                            <Text style={{ color: 'yellow'}}>A prop teu</Text>
                        </Button>
                        <Button vertical style={{ backgroundColor: 'tomato'}}>
                            <Icon name="ribbon" />
                            <Text>Destacat</Text>
                        </Button>
                        <Button vertical style={{ backgroundColor: 'tomato'}}>
                            <Icon name="navigate" />
                            <Text>Cercar</Text>
                        </Button>
                        <Button vertical style={{ backgroundColor: 'tomato'}}>
                            <Icon name="text" />
                            <Text>Parlem?</Text>
                        </Button>
                    </FooterTab>
                </Footer>            
            </Container>
        </ImageBackground>
    );
  }
}
