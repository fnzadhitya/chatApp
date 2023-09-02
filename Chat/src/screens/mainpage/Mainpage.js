import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { containerFull } from '../../commonCss/pagecss'
import { formHead } from '../../commonCss/formcss'
import Bottomnavbar from '../../components/Bottomnavbar'
import Topnavbar from '../../components/Topnavbar'
import FollowersRandomPost from '../../components/FollowersRandomPost'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Mainpage = ({ navigation }) => {
	const [userdata, setUserdata] = React.useState(null)
    useEffect (() => {
        AsyncStorage.getItem('user')
            .then (data => {
                // console.log('async userdata ', data)
                setUserdata(JSON.parse(data))
            })
            .catch(err => alert(err))
    }, [])

    // console.log('userdata ', userdata)
  return (
	<View style={styles.container}>
		<StatusBar />
		<Topnavbar navigation={navigation} page={"Mainpage"} />
		<Bottomnavbar navigation={navigation} page={"Mainpage"} />
		<FollowersRandomPost />
	</View>
  )
}

export default Mainpage

const styles = StyleSheet.create({
	container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingVertical: 50,
    }
})