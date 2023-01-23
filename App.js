import { StyleSheet, Text, View } from 'react-native';

import LittleLemonFooter from './components/littleLemonFooter';
import LittleLemonHeader from './components/littleLemonHeader';
import Login from './components/login';
import MenuItems from './components/menuItems';
import UserInputs from './components/userInputs';
// import LittleLemonScreen from './components/welcomeScreen';

export default function App() {
  return (
    <>
    <View style={styles.container} >
      <LittleLemonHeader/>
      {/* <LittleLemonScreen/> */}
      {/* <MenuItems/> */}
      {/* <UserInputs/> */}
      <Login/>
    </View>
     <View style={styles.footer}>
     <LittleLemonFooter />
   </View>
   </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'  
  },
  footer: {
    backgroundColor: '#333333'  
  },
});