import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
} from 'react-native';

import getBookDetail from './getBookDetail';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class ViewIsbn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isbn13: '11',
    };
  }

  handleSearch = async (event) => {
    event.preventDefault();

    const { isbn13 } = this.state;
    const dataBookDetail = await getBookDetail(isbn13);

    const { changeMode } = this.props;
    changeMode('modeViewBookDetail', dataBookDetail);
  }

  render() {
    const { isbn13 } = this.state;

    return (
      <View style={styles.container}>
        <Text>
          ISBN13:
        </Text>
        <TextInput
          value={isbn13}
          onChangeText={(value) => { this.setState({ isbn13: value }); }}
        />
        <Button
          title="本の詳細を検索"
          onPress={this.handleSearch}
        />
      </View>
    );
  }
}

export default ViewIsbn;
