import CatDog from '../public/homePage/cat_dog_home.png'
import CatDog2 from '../public/images/homePage/imagem_cachorro_gato2.png'
import HeartLeft from '../public/homePage/heart_left.png'
import HeartRight from '../public/homePage/heart_right.png'
import Cat from '../public/homePage/cat.png'
import Dog from '../public/homePage/dog.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useWidthContext } from "../context/WidthContext";
import { animalsCarousel, services } from './constantes';
import { Link } from 'react-router-dom'
import ModalAdopt from './ModalAdopt'
import ModalDonate from './ModalDonate'

const HomePage = () => {

  const {windowWidth, modalAdoptOpen, modalDonateOpen, handleModalDonate, handleModalAdopt} = useWidthContext()

  return (
    <>
    {modalDonateOpen && <ModalDonate />}
    {modalAdoptOpen && <ModalAdopt />}
      <section className='bg-[#F5F5F5] flex md:flex-row md:justify-center flex-col md:gap-20 gap-12  px-4 py-20'>
          <div className='max-w-[550px] flex flex-col'>
            <h1 className='text-5xl font-bold leading-16 mb-10'>Forever Homes Shelter</h1>
            <p className=' md:text-lg font-medium leading-10 mb-4'>Our mission is to rescue and provide rehabilitation to dogs and cats that are critically injured or neglected. We have already saved the lives of 10,000 animals. We are not just a rescue, we are a refuge.</p>
            <h3 className='text-2xl font-bold mb-4'>Your Gift Helps Save Lives</h3>
            <div className='flex gap-6'>
              <button onClick={handleModalDonate} className="rounded-3xl bg-pink-600 py-3 px-4 flex items-center font-bold text-white cursor-pointer">
                <i className="fa fa-heart mr-2 text-xl"></i>
                Donate
              </button>
              <button onClick={handleModalAdopt} className='border-black border-2 py-2 px-6 rounded-full flex items-center gap-2 font-semibold text-sm cursor-pointer'>
                  <i className="fas fa-dog text-2xl"></i>
                  Apply to Adopt
              </button>
            </div>
          </div>
          <img className='xl:w-[450px] mx-auto my-auto xl:my-0 md:mx-0 w-80 max-h-[450px]' src={CatDog} alt="Foto cachorro e gato"/>                 
      </section>

      <section className='bg-[#1E1F27] lg:px-36 px-4 flex flex-col items-center py-28'>
          <h1 className='text-white font-bold text-center md:text-5xl text-3xl max-w-[800px] mb-20'>With your help, we  accomplished these goals</h1>
          <div className='flex md:flex-row flex-col md:gap-24 gap-16 mb-16'>
              <div className='flex flex-col gap-3 items-center'>
                  <span className='text-[#F8DB46] font-bold md:text-5xl text-3xl'>1400</span>
                  <span className='text-white font-bold text-center md:text-3xl text-2xl'>Animals Rescued</span>
              </div>
              <div className='flex flex-col gap-3 items-center'>
                  <span className='text-[#F8DB46] font-bold md:text-5xl text-3xl'>$1.4 Million</span>
                  <span className='text-white font-bold text-center md:text-3xl text-2xl'>Raised</span>
              </div>
              <div className='flex flex-col gap-3 items-center'>
                  <span className='text-[#F8DB46] font-bold md:text-5xl text-3xl'>940</span>
                  <span className='text-white font-bold text-center md:text-3xl text-2xl'>Tails Found a Home</span>
              </div>
          </div>
          <div >
            <Splide
              options={{
                type: "loop",
                perPage: windowWidth > 768 ? 4 : 1,
                perMove: 1,
                arrows: windowWidth > 768 ? true : false,
                pagination: windowWidth > 768 ? false : true,
              }}
              className="custom-splide"
            >
              {animalsCarousel.map((animal, index) => (
                <SplideSlide key={index} className="carousel-slide">
                  <img src={animal} alt="Imagem de um cachorro ou gato" />
                </SplideSlide>
              ))}
            </Splide>
          </div>       
      </section>

      <section className='bg-[#1E1F27] px-4 py-20'>
        <h1 className='text-white font-bold text-center md:text-4xl text-3xl mb-16'>With your donations we provide</h1>
        <div >
          {
            windowWidth > 768 ?
              <ul className='flex justify-center flex-wrap gap-10'>
                {services.map((service, index) => (
                  <li key={index} className="max-w-[320px] border-2 border-white rounded-2xl p-6">
                    <div className='flex items-center justify-between'>
                      <h3 className="text-xl text-white font-bold mt-2">{service.title}</h3>
                      <img src={service.image} alt={service.title} className="w-16 h-16" />              
                    </div>
                    <p className=" text-gray-400 font-semibold">{service.description}</p>
                  </li>
                ))}
              </ul>
            :
            <div className="flex justify-center items-center w-full">
              <Splide
                className="w-full max-w-[400px]"
                options={{
                  type: "loop",
                  perPage: 1,
                  perMove: 1,
                  arrows: false,
                  pagination: true,
                }}
                
              >
                {services.map((service, index) => (
                  <SplideSlide key={index} className="carousel-slide flex justify-center">
                    <div className="max-w-[320px] border-2 border-white rounded-2xl p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl text-white font-bold mt-2">{service.title}</h3>
                        <img src={service.image} alt={service.title} className="w-16 h-16" />
                      </div>
                      <p className="text-gray-400 font-semibold">{service.description}</p>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
          </div>
          }         
        </div>
      </section>

      <section className='bg-[#F5F5F5] lg:px-36 px-4 py-20'>
        <h1 className='text-5xl text-[#1E1F27] font-bold text-center md:mb-10 mb-14'>Adoption information</h1>
        <div className='flex md:flex-row flex-col justify-center gap-16'>
            <img className='xl:w-[480px] w-80 max-h-[480px]' src={CatDog2} alt="Foto cachorro e gato"/>
            <div className='flex flex-col justify-center'>
                <span className='text-2xl text-[#1E1F27] font-bold '>Applicants must:</span>
                <ul className='text-[#1E1F27] flex flex-col gap-4 font-medium opacity-95 md:text-xl text-lg xl:w-[550px] max-w-[450px] mt-6 mb-7 '>
                    <li >Live within a 90 mile radius of our shelter</li>
                    <li >Accept the financial responsibility of vet care and pet care</li>
                    <li >Donate $400 to adopt their dog/puppy; $125 for a cat; $150 for a kitten</li>
                    <li >Be over 23 years of age to adopt a dog and 21 years of age to adopt a cat</li>
                    <li >Be ready to adopt within 7-10 days</li>
                </ul>
                <button onClick={handleModalAdopt} className='bg-[#1E1F27] w-40 text-white border-2 py-3 px-6 rounded-full flex items-center font-bold text-sm cursor-pointer'>
                  Apply to Adopt
                </button> 
            </div>
        </div>
      </section>

      <section className={`bg-[#1E1F27] px-4 pt-20 ${windowWidth > 1024 ? 'pb-0' : 'pb-20'}`}>
        <div className='pb-28 lg:px-36'>
            <div className='flex md:flex-row flex-col justify-center items-center xl:gap-24 gap-12 mb-20'>
                <img className='w-10' src={HeartLeft} alt="Foto coração de desenho"/>
                <h1 className='md:text-5xl text-4xl text-white text-center font-bold'>How you can make  a difference</h1>
                <img className='w-10' src={HeartRight} alt="Foto coração de desenho"/>
            </div>
            <ul className='flex xl:flex-nowrap flex-wrap justify-center gap-6'>
                <li className='border border-white rounded-2xl px-6 py-8 w-64 h-72 max-h-72'>
                    <div className='flex flex-col items-center gap-8'>
                        <h4 className='text-xl text-white text-center font-bold'>Adopt or Foster</h4>
                        <p className='text-gray-400 text-center font-semibold'>Provide a forever or temporary home to a homeless animal.</p>
                        <Link to="/adoptables">
                          <button className='bg-[#04C27F] rounded-xl font-bold py-3.5 w-48 cursor-pointer'>View Adoptables</button>
                        </Link>
                    </div>
                </li>
                <li className='border border-white rounded-2xl px-6 py-8 w-64 h-72 max-h-72'>
                    <div className='flex flex-col items-center gap-8'>
                        <h4 className='text-xl text-white text-center font-bold'>Volunteer</h4>
                        <p className='text-gray-400 text-center font-semibold'>We are always in need of passionate and friendly volunteers</p>
                        <button className='bg-[#F8DB46] rounded-xl font-bold py-3.5 w-48 cursor-pointer'>Get Involved</button>
                    </div>
                </li>
                <li className='border border-white rounded-2xl px-6 py-8 w-64 h-72 max-h-72'>
                    <div className='flex flex-col items-center gap-8'>
                        <h4 className='text-xl text-white text-center font-bold'>Donate Monthly</h4>
                        <p className='text-gray-400 text-center font-semibold'>Regular donations is a reliable stream of funds to help sustain.</p>
                        <button className='bg-pink-600 rounded-xl text-white font-bold py-3.5 w-48 cursor-pointer'>Give Monthly</button>
                    </div>
                </li>
                <li className='border border-white rounded-2xl px-6 py-8 w-64 h-72 max-h-72'>
                    <div className='flex flex-col items-center gap-8'>
                        <h4 className='text-xl text-white text-center font-bold'>Start a Fundraiser</h4>
                        <p className='text-gray-400 text-center font-semibold'>Start a fundraiser to raise funds and help us continue our mission.</p>
                        <button className='bg-[#5758F1] rounded-xl text-white font-bold py-3.5 w-48 cursor-pointer'>Learn More</button>
                    </div>
                </li>
            </ul>
        </div>    
        <div className='flex justify-center'>
            {windowWidth > 1024 ? <img className='' src={Cat} alt="Foto gato"/> : ''}
            <div className='flex flex-col items-center'>  
                <div className='flex flex-col items-center'>
                    <h1 className='md:text-5xl text-4xl text-white font-bold mb-20'>Find your best friend today!</h1>
                    <h2 className='md:text-2xl text-xl text-center text-white font-bold mb-10'>Browse our adorable adoptables</h2>
                </div>
                <div className='flex md:flex-row flex-col gap-6'>
                  <Link to="/adoptables">
                    <button className='bg-[#F8DB46] rounded-full font-bold py-3 w-48 cursor-pointer'>View Adoptables</button>
                  </Link>        
                    <button onClick={handleModalAdopt} className='rounded-full font-bold text-sm text-white py-3 w-44 border border-white cursor-pointer'>Apply to Adopt</button>
                </div>
            </div> 
            {windowWidth > 1024 ? <img className='' src={Dog} alt="Foto gato"/> : ''}
        </div>       
      </section>

      <section className='bg-[#5758F1] lg:px-36 px-4 py-10 flex flex-col items-center'>        
            <h1 className='text-center text-white md:text-4xl text-3xl font-bold mb-4'>Subscribe to our newsletter</h1>
            <p className='text-white opacity-60 text-sm text-center mb-14 w-[540px]'>for updates on shelter events, fundraising parties, and heartwarming stories of animals finding their forever homes.
            </p>
            <form className='flex justify-center gap-4'>
                <input className='rounded-full border border-white text-xs text-white opacity-80 px-2 md:w-64' type="email" required placeholder="Enter your email" name="email" id="email-secao6"/>
                <button className='bg-white rounded-full py-2.5 px-6 text-sm font-bold' type="submit" >Subscribe</button>
            </form>
      </section>
    </>
  )
}

export default HomePage