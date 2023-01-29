
import './style.css'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    // console.log(props,'propssssssssssssssssssss');
    const navigate = useNavigate()
    return (
        <>
            {/* <div className="cardMain" style={{ cursor: 'pointer' }}  >
                
                <h1 onClick={() => {
                    navigate(`/blog/${props?.data?._id}`)
                }}>{props?.data?.title}</h1>
            </div> */}

            {/* <div className='main'> */}


                <div className="cardMain">

                    <h1 onClick={() => {
                        navigate(`/blog/${props?.data?._id}`)
                    }}>{props?.data?.title}</h1>

                </div>
            {/* </div> */}
        </>
    )
}

export default Card;