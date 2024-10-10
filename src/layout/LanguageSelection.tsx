import i18n from '@/i18n'
import { Select } from 'antd'
// import { useState } from 'react'

// const languages = [
//   {
//     key: 'en',
//     label: 'EN',
//     image: '/flag_uk.svg'
//   },
//   {
//     key: 'vn',
//     label: 'VN',
//     image: '/flag_vietnam.svg'
//   }
// ]

export const LanguageSelection = () => {
  // const [activeKey, setActiveKey] = useState('en')

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value)
  }
  return (
    <div className='bg-slate-50 flex items-center justify-center w-40'>
      <Select
        defaultValue='en'
        style={{ width: 70 }}
        onChange={handleChangeLanguage}
        options={[
          { value: 'vi', label: <img className='rounded-md' src='/flag_vietnam.svg' /> },
          { value: 'en', label: <img className='rounded-md' src='/flag_uk.svg' /> }
        ]}
      />
      {/* {languages.map((item, index) => (
        <div
          key={item.key}
          className={`${activeKey === item.key ? 'bg-slate-600 p-2 rounded-md' : ''} ${
            index === 0 ? '' : ''
          } cursor-pointer text-base font-lexend px-2 transform transition duration-300 hover:scale-110`}
          onClick={() => changeLanguage(item.key)}
        >
          <img className='w-full h-7 rounded-md' src={item.image} alt={item.label} />
        </div>
      ))} */}
    </div>
  )
}
