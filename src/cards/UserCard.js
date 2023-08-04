import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import nopic from '../../assets/nopic.png'
import React from 'react'

const UserCard = ({ user, navigation }) => {
	// console.log(user)
  return (
    <TouchableOpacity onPress={
      () => {
          navigation.navigate('Other_UserProfile', { user: user })
      }
  }>
      <View style={styles.ChatCard}>
          {
              user.profilepic ? <Image source={{ uri: user.profilepic }} style={styles.image} />
                  : <Image source={nopic} style={styles.image} />
          }

          <View style={styles.c1}>
              <Text style={styles.username}>{user.username}</Text>
          </View>
      </View>
  </TouchableOpacity>
  )
}

export default UserCard

const styles = StyleSheet.create({
	  ChatCard: {
      backgroundColor: 'white',
		  borderColor: 'black',
		  borderWidth: 1,
      width: '100%',
      marginTop: 10,
      borderRadius: 30,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 50,
      borderColor: 'black',
      borderWidth: 0.5,
    },
    username: {
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    c1: {
      marginLeft: 20,
    },
})