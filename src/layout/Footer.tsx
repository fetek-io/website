import { businessSolutionItems, serviceItems, workItems } from './constants'

import FacebookIcon from '@/assets/icons/facebook-icon.svg'
import InstagramIcon from '@/assets/icons/instagram-icon.svg'
import LinkdinIcon from '@/assets/icons/linkdin-icon.svg'
import Logo from '@/assets/images/logo.svg'
import { useScreen } from '@/hooks/useScreen'
import { Image } from 'antd'

export const Footer = () => {
  const { isMobile } = useScreen()

  return isMobile ? (
    <MobileFooter />
  ) : (
    <>
      <div className='flex justify-between gap-[3.438rem] px-[12.5rem] bg-gray-900 py-20'>
        <div className='flex flex-col gap-8 w-[19.625rem]'>
          <div>
            <Image alt='logo' preview={false} src={Logo} className='w-auto' height={52} />
          </div>
          <span className='font-lexend leading-6 font-light'>
            With a experienced talent team, Fetek will be a reputable technology partner to maximize the development of
            your business
          </span>
        </div>
        <div className='flex gap-8'>
          <div className='flex flex-col gap-5'>
            <span className='text-gray-50 text-lg tracking-wide font-lexend pb-[0.625rem]'>Work</span>
            {workItems.map((item) => (
              <span key={item.key} className='text-base font-lexend font-light leading-6 text-gray-300 cursor-pointer'>
                {item.label}
              </span>
            ))}
          </div>
          <div className='flex flex-col gap-5'>
            <span className='text-gray-50 text-lg tracking-wide font-lexend pb-[0.625rem]'>Services</span>
            {serviceItems.map((item) => (
              <span key={item.key} className='text-base font-lexend font-light leading-6 text-gray-300 cursor-pointer'>
                {item.label}
              </span>
            ))}
          </div>
          <div className='flex flex-col gap-5'>
            <span className='text-gray-50 text-lg tracking-wide font-lexend pb-[0.625rem]'>Busniess Solution</span>
            {businessSolutionItems.map((item) => (
              <span key={item.key} className='text-base font-lexend font-light leading-6 text-gray-300 cursor-pointer'>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-gray-800 px-[12.5rem] h-12 flex justify-between items-center'>
        <div className='text-white font-lexend'>© {new Date().getFullYear()} Fetek. All Right Reserved.</div>
        <div className='flex gap-6'>
          <a href="https://www.linkedin.com/company/c%C3%B4ng-ty-tnhh-fetek-vi%E1%BB%87t-nam/"><Image alt='linkdin' height={24} width={24} src={LinkdinIcon} preview={false} className='cursor-pointer' /></a>
          <Image alt='fb' height={24} width={24} src={FacebookIcon} preview={false} className='cursor-pointer' />
        </div>
      </div>
    </>
  )
}

const MobileFooter = () => {
  return (
    <>
      <div className='px-4 bg-gray-900 py-20 '>
        <div className='mb-10'>
          <div>
            <Image alt='logo' preview={false} src={Logo} className='w-auto' height={52} />
          </div>
          <span className='font-lexend leading-6 font-light'>
            With a experienced talent team, Fetek will be a reputable technology partner to maximize the development of
            your business
          </span>
        </div>

        <div className='flex flex-col gap-10 mb-10'>
          <div className='flex flex-col gap-2'>
            <span className='text-gray-50 text-lg tracking-wide font-lexend '>Work</span>
            {workItems.map((item) => (
              <span key={item.key} className='text-base font-lexend font-light leading-6 text-gray-300 cursor-pointer'>
                {item.label}
              </span>
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-gray-50 text-lg tracking-wide font-lexend '>Services</span>
            {serviceItems.map((item) => (
              <span key={item.key} className='text-base font-lexend font-light leading-6 text-gray-300 cursor-pointer'>
                {item.label}
              </span>
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-gray-50 text-lg tracking-wide font-lexend '>Busniess Solution</span>
            {businessSolutionItems.map((item) => (
              <span key={item.key} className='text-base font-lexend font-light leading-6 text-gray-300 cursor-pointer'>
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className='bg-gray-800 px-2  h-16 flex flex-col gap-2 justify-center items-center'>
            <div className='text-white font-lexend'>© {new Date().getFullYear()} Fetek. All Right Reserved.</div>
            <div className='flex gap-6'>
              <Image alt='fb' height={24} width={24} src={FacebookIcon} preview={false} className='cursor-pointer' />
              <Image
                alt='linkdin'
                height={24}
                width={24}
                src={LinkdinIcon}
                preview={false}
                className='cursor-pointer'
              />
              <Image
                alt='instagram'
                height={24}
                width={24}
                src={InstagramIcon}
                preview={false}
                className='cursor-pointer'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
