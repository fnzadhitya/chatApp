import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { icons3 } from '../commonCss/pagecss';
const Post_Big_Card = (
    {
        post_pic,
        profile_image,
        username,
        likes,
        comments,
    }
) => {

    // console.log(post_pic, profile_pic, username, likes, comments)
    // console.log(comments)


    const [isliked, setIsliked] = useState(false)
    const [showcomments, setShowcomments] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.c1}>
                <Image source={{ uri: profile_image }} style={styles.profilepic} />
                <Text style={styles.username}>{username}</Text>
            </View>
            <Image source={{ uri: post_pic }} style={styles.image} />

            <View style={styles.s2}>
                {
                    isliked ?
                        <View style={styles.s21}>
                            <AntDesign name="heart" size={24} color="black" style={styles.iconliked} onPress={() => {
                                setIsliked(false)
                            }} />
                            <Text style={styles.liked}>{likes.length + 1}</Text>
                        </View>
                        :

                        <View style={styles.s21}>
                            <AntDesign name="hearto" size={24} color="black" style={icons3} onPress={() => {
                                setIsliked(true)
                            }} />
                            <Text style={styles.notliked}>{likes.length}</Text>
                        </View>
                }


                <View style={styles.s22}>
                    <FontAwesome name="comment" size={24} color="black" style={icons3} onPress={
                        () => {
                            setShowcomments(!showcomments)
                        }
                    } />
                </View>
            </View>


            {
                showcomments == true &&
                <View style={styles.s3}>
                    {
                        comments.map((item, index) => {
                            return (
                                <View style={styles.s31} key={item.id}>
                                    <Text style={styles.commentuser}>{item.username}</Text>
                                    <Text style={styles.commenttext}>{item.comment}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            }
        </View>
    )
}

export default Post_Big_Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        // height: 350,
        borderRadius: 10,
        marginVertical: 10,
        marginTop: 1,
        overflow: 'hidden',
        borderColor: 'lightgrey',
        borderWidth: 1,
    },
    c1: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    profilepic: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderColor: 'black',
        borderWidth: 1,
    },
    username: {
        color: 'black',
        marginLeft: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    s2: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
    },
    s21: {
        // width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    notliked: {
        color: 'black',
        marginLeft: 5,
        fontSize: 25,
    },
    liked: {
        color: '#DC143C',
        marginLeft: 16.3,
        fontSize: 25,
    },
    iconliked: {
        color: '#DC143C',
        fontSize: 25,
    },
    s22: {
        marginLeft: 20,
    },
    s3: {
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
    },
    commentuser: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,

    },
    commenttext: {
        color: 'black',
        fontSize: 17,
        marginLeft: 5,
    },
    s31: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
    }

})