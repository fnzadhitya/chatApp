import { StyleSheet, Text, TextInput, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, goback, logo1 } from '../../../commonCss/pagecss'
import { formbtn, formHead3, formInput } from '../../../commonCss/formcss'
import { Ionicons } from '@expo/vector-icons'

const ForgotPassword_EnterVerificationCode = ({ navigation, route }) => {
	const { useremail, userVerificationCode } = route.params;
    console.log(useremail, userVerificationCode)

    const [verificationCode, setVerificationCode] = React.useState('');


    const handleVerificationCode = () => {

        if (verificationCode != userVerificationCode) {
            alert ('Invalid Verification Code')
        }
        else {
            alert ('Verification Code Matched')
            navigation.navigate('ForgotPassword_ChoosePassword', { email: useremail })
        }

        // navigation.navigate('ForgotPassword_ChoosePassword')
    }

  return (
	<View style={containerFull}> 
	  <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword_EnterEmail')} style={goback}>
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
        <Text style={formHead3}>A verification code has been sent to your email</Text>
        <TextInput placeholder="Enter 6-Digit Code here" style={formInput} onChangeText={(text) => 	
			setVerificationCode(text)} />
        <Text style={formbtn} onPress={() => handleVerificationCode()}>Next</Text>
	</View>
  )
}


export default ForgotPassword_EnterVerificationCode

const styles = StyleSheet.create({})