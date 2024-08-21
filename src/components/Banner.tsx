import ArrowRightIcon from '@/assets/icons/arrow-right.svg'
import { MAPPING_PATH, PAGE_KEYS } from '@/layout/constants'
import { Image } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

export const Banner = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleScrollToElement = (key: string) => {
    const targetElm = document.getElementById(key)
    if (targetElm) {
      targetElm.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const handleNavigateTo = (pageKey: string) => {
    const targetPage = MAPPING_PATH[pageKey]
    if (location.pathname !== targetPage) {
      navigate(targetPage)
      setTimeout(() => {
        handleScrollToElement(pageKey)
      }, 1000)
    } else {
      handleScrollToElement(pageKey)
    }
  }

  return (
    <div className='xl:w-[31.5rem] xs:w-[10rem] sm:ml-20 ml-4 xl:ml-[12.5rem] lg:mt-36 mt-24 xl:mt-[14.625rem]'>
      <div className='text-5xl leading-[3.75rem] font-light font-lexend'>
        Delivering Excellence Data and Software Services
      </div>
      <div className='font-lexend text-base font-light mt-[1.625rem] xl:pl-6 xs:pl-0'>
        Not only striving towards effective value for customers, FETEK is also committed to providing specialized
        service quality for each customer's characteristics.
      </div>
      <div className='flex items-center justify-center gap-2 bg-primary-700 h-14 w-[11.25rem] cursor-pointer mt-12 hover:bg-primary-800'>
        <span
          className='font-lexend text-base uppercase'
          onClick={() => {
            handleNavigateTo(PAGE_KEYS.SEND_MESSAGE)
          }}
        >
          Contact Us
        </span>
        <Image alt='icon-arrow-right' src={ArrowRightIcon} preview={false} />
      </div>
    </div>
  )
}
