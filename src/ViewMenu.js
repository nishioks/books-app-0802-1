import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
} from 'react-native';
import changeMenu from './changeMenu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class ViewMenu extends Component {
  constructor(props) {
    super(props);
  }

  changeMode = (mode, data) => {
    this.setState({ mode, data });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="本の登録"
          onPress={this.startRegister}
        />
        <Button
          title="本の貸出"
          onPress={this.startBorrow}
        />
        <Button
          title="本の返却"
          onPress={this.startReturn}
        />
      </View>
    　<ViewIsbn changeMode={this.changeMode} />;

    );
  }
}

export default ViewMenu;
