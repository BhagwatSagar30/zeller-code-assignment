import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import UserType from '../Component/UserType';
import UserList, {User} from '../Component/UserList';
import {useUserFetchDetails} from '../CustomHooks/CustomHooks';

function UserDetails(): JSX.Element {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [userList, setUserList] = useState<User[]>([]);
  const [roleList, setRoleList] = useState<string[]>([]);
  const [loading, error, data] = useUserFetchDetails();

  useEffect(() => {
    if (data && data?.listZellerCustomers?.items) {
      setUserList(data?.listZellerCustomers?.items);
      const roles: string[] = [
        ...new Set(userList?.map((user: User) => user?.role)),
      ];
      setRoleList(roles);
    }
  }, [data, userList]);

  const onRoleSelection = useCallback(
    (role: string) => {
      setSelectedRole(role);
    },
    [setSelectedRole],
  );

  return (
    <View style={styles.mainView}>
      {loading && <ActivityIndicator size={30} color={'#4d94ff'} />}
      {error && <Text>{'Something went wrong. Please try again.'} </Text>}
      <UserType
        userTypes={roleList}
        selectedRole={selectedRole}
        setSelectedRole={onRoleSelection}
      />
      <View style={styles.lineView} />
      <UserList
        userList={userList?.filter((user: User) => user?.role === selectedRole)}
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
