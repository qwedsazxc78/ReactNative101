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
            <Icon name='arrow-back' />
            <Text>Start</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
