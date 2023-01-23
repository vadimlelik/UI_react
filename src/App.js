import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Modal from './component/Modal'
import PostList from "./component/PostList";

const App = () => {

    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState([])
    const refModal = useRef(null);

    const handleCloseModal = () => {
        setIsModal(false);
    };
    const handleOpenModal = () => {
        setIsModal(true)
    }

    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const response = await data.json()
        setData(response)
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {

        const handleClick = (e) => {
            console.log('click');
            console.log(refModal.current === e.target);
            if (isModal && (refModal.current === e.target)) {
                handleCloseModal()
            }
        };
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };

    }, []);

    console.log(isModal);
    return (<>{
        data && <PostList posts={data} handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} />}

        {data && isModal &&
            ReactDOM.createPortal(
                <div>
                    <Modal
                        handleCloseModal={handleCloseModal}
                        refModal={refModal}
                    >
                        Тут Будет текст
                    </Modal>
                </div>,
                document.getElementById("modalRoot")
            )}

    </>)

};

export default App;
