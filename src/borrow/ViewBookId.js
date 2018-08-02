import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class ViewBookId extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookId: '',
    };
  }

  handleBorrow = async (event) => {
    event.preventDefault();

    // TODO: 貸出のPOST投げる

    // changeMode('modeViewBorrowResult');
  }

  render() {
    const { bookId } = this.state;

    return (
      <View style={styles.container}>
        <Text>
          ISBN:
        </Text>
        <TextInput
          value={bookId}
          onChangeText={(value) => { this.setState({ bookId: value }); }}
        />
        <Button
          title="本の貸出を登録する"
          onPress={this.handleBorrow}
        />
      </View>
    );
  }
}

export default ViewBookId;
