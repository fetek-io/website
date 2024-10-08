import { MenuOutlined } from '@ant-design/icons'
import { Drawer, Image, Layout, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { MAPPING_PATH, menuItems } from './constants'

import { useScreen } from '@/hooks/useScreen'
import { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import { LanguageSelection } from './LanguageSelection'

const AntdHeader = Layout.Header

export const Header = () => {
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

  const handleNavigateToForMobile = (pageKey: string) => {
    handleNavigateTo(pageKey)
    setIsShowNavBar(false)
  }

  const { isMobile } = useScreen()
  const [isShowNavBar, setIsShowNavBar] = useState(false)

  return (
    <>
      <AntdHeader 
        className='text-black sticky top-0 z-10 w-full h-[81px] flex justify-between layout-header px-0 border-x-0 border-t-0 border-b border-solid border-green-caribbean bg-white'>
        {isMobile ? (
          <>
            <div className='flex items-center w-40 h-[81px] border-y-0 border-l-0 border-green-caribbean'>
              <Image alt='logo' src={Logo} preview={false} className='pl-3' />
            </div>
            <span
              className='flex items-center p-4'
              onClick={() => {
                setIsShowNavBar(true)
              }}
            >
              <MenuOutlined style={{ color: 'white', fontSize: '20px' }} />
            </span>
          </>
        ) : (
          <>
            <div className='flex justify-center items-center w-40 h-[81px] border-y-0 border-l-0 border-r border-solid border-green-caribbean'>
              <Image alt='logo' src={Logo} preview={false} />
            </div>
            <div className='flex flex-1 justify-center'>
              <Menu
                theme='dark'
                mode='horizontal'
                selectedKeys={[]}
                items={menuItems}
                onClick={(e) => handleNavigateTo(e.key)}
                className='flex flex-1 items-center justify-center uppercase text-gray-50 text-base !leading-[1.875rem] font-lexend'
              />
            </div>
            <LanguageSelection />
          </>
        )}
      </AntdHeader>
      <Drawer
        title='Menu'
        onClose={() => {
          setIsShowNavBar(false)
        }}
        open={isShowNavBar}
        placement='right'
      >
        <div style={{ position: 'fixed', top: '81px' }}>
          <Menu
            mode='inline'
            selectedKeys={[]}
            items={menuItems}
            onClick={(e) => handleNavigateToForMobile(e.key)}
            className='border-r-0 '
            style={{ borderInlineEnd: '0' }}
          />
        </div>
      </Drawer>
    </>
  )
}
