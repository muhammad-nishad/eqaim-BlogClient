import Blog from "../components/blog/Blog";
import Navbar from "../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from '../services/axios'
const NewBlogScreen = () => {
    const [blog, setBlog] = useState()
    const { id } = useParams();
    useEffect(() => {
        axios.get(`/getOnePost/${id}`).then((response) => {
            setBlog(response.data)

            console.log(response.data, 'responseof the geta ');
        })

    }, [])
    return (
        <>
            {/* <Navbar /> */}

            <Blog data={blog} />


        </>
    )
}

export default NewBlogScreen;