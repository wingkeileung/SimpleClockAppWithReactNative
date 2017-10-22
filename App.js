import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from 'react-native-button';
import moment from 'moment';

// make an object of images
const image = {
  sunny: require('./src/blue.jpg'),
  night: require('./src/dark.png')
};

export default class App extends React.Component {
  //intiallizer
  constructor() {
    super();
    this.state = {
      backgroundName: 'sunny',
      time: moment().format('LTS'),
      date: moment().format('LL'),
      color: true
    };
  }

  // funtion for changing background
  handlePress() {
    console.log(this.state.backgroundName);
    if (this.state.backgroundName === 'sunny') {
      this.setState({ backgroundName: 'night', color: false });
    } else {
      this.setState({ backgroundName: 'sunny', color: true });
    }
  }
  // react life cicle component this function will excute when the application is run
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: moment().format('LTS') })
    }, 1000)
  }

  render() {
    const fontColor = this.state.color == true ? "black" : "white"
    // Destructuring time
    const time = moment().format('LTS')
    return (
      <View style = { styles.container } >
        <Image style = { styles.imageBackground }
              source = { image[this.state.backgroundName] } >
          <View style = {{ flex: 1 }}>
            <Text style = { styles.date }> { this.state.date }
            </Text>
            <Text style = { styles.timer }> { this.state.time }
            </Text>
          </View>
          <View style = {styles.btnContainer}>
            <Button
              containerStyle={{marginTop: 120 ,padding:4, height:30, overflow:'hidden', borderRadius:40, backgroundColor: 'lightblue'}}
              style = {{fontSize: 17, color: 'white'}}
              title = "Change Background"
              onPress = {() => this.handlePress()}
            >Change Background
            </Button>
          </View>
        </Image>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btnContainer: {
    width: 200,
    flex: 1
  },
  timer: {
    color: 'white',
    flex: 1,
    backgroundColor: 'transparent',
    fontSize: 40,
    marginTop: 0,
    alignSelf: 'center'
  },
  date: {
    flex: 1,
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 40,
    marginTop: 100,
    alignSelf: 'center'
  }
});