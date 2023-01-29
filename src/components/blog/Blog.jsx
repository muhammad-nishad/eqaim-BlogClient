import HomeIcon from "../icons/HomeIcon";
import Navbar from "../navbar/Navbar";
import './style.css'

const Blog = (props) => {
    console.log(props, 'propssssss');
    return (
        <>
            <Navbar />
            <div className="iconArea" >
                <HomeIcon  />
            </div>
            <div  className="blogArea" >

            <h2>{props?.data?.description}</h2>
            </div>

        </>
    )
}

export default Blog;