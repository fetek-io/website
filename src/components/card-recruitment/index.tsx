
const Card = () => {
    return (
      <div className='flex justify-between border-[1px] p-3 w-[550px] rounded-xl cursor-pointer 
        hover:bg-green-900 hover:text-white border-green-900 text-green-900 transition-colors duration-400 ease-in-out'>
          <div className="content w-[70%] ml-5">
            <h3 className="text-left font-bold text-lg">Intern Java Developer</h3>
            <div className='flex justify-between mt-5'>
              <div className="text-left">
                <p><i className="fa-regular fa-calendar"></i> 01/02/2024</p>
                <p className='mt-4 mb-2'><i className="fa-solid fa-location-dot"></i> Hanoi</p>
              </div>
              <div className="text-left">
                <p><i className="fa-solid fa-money-bill"></i> Thương lượng</p>
                <p className='mt-4 mb-2'><i className="fa-regular fa-clock"></i> Fulltime</p>
              </div>
            </div>
          </div>
          <div className="arrow text-4xl self-center mr-5"><i className="fa-solid fa-angle-right"></i></div>
        </div>
    )
  }
  
  export default Card