import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserList, {User} from '../Component/UserList';
import {useUserFetchDetails} from '../CustomHooks/CustomHooks';

export default function SearchUser(): JSX.Element {
  const [search, setSearchValue] = useState<string>('');
  const [userList, setUserList] = useState<User[]>([]);
  const [loading, error, data] = useUserFetchDetails();

  useEffect(() => {
    if (data && data?.listZellerCustomers?.items) {
      setUserList(data?.listZellerCustomers?.items);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size={30} color={'#4d94ff'} />}
      {error && <Text>{'Something went wrong. Please try again.'} </Text>}
      <TextInput
        onChangeText={(value: string) => {
          setSearchValue(value);
        }}
        style={styles.searchBar}
      />

      <UserList
        userList={userList?.filter((user: User) =>
          user?.name?.toLowerCase().includes(search?.toLowerCase()),
        )}
        selectedRole={''}
      />
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
