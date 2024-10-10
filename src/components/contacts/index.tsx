import { contactCards, solutionCards } from './constants'

import { PAGE_KEYS } from '@/layout/constants'
import { Col, Row } from 'antd'
import { SolutionCard } from './SolutionCard'
import { useTranslation } from 'react-i18next'

export const Contacts = () => {
  const { t } = useTranslation()
  return (
    <div id={PAGE_KEYS.PROCESS}>
      <div className='flex flex-col gap-8 xl:mx-[12.5rem] lg:mx-20 mx-4 py-20'>
        <Row>
          <Col xl={12} xs={24}>
            <div className='text-white text-5xl leading-[3.75rem] font-medium w-[23.625rem]'>
              {t('How do we work together?')}
            </div>
          </Col>
          <Col xl={12} xs={24} className='flex justify-end'>
            <div className='text-gray-50 text-base font-light w-[31.875rem] py-3'>
              {t(
                'FETEK has been highly appreciated and chosen as a long-term partner by many domestic and international organizations because of its service quality with international standards and the professional working style of its staff.'
              )}
            </div>
          </Col>
        </Row>

        <Row gutter={[20, 20]}>
          {solutionCards.map((item) => (
            <Col xl={6} xs={12}>
              <SolutionCard {...item} />
            </Col>
          ))}
        </Row>
      </div>

      <div className='bg-[#03393680] grid xl:grid-cols-3 xs:grid-cols-1 gap-5 xl:px-[12.5rem] lg:px-20 px-4 py-[3.75rem]'>
        {contactCards.map((item) => (
          <div key={item.key} className='bg-white py-4 px-9 rounded-md'>
            <div>{item.icon}</div>
            <div className='text-2xl leading-9 uppercase text-gray-700 font-medium my-1'>{item.title}</div>
            <div className='text-base whitespace-break-spaces font-light text-[#031E39]'>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
