import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { formHead5 } from '../../commonCss/formcss';
import AsyncStorage from '@react-native-async-storage/async-storage';
const EditProfile = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Ionicons name="chevron-back-circle" size={24} color="white" style={styles.goprofileicon}
                onPress={() => navigation.navigate('Settings_1')}
            />
            <Text style={formHead5}>Edit Profile</Text>
            <Text style={styles.txt1}onPress={() => navigation.navigate('UploadProfilePicture')}
                > Change Profile Picture</Text>
            <Text style={styles.txt1}onPress={() => navigation.navigate('ChangeUsername')}
                > Change Username</Text>
            <Text style={styles.txt1}onPress={() => navigation.navigate('ChangeDescription')}
                > Change Description</Text>
        </View>
    )
}

export default EditProfile

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
