import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { icons1 } from '../commonCss/pagecss';


const Bottomnavbar = ({ navigation, page }) => {

   // console.log(page)
  return (
	<View style={styles.container}>
      {
         page === 'Mainpage' ?
         <MaterialCommunityIcons name="home-variant" size={24} color="black" style={styles.activeicons1} 
            onPress={() => navigation.navigate('Mainpage')} />
         :
         <MaterialCommunityIcons name="home-variant" size={24} color="black" style={icons1} 
            onPress={() => navigation.navigate('Mainpage')} />   
      }

		{
         page === 'SearchUserPage' ?
         <Fontisto name="search" size={24} color="black" style={styles.activeicons1} 
            onPress={() => navigation.navigate('SearchUserPage')} />
         :
         <Fontisto name="search" size={24} color="black" style={icons1} 
            onPress={() => navigation.navigate('SearchUserPage')} />
      }

      {
         page === 'NotificationPage' ?
         <Ionicons name='ios-heart' size={24} color="black" style={styles.activeicons1} 
            onPress={() => navigation.navigate('NotificationPage')} />
         :
         <Ionicons name='ios-heart' size={24} color="black" style={icons1} 
            onPress={() => navigation.navigate('NotificationPage')} />
      }

		{
         page === 'My_UserProfile' ?
         <FontAwesome name='user-circle' size={24} color="black" style={styles.activeicons1} 
            onPress={() => navigation.navigate('My_UserProfile')} />
         :
         <FontAwesome name='user-circle' size={24} color="black" style={icons1} 
            onPress={() => navigation.navigate('My_UserProfile')} />
      }

	</View>
  )
}

export default Bottomnavbar

const styles = StyleSheet.create({
	container: {
		display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        borderColor: '#f5f5f5',
        borderWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 100,
        paddingVertical: 10,
        alignItems: 'center',
	},
   activeicons1: {
      backgroundColor: 'lightgrey',
      borderRadius: 50,
      fontSize: 24,
      padding: 7,
   }
})