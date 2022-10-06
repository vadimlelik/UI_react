import {useState} from "react";
import Modal from "./component/modal/modal";


const App = () => {
    const [isModal, setModal] = useState(false);
    return (<>
        <button onClick={() => setModal(true)}>Click Here</button>

        <Modal
            isVisible={isModal}
            title="Modal Title"
            onClose={() => setModal(false)}
        >
            <p>Add your content here</p>
        </Modal>
    </>);
};

export default App;
