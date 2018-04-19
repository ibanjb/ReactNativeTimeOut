import React from 'react';
import { Container,Content, Text } from 'native-base';

export default class Sidebar extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          shadowOffSetWidth: 1,
          shadowRadius: 4,
      };
  }
  render() {
    return (
        <Container>
            <Content style={{ backgroundColor: 'tomato', flex: 1, top: -1 }}>
                <Text>Sidebar screen </Text>
            </Content>
        </Container>
    );
  }
}
