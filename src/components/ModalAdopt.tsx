
import WhiteDog from '../public/adoptionPage/icon_white_dog.png'
import { useWidthContext } from "../context/WidthContext";
import { UserAdopt} from "../type/User";
import { validateAdopt } from "../utils/validateAdopt";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ModalAdopt = () => {

    const {handleModalAdopt} = useWidthContext()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [dateBirth, setDateBirth] = useState('')
    const [errors, setErrors] = useState<UserAdopt | null>(null)
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const data: UserAdopt = { name, email, dateBirth } 
        const validadeErros = validateAdopt(data) 
        if(Object.keys(validadeErros).length > 0) {
          setErrors(validadeErros) 
          return
        }   
        navigate('/thank')
        if (handleModalAdopt) {
          handleModalAdopt()
        }
    }

  return ( 
        <dialog  className="w-[380px] max-w-[380px] h-fit flex flex-col rounded-3xl py-8 px-7 m-auto fixed z-20 top-8">
            <div className='flex flex-col items-center gap-2'>
                <h1 className="text-center text-4xl font-bold ">Apply to Adopt</h1>
                <span className="text-sm font-medium">Small text description can goes here</span>
            </div>
            <form onSubmit={handleSubmit} className='mt-10' action="index3.html">

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-pink-500 font-semibold text-xs">EMAIL<strong className="text-blue-500">*</strong></label>
                        <input className="border border-gray-500 w-full h-11 rounded-lg px-2" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" title="Email" placeholder="Enter your email"/>
                        {errors?.email && (
                            <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-pink-500 font-semibold text-xs">FULL NAME<strong className="text-blue-500">*</strong></label>
                        <input className="border border-gray-500 w-full h-11 rounded-lg px-2" value={name} onChange={(e) => setName(e.target.value)} type="text" name="nome" id="nome" title="Full Name" placeholder="Enter your full name"/>
                        {errors?.name && (
                            <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-pink-500 font-semibold text-xs">DATE OF BIRTH<strong className="text-blue-500">*</strong></label>
                        <input className="border border-gray-500 text-sm w-full h-11 rounded-lg px-2" value={dateBirth} onChange={(e) => setDateBirth(e.target.value)} type="date" name="data" id="data" title="Date of Birth" placeholder="Enter your date of birth"/>
                        {errors?.dateBirth && (
                            <small className="text-xs text-red-500 mt-1">{errors?.dateBirth}</small>
                        )}
                    </div>           
                    <div className='flex items-center gap-2 mt-2'>          
                        <input className='appearance-none bg-[#1E1F27] w-5 h-5 rounded-full cursor-pointer' type="checkbox" required name="checar" id="checar" title="Agree to Privacy Policy and Terms of Conditions"/> 
                        <label className='text-[11px]' >I agree with <a className='text-pink-500 font-medium' href="https://google.com.br" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a className='text-pink-500 font-medium' href="https://google.com.br" target="_blank" rel="noopener noreferrer"> Terms of Conditions</a></label>
                    </div>
                </div>
                    <button className="bg-[#04C27F] rounded-lg w-full text-white cursor-pointer flex justify-center items-center gap-2 h-12 py-3 text-sm font-bold mt-3" type="submit" >
                            <img className='w-7' src={WhiteDog} alt="Ícone cachorro desenho"/>
                            I wanna Adopt!
                    </button>       
            </form>
            <button onClick={handleModalAdopt} className="bg-[#37383F] rounded-lg w-full text-white cursor-pointer flex justify-center items-center gap-2 h-12 py-3 text-sm font-bold mt-3"> 
                <i className="fas fa-chevron-left text-xl font-normal"></i>
                Cancel    
            </button>
        </dialog>
  )
}

export default ModalAdopt