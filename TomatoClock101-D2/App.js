import React, { Component } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Container, Header, Content, Button, Icon, Text } from 'native-base'

type Props = {}
export default class App extends Component<Props> {
  render () {
    return (
      <Container>
        <Header />
        <Content>
          <Button iconLeft light>
            <Icon name='arrow-dropright-circle' />
            <Text>Start</Text>
          </Button>

          <Button iconLeft light>
            <Icon name='pause' />
            <Text>Start</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
