import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post_Big_Card from '../cards/Post_Big_Card'

const FollowersRandomPost = () => {

	let data = [
        {
            id: 1,
            username: 'Marshal',
            profile_image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&w=1000&q=80',
            image: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
            likes: [
            ],
            comments: [
            ]
        },
        {
            id: 2,
            username: 'Robet',
            profile_image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2023/05/male-lifting-weight-1296x728-header.jpg?w=1155&h=1528',
            image: "https://img.freepik.com/premium-photo/lake-with-mountain-background_664601-3477.jpg",
            likes: [
            ],
            comments: [
            ]
        },
        {
            id: 3,
            username: 'Jona',
            profile_image: 'https://manofmany.com/wp-content/uploads/2021/05/Best-Short-Hairstyles-for-Men-1200x900.jpg',
            image: "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?cs=srgb&dl=pexels-craig-adderley-1563355.jpg&fm=jpg",
            likes: [
            ],
            comments: [
            ]
        },
        {
            id: 4,
            username: 'John H',
            profile_image: 'https://img.freepik.com/premium-photo/photography-hobby-young-stylish-man-standing-city-street-taking-photos-camera-looking-forward_386167-7018.jpg',
            image: "https://birma-ing.rs/transport/wp-content/uploads/sites/2/2015/04/Free-HD-Truck-Wallpaper.jpg",
            likes: [
            ],
            comments: [
            ]
        },
        {
            id: 5,
            username: 'Zoe Naro',
            profile_image: 'https://media.istockphoto.com/id/1210526465/photo/young-man-photographer-taking-pictures-in-a-city.jpg?s=612x612&w=0&k=20&c=V3_rXoQkajF_7ucbHWTjnkOeuPxaiLjXJzB1q1aw0Uw=',
            image: "https://i.pinimg.com/originals/5e/09/fb/5e09fb85e58db92b61a8e0636d151a37.jpg",
            likes: [
            ],
            comments: [
            ]
        },
        
    ]

	// console.log(data[0].username)
  return (
	<ScrollView style={styles.container}>
		{
			data.map((item) =>  {
				return (
					<Post_Big_Card 
						key= {item.id}
						username= {item.username}
						profile_image= {item.profile_image}
						post_pic= {item.image}
						likes= {item.likes}
						comments ={item.comments}
					/>
				)
			})
		}
	</ScrollView>
  )
}

export default FollowersRandomPost

const styles = StyleSheet.create({
	container: {
        width: '100%',
        flexDirection: 'column',
    }
})