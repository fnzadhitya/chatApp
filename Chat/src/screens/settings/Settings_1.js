import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { formHead5 } from '../../commonCss/formcss'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Setting1 = ({ navigation }) => {
  const logout = () => {
    AsyncStorage.removeItem('user').then(() => {
        alert('Logged out successfully')
        navigation.navigate('Login')
    })
}

  return (
	<View style={styles.container}>
		<Ionicons name="chevron-back-circle" size={24} color="black" style={styles.goprofileicon} 
			onPress={() => navigation.navigate('My_UserProfile')} />

		<Text style={formHead5}>Settings</Text>

		<Text style={styles.txt1} onPress={() => navigation.navigate('EditProfile')}> Edit Profile </Text>
    <Text style={styles.txt1} onPress={() => navigation.navigate('ChangePassword')}> Change Password </Text>
    <Text style={styles.txt1}> Customer Support</Text>
    <Text style={styles.txt1} onPress={ () => logout() }> Logout</Text>
	  
	</View>
  )
}

export default Setting1

const styles = StyleSheet.create({
	container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    txt1: {
        marginTop: 20,
        color: 'black',
        fontSize: 18,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
	goprofileicon: {
        position: 'absolute',
        top: 10,
        left: 20,
        zIndex: 10,
        color: 'grey',
        fontSize: 30,
    },
})