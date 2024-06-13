import { AiOutlineClose } from "react-icons/ai";
import {createPortal} from "react-dom";

const Modal = ({onClose,isOpen,children}) => {
  return createPortal(
    <>
    {isOpen && (
     <div  
     className=" absolute top-0 z-40 grid backdrop-blur h-screen place-items-center w-screen">
      <div className=" m-auto z-50 relative min-h-[200px] min-w-[80%] bg-white p-4">
      <div className="flex justify-end">
        <AiOutlineClose onClick={onClose} className="text-2xl self-end"/>
      </div>
      {children}
      </div>
      
     </div>
      )}
    </>
  ,document.getElementById("modal-root")
  );
};

export default Modal;
