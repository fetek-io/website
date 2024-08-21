import './style.sass'

import { PAGE_KEYS } from '@/layout/constants'
import { Col, Row } from 'antd'
import { ReactNode } from 'react'
import { ServiceCard } from './ServiceCard'
import { serviceLists } from './constants'

type ServiceCardType = {
  bgClassName: string
  icon: ReactNode
  label: string
  key: string
}

export const ServiceList = () => (
  <div id={PAGE_KEYS.SERVICES} className='flex flex-col gap-8 xl:mx-[12.5rem] lg:mx-20 mx-4 py-20'>
    <Row>
      <Col xl={12} xs={24}>
        <div className='text-primary-700 text-5xl leading-[3.75rem] font-medium w-[23.625rem]'>
          Which services we support?
        </div>
      </Col>
      <Col xl={12} xs={24} className='flex justify-end'>
        <div className='text-gray-50 text-base font-light w-[31.875rem] py-3'>
          FETEK has been highly appreciated and chosen as a long-term partner by many domestic and international
          organizations because of its service quality with international standards and the professional working style
          of its staff.
        </div>
      </Col>
    </Row>

    <Row gutter={[4, 4]}>
      {serviceLists.map((item: ServiceCardType) => (
        <Col xl={8} xs={24}>
          <ServiceCard {...item} />
        </Col>
      ))}
    </Row>
  </div>
)
