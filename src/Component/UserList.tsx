import React, {memo} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import ListItem from './ListItem';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}
type UserDetailsProps = {
  userList: User[];
  selectedRole: string | undefined;
};

const UserList: React.FC<UserDetailsProps> = props => {
  const {selectedRole, userList} = props;

  const listEmptyComponent = () => {
    return <Text style={styles.emptyListText}>{'No Users to display'}</Text>;
  };

  const renderItem = ({item}: {item: User}) => {
    return <ListItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <Text style={styles.userTypeTitle}>
        {selectedRole ? selectedRole + ' Users' : ' Users List'}
      </Text>
      <FlatList
        data={userList}
        renderItem={renderItem}
        ListEmptyComponent={listEmptyComponent}
        keyExtractor={user => user?.id}
      />
    </SafeAreaView>
  );
};
export default memo(UserList);

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  userTypeTitle: {fontSize: 24, fontWeight: '700'},
  emptyListText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});
