
import axios from '../services/axios'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card from "../components/card/Card"
import AddIcon from "../components/icons/AddIcon"
import Navbar from "../components/navbar/Navbar"
import '../components/card/style.css'



const Home = () => {
    const [blogData, setBlogData] = useState()
    useEffect(() => {
        axios.get(`/getAllBlog`).then((response) => {
            setBlogData(response.data)
        })

    }, [])
    return (
        <>
            <Navbar />
            {/* <Card /> */}
            <div className='main'>
            {
                blogData?.map((values) => (<Card data={values} />))
            }
            </div>
            <div style={{ cursor: "pointer" }} >
                <Link to='/create' >
                    <AddIcon />
                </Link>
            </div>
        </>
    )
}

export default Home