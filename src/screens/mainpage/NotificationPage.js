import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { containerFull } from '../../commonCss/pagecss'
import { formHead } from '../../commonCss/formcss'
import Bottomnavbar from '../../components/Bottomnavbar'
import Topnavbar from '../../components/Topnavbar'
import FollowersRandomPost from '../../components/FollowersRandomPost'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const NotificationPage = ({ navigation }) => {
  return (
	<View style={styles.container}>
		<StatusBar />
		<Topnavbar navigation={navigation} />
		<Bottomnavbar navigation={navigation} page={"NotificationPage"} />
		<View>
			<View style={styles.notification}>
				<Text style={styles.c1}>Some Notifications</Text>
			</View>
			<View style={styles.notification}>
				<Text style={styles.c1}>Some Notifications</Text>
			</View>
			<View style={styles.notification}>
				<Text style={styles.c1}>Some Notifications</Text>
			</View>
			<View style={styles.notification}>
				<Text style={styles.c1}>Some Notifications</Text>
			</View>
			<View style={styles.notification}>
				<Text style={styles.c1}>Some Notifications</Text>
			</View>
		</View>
	</View>
  )
}

export default NotificationPage

const styles = StyleSheet.create({
	container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingVertical: 50,
    },
    c1: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
		justifyContent: 'center',
    },
    notification: {
        width: '98%',
        height: 50,
        backgroundColor: '#F5F5F5',
        marginTop: 10,
    }
})
