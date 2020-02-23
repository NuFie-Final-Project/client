import React from 'react'
import {View , Text} from 'react-native'
import {useSelector} from 'react-redux'
import PostCard from '../components/FeedsItem'

export default function CategoryScreen () {
    const listPost = useSelector(state => state.activity.category)
    const dataReady = () => {
        return listPost.map((el) => {
            return <PostCard key={el._id} data={el}/>
        })
    }
    return (
        <View>
            {
                dataReady()
            }
        </View>
    )
} 