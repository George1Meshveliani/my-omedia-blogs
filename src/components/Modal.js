import UserComment from "./UserComment";

const Modal = ( {showModal, setShowModal} ) => {
    return <>{showModal ? 
    <div>
        <UserComment />
        <button onClick={() => setShowModal(prev => !prev)}>X</button>
    </div> : null}</>
}

export default Modal;