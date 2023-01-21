import {useEffect, useState} from "react";
import Modal from "./component/modal/modal";
import PostList from "./component/PostList";


const App = () => {
    const [data,setData] = useState([])

    const fetchData =  async ()=>{
      const data = await  fetch('https://jsonplaceholder.typicode.com/posts')
        const response  = await data.json()
        setData(response)
    }
    useEffect(()=>{
        fetchData()
    //    fetchData
    },[])
    return(<>{
        data && <PostList posts={data}/>}</>)



    // const [isModal, setModal] = useState(false);
    // return (<>
    //     <button onClick={() => setModal(true)}>Click Here</button>
    //
    //     <Modal
    //         isVisible={isModal}
    //         title="Modal Title"
    //         onClose={() => setModal(false)}
    //     >
    //         <p>Add your content here</p>
    //     </Modal>
    // </>);
};

export default App;
