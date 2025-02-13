import { useState } from "react";
import { useWidthContext } from "../context/WidthContext";
import { UserDonate } from "../type/User";
import { validateDonate } from "../utils/validateDonate";
import { useNavigate } from 'react-router-dom';

const ModalDonate = () => {

  const {handleModalDonate} = useWidthContext()
  const [email, setEmail] = useState('')
  const [payment, setPayment] = useState(0)
  const [methodPayment, setMethodPayment] = useState<string | undefined>(undefined)
  const [errors, setErrors] = useState<UserDonate | null>(null)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const data: UserDonate = { email, payment, methodPayment: methodPayment } 
    const validadeErros = validateDonate(data) 
    if(Object.keys(validadeErros).length > 0) {
      setErrors(validadeErros) 
      return
    }
    navigate('/thank')
    if (handleModalDonate) {
      handleModalDonate()
    }
  }

  return (
        <dialog className="w-[380px] max-w-[380px] h-fit flex flex-col items-center rounded-3xl py-8 px-8 m-auto fixed z-20 top-8">
            <h1 className="text-center text-4xl font-bold mb-10">Choose your Donate</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-pink-500 font-semibold text-xs">EMAIL<strong className="text-blue-500">*</strong></label>
                      <input className="border border-gray-500 w-full max-w-full h-11 rounded-lg px-2" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email-donate" title="Enter your email" placeholder="Enter your email"/>
                      {errors?.email && (
                        <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-pink-500 font-semibold text-xs">HOW MUCH CAN YOU HELP?<strong className="text-blue-500">*</strong></label>
                      <input className="border border-gray-500 w-full max-w-full h-11 rounded-lg px-2" type="number" value={payment} onChange={(e) => setPayment(Number(e.target.value))} placeholder="R$ 0,00" name="ajuda" id="ajuda"/>
                      {errors?.payment && (
                        <small className="text-xs text-red-500 mt-1">{errors?.payment}</small>
                      )}
                    </div>
            
                    <div className={errors?.methodPayment ? 'flex flex-col gap-2' : ''}>
                      <label className="text-pink-500 font-semibold text-xs">PAYMENT METHOD<strong className="text-blue-500">*</strong></label>     
                      <div className="flex items-center gap-3">
                        <div className={`border ${methodPayment === "pix" ? "border-pink-500" : "border-blue-400"} rounded-lg py-3 w-24 flex items-center text-[#1E1F27] justify-between px-2 font-semibold`}>
                          <label htmlFor="pix">Pix</label>
                          <input
                            className="appearance-none bg-[#1E1F27] w-4 h-4 rounded-full cursor-pointer"
                            type="radio"
                            name="methodPayment"
                            id="pix"
                            value="pix"
                            checked={methodPayment === "pix"}
                            onChange={(e) => setMethodPayment(e.target.value)}
                          />
                        </div>
                        <div className={`border ${methodPayment === "card" ? "border-pink-500" : "border-blue-400"} rounded-lg py-3 w-[115px] flex items-center text-[#1E1F27] justify-between px-2 font-semibold`}>
                          <label htmlFor="card">Card Credit</label>
                          <input
                            className="appearance-none bg-[#1E1F27] w-4 h-4 rounded-full cursor-pointer"
                            type="radio"
                            name="methodPayment"
                            id="card"
                            value="card"
                            checked={methodPayment === "card"}
                            onChange={(e) => setMethodPayment(e.target.value)}
                          />
                        </div>
                        <div className={`border ${methodPayment === "picpay" ? "border-pink-500" : "border-blue-400"} rounded-lg py-3 w-24 flex items-center text-[#1E1F27] justify-between px-2 font-semibold`}>
                          <label htmlFor="picpay">Picpay</label>
                          <input
                            className="appearance-none bg-[#1E1F27] w-4 h-4 rounded-full cursor-pointer"
                            type="radio"
                            name="methodPayment"
                            id="picpay"
                            value="picpay"
                            checked={methodPayment === "picpay"}
                            onChange={(e) => setMethodPayment(e.target.value)}
                          />
                        </div>                       
                      </div>
                      {errors?.methodPayment && (
                            <small className="text-xs text-red-500 mt-1">{errors?.methodPayment}</small>
                      )}
                    </div>
                      <button className="rounded-3xl bg-pink-500 py-3 px-4 text-sm flex items-center self-center font-bold text-white cursor-pointer" type="submit">
                        <i className="fa fa-heart mr-2 text-xl"></i>
                        I wanna Help!
                      </button>           
            </form>
            <button onClick={handleModalDonate} className="bg-[#37383F] rounded-full text-white cursor-pointer flex items-center gap-2 px-6 py-3 text-sm font-bold mt-4"> 
                <i className="fas fa-chevron-left text-xl font-normal"></i>
                Cancel    
            </button>
        </dialog>
  )
}

export default ModalDonate