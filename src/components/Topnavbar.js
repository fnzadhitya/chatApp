import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../../assets/logo.png'
import { icons2, icons3, logo2 } from '../commonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Topnavbar = ({ navigation, page }) => {
  
  // console.log(page)
  return (
	<View style={styles.container}>
    {
      page === 'Mainpage' &&
      <MaterialIcons name="library-add" size={24} color="black" style={icons3} onPress={() => 
        navigation.navigate('AddPost')} />
    }
    
		<Image source={logo} style={logo2} />
		{
      page === 'Mainpage' &&
      <Ionicons name='chatbubbles' size={24} color="black" style={icons2} onPress={ () => 
        navigation.navigate('All_Chats') }/>
    }

		{
      page === 'My_UserProfile' &&
      <Ionicons name='settings-sharp' size={24} color="black" style={icons2} onPress={ () => 
        navigation.navigate('Settings_1') }/>
    }
	</View>
  )
}

export default Topnavbar

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'absolute',
        top: 0,
        zIndex: 100,
        backgroundColor: 'white',
        borderColor: '#f5f5f5',
        borderWidth: 1,
	}
})