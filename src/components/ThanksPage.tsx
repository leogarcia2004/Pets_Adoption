import { useNavigate } from "react-router-dom";
import { useWidthContext } from "../context/WidthContext";
import ModalDonate from "./ModalDonate";

const ThanksPage = () => {

  const {modalDonateOpen} = useWidthContext()
  const navigate = useNavigate()

  const usePreviousURL = () => {
    navigate("/")
  };

  return (
    <>
      {modalDonateOpen && <ModalDonate />}
    <div className="bg-[#F5F5F5] h-screen lg:px-36 px-4 py-20">
      <button onClick={usePreviousURL} className="bg-[#37383F] rounded-full text-white cursor-pointer flex items-center gap-2 px-6 py-3 mb-12"> 
          <i className="fas fa-chevron-left text-xl"></i>
          Back     
        </button>
      <h1 className="text-5xl text-gray-900 font-bold mb-5">Success!</h1>
      <p className="text-gray-700 font-medium w-[440px]">Free your creativity and create a beautiful success page to thank your user for subscribing/donating to our project.</p>
    </div>
    </>
  )
}

export default ThanksPage