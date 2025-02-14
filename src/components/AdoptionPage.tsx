import { Link } from "react-router-dom"
import {animalsAdoption} from "./constantes"
import WhiteDog from "../public/adoptionPage/icon_white_dog.png"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useWidthContext } from "../context/WidthContext";
import ModalDonate from "../components/ModalDonate";

const AdoptionPage = () => {

  const {windowWidth, modalDonateOpen} = useWidthContext()

  return (
    <>
    {modalDonateOpen && <ModalDonate />}
    <div className="bg-[#1E1F27] px-4 flex flex-col items-center py-28">
          <Link to="/">
            <button className="bg-[#37383F] rounded-full text-white cursor-pointer flex items-center gap-2 px-6 py-3 mb-24"> 
                <i className="fas fa-chevron-left text-xl"></i>
                Back     
            </button>
          </Link>
        <h1 className="text-white font-bold text-center md:text-6xl text-3xl">Our Adoptable Pets</h1>
        <ul className="flex flex-wrap justify-center gap-10 mt-20">
          {
            windowWidth > 1024 ?
            (
              animalsAdoption.map((animal, index) => {
                return (
                  <li className="flex flex-col items-center gap-3" key={index}>
                      <img src={animal.image} alt="Foto animal"/>
                      <span className="text-white text-3xl font-bold">{animal.name}</span>
                      <button className="bg-pink-500 text-white rounded-full flex justify-center items-center gap-3 w-56 py-2.5 cursor-pointer">
                        <img src={WhiteDog} alt="Ícone cachorro desenho"/>
                        <span>See more</span>
                      </button>
                  </li>
                )
              })
            )
            :
            (
              <Splide
                options={{
                  type: 'loop',
                  perPage: 1,
                  perMove: 1,
                  arrows: false,
                  pagination: true,
                }}
                
              >
                {
                  animalsAdoption.map((animal, index) => {
                    return (
                      <SplideSlide key={index}>
                        <li className="flex flex-col items-center gap-3">
                            <img src={animal.image} alt="Foto animal"/>
                            <span className="text-white text-3xl font-bold">{animal.name}</span>
                            <button className="bg-pink-500 text-white rounded-full flex justify-center items-center gap-3 w-56 py-2.5 cursor-pointer">
                              <img src={WhiteDog} alt="Ícone cachorro desenho"/>
                              <span>See more</span>
                            </button>
                        </li>
                      </SplideSlide>
                    )
                  })
                }
              </Splide>
            )
          }
          
        </ul>
    </div>
    </>
    
  )
}

export default AdoptionPage