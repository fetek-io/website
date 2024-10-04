import { PAGE_KEYS } from '@/layout/constants'
import Card from '../card-recruitment'


const Recruitment = () => {
  return (
    <div id={PAGE_KEYS.CARRER} className='mx-auto'>
      <h1 className='text-black text-3xl text-center uppercase mt-10 mb-10'>Our available jobs</h1> 
      <div className='grid grid-cols-2 gap-4 mt-10 mb-10'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      
    </div>
  )
}

export default Recruitment