import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {User} from './UserList';

interface Props {
  item: User;
}

const ListItem = memo((props: Props) => {
  const {item} = props;
  return (
    <View key={item?.id} style={styles.listView}>
      <View style={styles.squareView}>
        <Text style={styles.insideSquareLabel}>{item?.name[0]}</Text>
      </View>
      <View style={styles.nameView}>
        <Text style={styles.userName}>{item?.name}</Text>
        <Text style={styles.userRole}>{item?.role}</Text>
      </View>
    </View>
  );
});

export default ListItem;

const styles = StyleSheet.create({
  listView: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  squareView: {
    height: 60,
    width: 60,
    backgroundColor: '#e6f0ff',
    borderRadius: 6,
    justifyContent: 'center',
  },
  insideSquareLabel: {
    textAlign: 'center',
    color: '#4d94ff',
    fontSize: 20,
    fontWeight: '500',
  },
  nameView: {justifyContent: 'space-around'},
  userName: {fontSize: 20, marginLeft: 16, marginRight: 16, color: 'black'},
  userRole: {
    fontSize: 16,
    marginLeft: 16,
    color: '#a6a6a6',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
});
