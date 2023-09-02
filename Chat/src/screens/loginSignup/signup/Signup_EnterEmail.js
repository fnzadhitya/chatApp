import { StyleSheet, Text, TextInput, Image, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, goback, logo1 } from '../../../commonCss/pagecss'
import { formbtn, formHead2, formInput, formTextLinkCenter, formTextLinkRight } from '../../../commonCss/formcss'
import { Ionicons } from '@expo/vector-icons'

const Signup_EnterEmail = ({ navigation }) => {
	const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const handleEmail = () => {
        // setLoading(true)
        // navigation.navigate('Signup_EnterVerificationCode')
        if (email == '') {
            alert('Please enter email')
        }
        else {
            setLoading(true)
            fetch('http://192.168.1.100:3000/verify', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            })
                .then (res => res.json()).then (
                    data => {
                        if (data.error === "Invalid Credentials") {
                            // alert('Invalid Credentials')
                            alert('Invalid Credentials')
                            setLoading(false)
                        }
                        else if (data.message === "Verification Code Sent to your Email") {
                            setLoading(false)
                            alert(data.message);
                            navigation.navigate('Signup_EnterVerificationCode', {
                                useremail: data.email,
                                userVerificationCode: data.VerificationCode
                            })

                        }
                    }
                )
        }
    }
  return (
	<View style={containerFull}> 
	  <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goback}>
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
        <Text style={formHead2}>Create a new account</Text>
        <TextInput placeholder="Enter Your Email" style={formInput} onChangeText={(text) => { 
			setEmail(text) }} />
		{ 
			loading ?
				<ActivityIndicator size="large" color="grey" />
				:
				<Text style={formbtn} onPress={() => handleEmail()}>Next</Text>
        }
	</View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})