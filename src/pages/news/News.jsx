import React from 'react'
import {data} from '../../components/newsdata/NewsData'
import { useParams } from 'react-router-dom';

function News() {
    const {id} = useParams()
    const singlePost = data.filter((item) => {
        return item.id == id
    })
  return (
    <div>
      <h1>{singlePost.text1}</h1>
    </div>
  )
}

export default News
