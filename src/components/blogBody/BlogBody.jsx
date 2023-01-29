import { useState } from 'react'
import HomeIcon from '../icons/HomeIcon'
import SaveIcon from '../icons/SaveIcon'
import axios from '../../services/axios'
import './style.css'


const BlogBody = () => {
    const initialState = {
        title: '',
        description: ''
    }
    const [formData, setFormData] = useState(initialState)
    return (
        <>
            <div>
                <HomeIcon />
            </div>
            <div onClick={() => {
                axios.post(`/addBlog`, { formData }).then((response) => {
                    console.log(response, 'response');
                })

            }} >
                <SaveIcon />
            </div>
                <form>
            <div className="blogBody" >
                    <div className='titleInput'>
                        <input type='text'
                            name='title'
                            value={formData.title}
                            onChange={(e) => {
                                setFormData({ ...formData, [e.target.name]: e.target.value })
                            }}
                            placeholder=' Enter title... ' />
                    </div>
                    <div className='text-Area'>

                        <textarea name="description" id="" cols="30" rows="10" className='area-text'
                            placeholder='write something... '
                            onChange={(e) => {
                                setFormData({ ...formData, [e.target.name]: e.target.value })
                            }}>
                        </textarea>
                    </div>
            </div>
                </form>

        </>
    )
}

export default BlogBody