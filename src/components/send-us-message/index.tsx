import './style.sass'

import { Button, Col, Form, Image, Input, Row } from 'antd'

import ArrowRightIcon from '@/assets/icons/arrow-right.svg'
import LogoIcon from '@/assets/images/logo.svg'
import { PAGE_KEYS } from '@/layout/constants'

export const SendUsMessage = () => {
  return (
    <div id={PAGE_KEYS.SEND_MESSAGE} className='send-us-message-bg h-[34.813rem] form-send-us-message'>
      <div className='xl:w-[30.375rem] xl:mx-[12.5rem] lg:mx-20 mx-4 xl:py-20 py-4'>
        <div className='flex gap-4 mb-5'>
          <span className='text-[1.75rem] leading-[2.375rem] text-white uppercase'>Send us a message</span>
          <div className='h-9'>
            <Image alt='logo' preview={false} src={LogoIcon} />
          </div>
        </div>
        <Form
          name='form-send-us-message'
          onFinish={() => {}}
          onFinishFailed={() => {}}
          autoComplete='off'
          layout='vertical'
        >
          <Row gutter={32}>
            <Col xl={12} xs={24}>
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please input correct your email!' }
                ]}
                className='mb-5'
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xl={12} xs={24}>
              <Form.Item
                label='Phone Number'
                name='phone'
                rules={[{ required: true, message: 'Please input your phone number!' }]}
                className='mb-7'
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xl={24} xs={24}>
              <Form.Item label='Message' name='message'>
                <Input.TextArea rows={5} className='!h-[7.875rem]' />
              </Form.Item>
            </Col>
            <Col xl={24} xs={24}>
              <Form.Item className='mb-0'>
                <Button type='primary' htmlType='submit' className='flex gap-2'>
                  <span>Send Message</span>
                  <Image alt='arrow-right' preview={false} src={ArrowRightIcon} />
                </Button>
              </Form.Item>
            </Col>
          </Row>
          {/* <div className='grid grid-cols-2 gap-8'>
            <Form.Item
              label='Email'
              name='email'
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please input correct your email!' }
              ]}
              className='mb-5'
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Phone Number'
              name='phone'
              rules={[{ required: true, message: 'Please input your phone number!' }]}
              className='mb-7'
            >
              <Input />
            </Form.Item>
          </div>

          <Form.Item label='Message' name='message'>
            <Input.TextArea rows={5} className='!h-[7.875rem]' />
          </Form.Item>

          <Form.Item className='mb-0'>
            <Button type='primary' htmlType='submit' className='flex gap-2'>
              <span>Send Message</span>
              <Image alt='arrow-right' preview={false} src={ArrowRightIcon} />
            </Button>
          </Form.Item> */}
        </Form>
      </div>
    </div>
  )
}
