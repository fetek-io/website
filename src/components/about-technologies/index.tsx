import './style.sass'

import { useMemo, useState } from 'react'
import { TECHNOLOGIES, technologyList, technologyTabs } from './constants'

import { PAGE_KEYS } from '@/layout/constants'
import { Col, Row } from 'antd'

const MAX_ELEMENT_PER_ROW = 5

export const TechnologyList = () => {
  const [activeKey, setActiveKey] = useState(TECHNOLOGIES.LANGUAGE)

  const onChangeActiveKey = (key: TECHNOLOGIES) => {
    setActiveKey(key)
  }

  const [items, additionItems] = useMemo(() => {
    const itemLength = technologyList[activeKey].length
    const balance = itemLength % MAX_ELEMENT_PER_ROW
    const endOfItems = balance > 0 ? itemLength - balance : itemLength - MAX_ELEMENT_PER_ROW
    const items = technologyList[activeKey].slice(0, endOfItems)
    const additionItems = technologyList[activeKey].slice(endOfItems)
    return [items, additionItems]
  }, [activeKey])

  return (
    <div id={PAGE_KEYS.TECHNOLOGIES} className='flex flex-col xl:mx-[12.5rem] lg:mx-20 mx-4 py-20 about-technology'>
      <Row>
        <Col xl={12} xs={24}>
          <div className='text-primary-700 text-5xl leading-[3.75rem] font-medium xl:w-[23.625rem] xs:w-[22rem]'>
            Technologies we're experts in
          </div>
        </Col>
        <Col xl={12} xs={24} className='flex justify-end'>
          <div className='text-gray-50 text-base font-light w-[31.875rem] py-3'>
            From scratch to execution, Fetek always applies advanced and cutting-edge technologies to deliver your ideas
            into impactful and scalable products.
          </div>
        </Col>
      </Row>

      <div className='grid grid-cols-2 mt-12 mb-[3.25rem] border-x-0 border-t-0 border-b border-solid border-[#FFFFFF4D] bg-[#34CB9E33]'>
        {technologyTabs.map((item) => (
          <div
            key={item}
            onClick={() => onChangeActiveKey(item)}
            className={`${
              activeKey === item ? 'active-tab bg-primary-800' : ''
            } relative h-[3.75rem] uppercase text-base text-white text-center flex items-center justify-center font-inter cursor-pointer center`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className='service-grid grid xl:grid-cols-5 xs:grid-cols-3'>
        {items.map((item) => (
          <div key={item.key} className='flex gap-3 items-center py-[29px] pl-5 pr-2 service-item'>
            <div>{item.icon}</div>
            <span className='text-lg'>{item.label}</span>
          </div>
        ))}
        {additionItems.map((item) => (
          <div key={item.key} className='flex gap-3 items-center py-[29px] pl-5 pr-2 addition-service-item'>
            <div>{item.icon}</div>
            <span className='text-lg'>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
