import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';

class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0,0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start();
  }

  render(){
    return(
      <Animated.View style={this.position.getLayout()} >
        <View style={styles.ball}>
          <Text>Hallo Uli</Text>
        </View>
      </Animated.View>
      
    );
  }
}

const styles={
  ball:{
    height: 160,
    width: 160,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'black'
  }
}

export default Ball;
