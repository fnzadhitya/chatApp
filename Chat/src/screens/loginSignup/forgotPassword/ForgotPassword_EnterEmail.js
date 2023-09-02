import { StyleSheet, Text, TextInput, Image, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, goback, logo1 } from '../../../commonCss/pagecss'
import { formbtn, formHead2, formInput } from '../../../commonCss/formcss'
import { Ionicons } from '@expo/vector-icons'

const ForgotPassword_EnterEmail = ({ navigation }) => {
	const [email, setEmail] = React.useState('')
    const [loading, setLoading] = React.useState(false)


    const handleEmail = () => {
        if (email === '') {
            alert('Please enter email')
        }

        else {
            setLoading(true)
            fetch('http://192.168.1.100:3000/verifyfp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
                .then (res => res.json()).then (data => {
                    if (data.error === "Invalid Credentials") {
                        // alert('Invalid Credentials')
                        alert('Invalid Credentials')
                        setLoading(false)
                    }
                    else if (data.message === "Verification Code Sent to your Email") {
                        setLoading(false)
                        alert(data.message);

                        navigation.navigate('ForgotPassword_EnterVerificationCode', {
                            useremail: data.email,
                            userVerificationCode: data.VerificationCode
                        })

                    }
                })
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
        <Text style={formHead2}>Verify Your Email</Text>
        <TextInput placeholder="Enter Your Email" style={formInput} onChangeText={(text) => setEmail(text)} />
		{ loading ? 
			<ActivityIndicator size="large" color="grey" /> 
			:
            <Text style={formbtn} onPress={() => handleEmail()}>Next</Text>
        }
	</View>
  )
}


export default ForgotPassword_EnterEmail

const styles = StyleSheet.create({})