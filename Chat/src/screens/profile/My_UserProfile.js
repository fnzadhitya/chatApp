import { StyleSheet, Text, View, StatusBar, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { containerFull } from '../../commonCss/pagecss'
import { formHead } from '../../commonCss/formcss'
import Bottomnavbar from '../../components/Bottomnavbar'
import Topnavbar from '../../components/Topnavbar'
import FollowersRandomPost from '../../components/FollowersRandomPost'
import nopic from '../../../assets/nopic.png'
import { Foundation } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

const My_UserProfile = ({ navigation }) => {
    const [userdata, setUserdata] = React.useState(null)

    const loaddata = async () => {
        AsyncStorage.getItem('user')
            .then (async (value) => {
                fetch('http://192.168.1.100:3000/userdata', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + JSON.parse(value).token
                    },
                    body: JSON.stringify({ email: JSON.parse(value).user.email })
                })
                    .then (res => res.json()).then(data => {
                        if (data.message == 'User Found') {
                            setUserdata(data.user)
                        }
                        else {
                            alert('Login Again')
                            navigation.navigate('Login')
                        }
                    })
                    .catch(err => {
                        navigation.navigate('Login')
                    })
            })
            .catch(err => {
                navigation.navigate('Login')
            })
    }
    useEffect (() => {
        loaddata()
    }, [])

    console.log('userdata ', userdata)


	
  return (
	<View style={styles.container}>
		<StatusBar />
		<Topnavbar navigation={navigation} page={"My_UserProfile"} />
		<Bottomnavbar navigation={navigation} page={"My_UserProfile"} />
        <Foundation name="refresh" size={30} color="black" style={styles.refresh} onPress={() => loaddata()} />
		
        {
            userdata ?
                <ScrollView>
                    <View style={styles.c1}>
                        {
                            userdata.profilepic.length > 0 ?
                                <Image style={styles.profilepic} source={{ uri: userdata.profilepic }} />
                                :
                                <Image style={styles.profilepic} source={nopic} />
                        }
                        <Text style={styles.txt}>@{userdata.username}</Text>

                        <View style={styles.c11}>
                            <View style={styles.c111}>
                                <Text style={styles.txt1}>Followers</Text>
                                <Text style={styles.txt2}>{userdata.followers.length}</Text>
                            </View>

                            <View style={styles.vr1}></View>

                            <View style={styles.c111}>
                                <Text style={styles.txt1}>Following</Text>
                                <Text style={styles.txt2}>{userdata.following.length}</Text>
                            </View>

                            <View style={styles.vr1}></View>

                            <View style={styles.c111}>
                                <Text style={styles.txt1}>Posts</Text>
                                <Text style={styles.txt2}>{userdata.posts.length}</Text>
                            </View>
                        </View>

                        {
                            userdata.description.length > 0 &&
                            <Text style={styles.description}>{userdata.description}</Text>
                        }

                    </View>
                    {
                        userdata.posts.length > 0 ?
                            <View style={styles.c1}>
                                <Text style={styles.txt}>Your Posts</Text>
                                <View style={styles.c13}>
                                    {
                                        userdata.posts?.map(
                                            (item) => {
                                                return (
                                                    <Image key={item.post} style={styles.postpic} source={{ uri: item.post }} />
                                                ) 
                                            } 
                                        )
                                    }
                                </View>
                            </View>
                            :
                            <View style={styles.c2}>
                                <Text style={styles.txt1}>You have not posted anything yet</Text>
                            </View>
                    }

		        </ScrollView>
                :
                <ActivityIndicator size="large" color="black" />
        }

	</View>
  )
}

export default My_UserProfile

const styles = StyleSheet.create({
	container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingVertical: 50,
    },
    c1: {
        width: '100%',
        alignItems: 'center',
    },
    profilepic: {
        width: 150,
        height: 150,
        borderRadius: 75,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    txt: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    txt1: {
        color: 'black',
        fontSize: 15,
    },
    txt2: {
        color: 'black',
        fontSize: 20,
    },
    c11: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    c111: {
        alignItems: 'center',
    },
    vr1: {
        width: 1,
        height: 50,
        backgroundColor: 'lightgrey'
    },
    description: {
        color: 'black',
        fontSize: 15,
        marginVertical: 10,
        backgroundColor: '#F5F5F5',
        width: '100%',
        padding: 10,
        paddingVertical: 20,
    },
    postpic: {
        width: '30%',
        height: 120,
        margin: 5
    },
    c13: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
        
    },
    c2: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    },
    refresh: {
        position: 'absolute',
        top: 50,
        right: 10,
        zIndex: 1,
    }
})
