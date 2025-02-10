import logo_footer from '../public/images/footer/image.png'

const Footer = () => {
  return (
    <footer className='flex flex-col lg:px-36 px-4 py-10'>
        <div className='flex md:flex-row flex-col md:gap-0 gap-8 justify-around items-center border-b-2 border-black pb-10'>
            <img className='w-40 h-40' src={logo_footer} alt="Logo adoção" />          
            <div className='flex md:flex-row flex-col md:justify-evenly lg:gap-28 gap-16'>
              <ul className='flex md:flex-col flex-wrap  gap-3 font-semibold'>
                  <li className='md:text-base text-sm'>Adopt a Pet</li>
                  <li className='md:text-base text-sm'>Adoptable Dogs</li>
                  <li className='md:text-base text-sm'>Adoptable Cats</li>
                  <li className='md:text-base text-sm'>Become a Foster</li>
                  <li className='md:text-base text-sm'>Rescue Center</li>
                  <li className='md:text-base text-sm'>Get Involved</li>
              </ul>
              <ul className='flex md:flex-col flex-wrap gap-3 font-semibold'>
                  <li className='md:text-base text-sm'>Ways to Donate</li>
                  <li className='md:text-base text-sm'>Upcoming Events</li>
                  <li className='md:text-base text-sm'>Outreach Programs</li>
                  <li className='md:text-base text-sm'>Who We Are</li>
                  <li className='md:text-base text-sm'>Contact Us</li>
                  <li className='md:text-base text-sm'>Shop With Purpose</li>
              </ul>
              <div className='flex items-center flex-col gap-3'>
                  <ul className='font-semibold flex flex-col gap-2'>
                      <li className='md:text-base text-sm'>
                          <p className='w-48'>PO Box 83644 Middleton, 2452 Wilson</p>
                      </li>
                      <li className='md:text-base text-sm flex items-center gap-2'>
                          <i className="fa fa-phone"></i>
                          <p>631-249-7325</p>
                      </li>
                      <li className='md:text-base text-sm'>
                          <p>pet_home@gmail.com</p>
                      </li>
                  </ul>
                  <div className='flex gap-4'>
                    <i className='fab fa-instagram text-3xl'></i>
                    <i className='fab fa-whatsapp text-3xl'></i>
                    <i className='fab fa-twitter text-3xl'></i>
                  </div>
              </div>
            </div>
        </div>
        <span className='flex justify-center flex-wrap text-center mt-10 font-bold text-3xl'> We are not just a rescue, <strong className='text-pink-500 '> we are a refuge</strong></span>
    </footer>
  )
}

export default Footer