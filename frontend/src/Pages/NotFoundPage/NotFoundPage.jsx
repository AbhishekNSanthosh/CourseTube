import React from 'react'
import './NotFoundPage.css'
import notFound from '../../Assets/undraw_Page_not_found_re_e9o6.png'

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
        <div className="image-container">
            <img src={notFound} alt="" className="image" />
        </div>
    </div>
  )
}

export default NotFoundPage