import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserDetails from '../Container/UserDetails';
import SearchUser from '../Container/SearchUser';

function BottomNavigationTabs(): JSX.Element {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="UserDetails"
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        tabBarActiveTintColor: '#4d94ff',
        headerStyle: {
          backgroundColor: '#4d94ff',
        },
      }}>
      <Tab.Screen name="User Details" component={UserDetails} />
      <Tab.Screen name="Search Users" component={SearchUser} />
    </Tab.Navigator>
  );
}

export default BottomNavigationTabs;
