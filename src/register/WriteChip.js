import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import postIdNfc from './postIdNfc';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class WriteChip extends Component {
  constructor(props) {
    super(proprs);

    const { dataBookDetail } = this.props;
    const { book_id } = dataBookDetail;

    this.state = {
      book_id,
    };
  }

  handleWrite = async (event) => {
    event.preventDefault();
    // TODO: NFC
    // const result = await postIdNfc{book_id);

  }

  render() {
    return(
      <View style={styles.container}>
        <Text>
          {book_id}
        </Text>
        <Button
          title="ICチップに書込"
          onPress={this.handleWrite}
        />
      </View>

    );
  }
}

export default WriteChip;
