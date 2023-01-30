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

            <p>{props?.data?.description}</p>
            </div>

        </>
    )
}

export default Blog;