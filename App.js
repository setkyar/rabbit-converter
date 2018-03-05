import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

import knayi from 'knayi-myscript';

const height = '40%';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ZawGyitext: 'မဂၤလာပါ',
      Unicodetext: 'မင်္ဂလာပါ', 
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{textAlign:'center'}}>
            Rabbit Converter Clone with React Native
          </Text>
        </View>
        <KeyboardAvoidingView>
          <View style={styles.zawgyi}>
            <TextInput
              multiline = {true}
              onChangeText={(text) => this.setState({
                ZawGyitext: text,
                Unicodetext: text.length > 0 ? knayi.fontConvert(text, 'unicode', 'zawgyi') : text
              })}
            >
              <Text style={styles.multiLineHeight}>{this.state.ZawGyitext}</Text>
            </TextInput>
          </View>
          <View style={styles.unicode}>
            <TextInput
              multiline = {true}
              onChangeText={(text) => this.setState({
                ZawGyitext: text.length > 0 ? knayi.fontConvert(text, 'zawgyi', 'unicode') : text,
                Unicodetext: text 
              })}
            >
              <Text style={styles.multiLineHeight}>{this.state.Unicodetext}</Text>
            </TextInput>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  },
  header: {
    padding: 10,
    backgroundColor: '#0b7ef0',
    alignContent: 'center'
  },
  zawgyi: {
    height,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    padding: 5,
  },
  unicode: {
    height,
    padding: 5 
  },
  multiLineHeight: {
    lineHeight: 20
  },
  footer: {
    bottom: 0,
    padding: 10,
    backgroundColor: 'red'
  }
});