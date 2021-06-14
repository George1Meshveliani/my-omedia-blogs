import UserComment from "./UserComment";

const Modal = ( {showModal, setShowModal} ) => {
    return <>{showModal ? 
    <div>
        <UserComment />
        <h1>X</h1>
    </div> : null}</>
}

export default Modal;