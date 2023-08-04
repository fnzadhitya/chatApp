import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { containerFull, searchbar2 } from '../../commonCss/pagecss'
import { formHead } from '../../commonCss/formcss'
import Bottomnavbar from '../../components/Bottomnavbar'
import Topnavbar from '../../components/Topnavbar'
import UserCard from '../../cards/UserCard'

const SearchUserPage = ({ navigation }) => {

    const [keyword, setKeyword] = useState("")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const getallusers = async () => {
        if (keyword.length > 0) {
            setLoading(true)
            fetch('http://192.168.1.100:3000/searchuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ keyword: keyword })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.error) {
                        setData([])
                        setError(data.error)
                        setLoading(false)
                    }
                    else if (data.message == 'User Found') {
                        setError(null)
                        setData(data.user)
                        setLoading(false)
                    }
                })
                .catch(err => {
                    setData([])
                    setLoading(false)
                })
        }
        else {
            setData([])
            setError(null)
        }
    }

    useEffect(() => {
        getallusers()
    }, [keyword])

  return (
	<View style={styles.container}>
		<StatusBar />
		<Topnavbar navigation={navigation} />
		<Bottomnavbar navigation={navigation} page={"SearchUserPage"} />
		
		<TextInput placeholder="Search By Username.." style={searchbar2}
                onChangeText={(text) => { setKeyword(text)
                }} 
		/>

		{
            loading ?
                <ActivityIndicator size="large" color="black" />
                :
            	<>
                    {
                        error ?
                            <Text style={formHead}>{error}</Text>
                            :
                            <ScrollView style={styles.userlists}>
                                {
                                    data.map((item, index) => {
                                        return <UserCard key={item.username} user={item}
                                            navigation={navigation} />
                                    })
                                }
                            </ScrollView>
                    }
                </>
        }
	</View>
  )
}

export default SearchUserPage

const styles = StyleSheet.create({
	container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingVertical: 50,
    },
	userlists: {
        width: '96%',
        marginTop: 20,
    }
})