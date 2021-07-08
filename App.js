
import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import { Container } from 'native-base';
import Splash from './packages/screens/Splash';
import Home from './packages/screens/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplash: true
    };
  }

  componentDidMount() {
    if (this.state.showSplash) {
      setTimeout(() => {
        this.setState({ showSplash: false })
      }, 2000);
    }
  }

  render() {
    return (
      <Container>
        {this.state.showSplash ? <Splash /> : <Home />}
      </Container>);
  }


}

