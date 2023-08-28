import React, {memo, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface UserTypeProps {
  userTypes: string[];
  setSelectedRole: (role: string) => void;
  selectedRole: string;
}
const UserType: React.FC<UserTypeProps> = props => {
  const {userTypes, selectedRole, setSelectedRole} = props;

  const onRadioButtonClick = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.userTypeTitle}>{'User Type'}</Text>
      {userTypes?.map((role: string) => {
        return (
          <TouchableOpacity
            testID="selectRoleRadioButton"
            style={[
              styles.radioButtonView,
              role === selectedRole
                ? styles.selectedButtonBG
                : styles.unSelectedButtonBG,
            ]}
            key={role}
            onPress={() => onRadioButtonClick(role)}>
            <View style={styles.radioButtonOuterCircle}>
              {role === selectedRole ? (
                <View style={styles.radioButtonInnerCircle} />
              ) : null}
            </View>
            <Text style={styles.radioButtonLabel}>{role}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default memo(UserType);

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  userTypeTitle: {fontSize: 24, fontWeight: '700'},
  radioButtonView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    marginVertical: 10,
    padding: 10,
  },
  selectedButtonBG: {backgroundColor: '#e6f0ff', borderRadius: 6},
  unSelectedButtonBG: {backgroundColor: '#fff'},
  radioButtonOuterCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4d94ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonInnerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#4d94ff',
  },
  radioButtonLabel: {fontSize: 18, marginLeft: 16, color: 'black'},
});
