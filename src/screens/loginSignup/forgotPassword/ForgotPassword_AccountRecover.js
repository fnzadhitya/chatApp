import { StyleSheet, Text, TextInput, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, goback, logo1, row } from '../../../commonCss/pagecss'
import { formbtn, formHead2, formInput, formTextLinkCenter, formTextLinkRight } from '../../../commonCss/formcss'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ForgotPassword_AccountRecover = ({ navigation }) => {
  return (
	<View style={containerFull}> 
	  <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword_ChoosePassword')} style={goback}>
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
		  <View style={row}>
                <MaterialCommunityIcons name="check-decagram" size={30} color="#99B83C" />
                <Text style={formHead2}> Account Recovered Successfully</Text>
            </View>

            <Text style={formbtn}
                onPress={() => navigation.navigate('Login')}
            >
                Let's Roll
            </Text>
	</View>
  )
}


export default ForgotPassword_AccountRecover

const styles = StyleSheet.create({})