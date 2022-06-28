import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'
import './Home.css'
import dummyPostText from "../../assets/dummyPostText.json"
import dummyPostTime from "../../assets/dummyPostTime.json"
import dummyChatText from "../../assets/dummyChatText.json"
import MemberList from './MemberActiveStatusList'
import ChatList from './ChatList'
import Post from './Post'

const Home = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get("https://picsum.photos/v2/list")
                let resPost = [...res.data]
                let postWithAdditionalDetails = resPost.map(post => {
                    let likeCount = Math.ceil(Math.random() * 1000)
                    let commentCount = Math.ceil(Math.random() * 25)
                    let text = dummyPostTime[Math.ceil(Math.random() * 5)]
                    let time = dummyPostText[Math.ceil(Math.random() * 3)]
                    // let message = dummyChatText[Math.ceil(Math.random()*5)]
                    let isLikedByCurrentUser = false
                    return {
                        ...post,
                        likeCount,
                        isLikedByCurrentUser,
                        commentCount,
                        text,
                        time
                    }
                })
                setPost(postWithAdditionalDetails)
            } catch (err) {
                console.log(err)
            }
        }
        getPosts()
    }, [])

  
    let randomChatList = post.filter(post => Number(post.id) % 7 === 0).map(post => {
        post.chats = dummyChatText[Math.ceil(Math.random()*5)]
        return post
    }) 
    return (
        <Container className="post-container">
            <Row>
                <MemberList posts={ post }/>
                <Post posts={post} setPosts={setPost}/>
               <ChatList posts={ randomChatList }/>
            </Row>
        </Container>
    )
}

export default Home


  // useEffect(() => {
    //     axios.get('https://picsum.photos/v2/list')
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err))
    // },[])