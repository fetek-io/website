
const Card = ({job, onClick} : any) => {
    return (
      <div onClick={onClick} className='flex justify-between border-[1px] p-3 w-[550px] rounded-xl cursor-pointer 
        hover:bg-green-900 hover:text-white border-green-900 text-green-900 transition-colors duration-400 ease-in-out'>
          <div className="content w-[70%] ml-5">
            <h3 className="text-left font-bold text-lg">{job.job_name}</h3>
            <div className='flex justify-between mt-5'>
              <div className="text-left">
                <p><i className="fa-regular fa-calendar"></i> {job.jon_duration}</p>
                <p className='mt-4 mb-2'><i className="fa-solid fa-location-dot"></i> {job.job_location}</p>
              </div>
              <div className="text-left">
                <p><i className="fa-solid fa-money-bill"></i> {job.job_salary}</p>
                <p className='mt-4 mb-2'><i className="fa-regular fa-clock"></i> {job.job_type}</p>
              </div>
            </div>
          </div>
          <div className="arrow text-4xl self-center mr-5"><i className="fa-solid fa-angle-right"></i></div>
        </div>
    )
  }
  
  export default Card