import HomeStyles from './home.module.css';
import { useState } from "react"
import { useEffect } from 'react';
import axiosInstance from '../../../Config/axios/AxiosInstance';

const Home = () => {

    const [Post, setPost] = useState([]);
    console.log(Post)
    useEffect(()=>{
        fetchPost();
    },[])

    const fetchPost = async() => {
        const getPosts = await axiosInstance.get("/tour-planned-post")
        setPost(getPosts.data);
    }

    return(<>
      {
       Post.map((item)=>{
           return(
                 <div className={HomeStyles.wrapper} key={item._id}>
                    <div>
                        {item.from}
                    </div>
                    <div>
                        {item._id}
                    </div>
                    <div>
                       Size : {item.size}
                    </div>
                    <div>
                       Likes  {item.likes}
                    </div>
                 </div>
           )
       })
      } 
    </>)
}

export default Home;