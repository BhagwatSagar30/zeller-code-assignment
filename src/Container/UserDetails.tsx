import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserType from '../Component/UserType';
import UserList, {User} from '../Component/UserList';
import {useQuery} from '@apollo/client';
import {getListZellerCustomers} from '../query/getListZellerCustomers';

function UserDetails(): JSX.Element {
  const [selectedRole, setSelectedRole] = useState('');
  const [userList, setUserList] = useState([]);
  const {loading, data} = useQuery(getListZellerCustomers);

  useEffect(() => {
    if (data && data?.listZellerCustomers?.items) {
      setUserList(data?.listZellerCustomers?.items);
    }
  }, [data]);

  const roleList: Array<string> = [
    ...new Set(userList?.map((user: User) => user.role)),
  ];

  return (
    <View style={styles.mainView}>
      {loading && <ActivityIndicator size={30} color={'#4d94ff'} />}
      <UserType
        userTypes={roleList}
        selectedRole={selectedRole}
        setSelectedRole={(role: string) => {
          setSelectedRole(role);
        }}
      />
      <View style={styles.lineView} />
      <UserList
        userList={userList?.filter((user: User) => user.role === selectedRole)}
        selectedRole={selectedRole}
      />
    </View>
  );
}

export default UserDetails;

const styles = StyleSheet.create({
  mainView: {padding: 10},
  lineView: {
    marginHorizontal: 10,
    height: 1,
    backgroundColor: '#cce0ff',
    marginVertical: 20,
  },
});
