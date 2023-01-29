import { CiHome } from 'react-icons/ci'
import { Link } from 'react-router-dom'


const HomeIcon = () => {
    return (
        <>
            <div style={{ cursor: 'pointer' }}  >
                <Link to='/' >
                    <CiHome style={{fontSize:'25px'}} />
                </Link>
            </div>
                {/* <BsSave2/> */}
        </>
    )
}
export default HomeIcon