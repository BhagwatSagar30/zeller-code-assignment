import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListItem from '../Component/ListItem';
import {User} from '../Component/UserList';
import {useQuery} from '@apollo/react-hooks';
import {getListZellerCustomers} from '../query/getListZellerCustomers';

export default function SearchUser(): JSX.Element {
  const [search, setSearchValue] = useState('');
  const [userList, setUserList] = useState([]);
  const {loading, data} = useQuery(getListZellerCustomers);

  useEffect(() => {
    if (data && data?.listZellerCustomers?.items) {
      setUserList(data?.listZellerCustomers?.items);
    }
  }, [data]);

  const filterList = (list: User[]) => {
    return list.filter(listItem =>
      listItem.name.toLowerCase().includes(search.toLowerCase()),
    );
  };
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size={30} color={'#4d94ff'} />}
      <TextInput
        onChangeText={(value: string) => {
          setSearchValue(value);
        }}
        style={styles.searchBar}
      />

      <Text style={styles.userTypeTitle}>{'User List'}</Text>
      {filterList(userList).map(user => {
        return <ListItem item={user} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 20, marginVertical: 20},
  userTypeTitle: {fontSize: 24, fontWeight: '700', marginTop: 30},
  searchBar: {
    paddingStart: 7,
    paddingEnd: 7,
    fontSize: 24,
    height: 50,
    borderRadius: 6,
    backgroundColor: '#e6f0ff',
  },
});
