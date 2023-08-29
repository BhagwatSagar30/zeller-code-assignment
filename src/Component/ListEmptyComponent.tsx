import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ListEmptyComponent = () => {
  return <Text style={styles.emptyListText}>{'No Users to display'}</Text>;
};

const styles = StyleSheet.create({
  emptyListText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default ListEmptyComponent;
