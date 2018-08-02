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

    const test_book_id = '9780000000000';

    if (book_id) {
      this.state = {
        book_id,
      };  
    } else {
      this.state = {
        book_id: 'test number',
      };
    }
  }

  handleWrite = async (event) => {
    event.preventDefault();
    // TODO: NFC
    // const result = await postIdNfc{book_id);
    alert('book_idをICチップに書込みました。');

  }

  render() {
    return(
      <View style={styles.container}>
        <Text>
          {/* {test_book_id} */}
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
