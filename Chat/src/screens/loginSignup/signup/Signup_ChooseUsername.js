import { StyleSheet, Text, TextInput, Image, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, goback, logo1 } from '../../../commonCss/pagecss'
import { formbtn, formHead2, formInput, formTextLinkCenter, formTextLinkRight } from '../../../commonCss/formcss'
import { Ionicons } from '@expo/vector-icons'

const Signup_ChooseUsername = ({ navigation, route }) => {
	const { email } = route.params
    const [username, setusername] = useState('')

    const [loading, setLoading] = useState(false)

    const handleUsername = () => {
        if (username == '') {
            alert('Please enter username')
        }
        else {
            setLoading(true)
            fetch('http://192.168.1.100:3000/changeusername', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    username: username
                })
            })
                .then(res => res.json()).then(
                    data => {
                        if (data.message === "Username Available") {
                            setLoading(false)
                            alert('Username has been set successfully')
                            navigation.navigate('Signup_ChoosePassword', { email: email, username: username })
                        }
                        else {
                            setLoading(false)
                            alert("Username not available");
                        }
                    }
                ).catch(err => {
                    console.log(err)
                })

        }

        // navigation.navigate('Signup_ChoosePassword')
    }

  return (
	<View style={containerFull}> 
	  <TouchableOpacity onPress={() => navigation.navigate('Signup_EnterVerificationCode')} style={goback}>
	  <Ionicons name="arrow-back" size={22} color="gray" />
		<Text style={{
			color: 'gray',
			fontSize: 16,
			marginLeft: 8,
			fontWeight: 'bold'
		}}>
			Go Back
		</Text>
	  </TouchableOpacity>

	  	<Image source={logo} style={logo1} />
        <Text style={formHead2}>Choose a Username</Text>
        <TextInput placeholder="Enter a username" style={formInput} onChangeText={(text) => 
			setusername(text)} />
		{ loading ? 
			<ActivityIndicator /> 
			:
            <Text style={formbtn} onPress={() => handleUsername()}>Next</Text>
        }
	</View>
  )
}


export default Signup_ChooseUsername

const styles = StyleSheet.create({})