import React, {useEffect, useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import style from './post.module.css'
import Modal from "./Modal";


const Post = ({title, body}) => {
    const ref = useRef(null)

    useEffect(() => {

        const handleClick = (e) => {
            if (!ref.current.contains(e.target)) {
                console.log('click, вне модалки')
            }
        }
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    const [isModal, setIsModal] = useState(false)

    const handleCloseModal = () => {
        setIsModal(false)
    }

    return <div className={style.postContainer} onClick={() => setIsModal(true)}>
        <div>{title}</div>
        {isModal && ReactDOM.createPortal(<div ref={ref}><Modal
            handleCloseModal={handleCloseModal}>{body}</Modal>
        </div>, document.getElementById('modalRoot'))

        }
    </div>
}


export default Post