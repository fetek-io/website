import CertificateIcon from '@/assets/icons/certificate-icon.svg'
import AboutFetekImage from '@/assets/images/about-fetek.png'
import { useScreen } from '@/hooks/useScreen'
import { PAGE_KEYS } from '@/layout/constants'
import { Image } from 'antd'
import { useTranslation } from 'react-i18next'
export const AboutFetek = () => {
  const { isMobile } = useScreen()
  const { t } = useTranslation()
  console.log(import.meta.env.VITE_EMAIL_JS_PRIVATE_KEY)
  return (
    <div
      id={PAGE_KEYS.ABOUT_FETEK}
      className='flex justify-between gap-8 xl:mx-[12.5rem] lg:mx-20 mx-4 py-20 about-fetek'
    >
      <div className='lg:w-[26rem] w-full flex flex-col'>
        <div className='font-medium text-5xl leading-[3.75rem] text-primary-700'>{t('About FETEK')}</div>

        <div className='flex flex-col gap-4 mt-10'>
          <div className='text-base font-light text-gray-50'>
            {t(
              'We are a dynamic and innovative company dedicated to providing top-notch software development services tailored to meet the unique needs of our clients. With a team of highly skilled and experienced professionals, we specialize in delivering cutting-edge solutions that drive business growth and efficiency.'
            )}
          </div>
        </div>

        <div className='flex gap-5 mt-8'>
          <div className='rounded-md bg-slate-50 shadow-default border-x-0 border-b-0 border-t-2 border-solid  w-[9.75rem] p-4'>
            <div>
              <Image alt='cert' src={CertificateIcon} preview={false} height={58} />
            </div>
            <div className='mt-5 leading-5 text-gray-700 font-light'>
              {t('Top Fastest Growing Enterprises in the period 2018 - 2023')}
            </div>
          </div>
          <div className='rounded-md bg-slate-50 shadow-default border-x-0 border-b-0 border-t-2 border-solid w-[9.75rem] p-4'>
            <div>
              <Image alt='cert' src={CertificateIcon} preview={false} height={58} />
            </div>
            <div className='mt-5 leading-5 text-gray-700 font-light'>
              {t('Top 10 Reputable Technology Enterprises in 2023')}
            </div>
          </div>
        </div>
      </div>

      {!isMobile && (
        <div className='flex flex-col'>
          <div className='flex relative justify-end ml-[3.75rem]'>
            <Image alt='team-work' src={AboutFetekImage} preview={false} className='rounded-md' />
            <div className='bg-white absolute bottom-0 h-20 w-full flex items-center justify-center rounded-bl-md rounded-br-md'>
              <span className='text-gray-700 text-base leading-5'>{t('Professional / Classy / Friendly')}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
