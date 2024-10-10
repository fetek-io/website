import './style.sass'
import { message } from "antd";
import { Image} from 'antd'
import emailjs from '@emailjs/browser';
import LogoIcon from '@/assets/images/logo.svg'
import { PAGE_KEYS } from '@/layout/constants'
import { useRef, useState } from 'react';

export const SendUsMessage = () => {

  const [custName, setCustName] = useState<string>();
  const [custPhoneNumber, setCustPhoneNumber] = useState<string>();
  const [custEmail, setCustEmail] = useState<string>();
  const [custMessage, setCustMessage] = useState<string>();
  const form = useRef(null);
  const [messageApi, contextHolder] = message.useMessage();
  const handleMessageSuccess = () => {
    messageApi.open({
      type: 'success',
      content: 'You have sent the message successfully.',
    });
  };
  const handleMessageFail = () => {
    messageApi.open({
      type: 'error',
      content: 'You have not sent the message successfully.',
    });
  };
  const handleSubmit = (e : any) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_8qglzi5', 'template_lordib4', form.current, {
        publicKey: '-2L4J3ExT7EaWkUnD',
      })
      .then(
        () => {
          handleMessageSuccess();
          setCustName("");
          setCustEmail("");
          setCustPhoneNumber("");
          setCustMessage("");
          console.log('SUCCESS!');
        },
        (error) => {
          handleMessageFail();
          console.log('FAILED...', error.text);
        },
      );

  };
  return (
    <>
      {contextHolder}
      <div id={PAGE_KEYS.SEND_MESSAGE} className='send-us-message-bg h-[45rem] form-send-us-message'>
        <div className='xl:w-[30.375rem] xl:mx-[12.5rem] lg:mx-20 mx-4 xl:py-20 py-4'>
          <div className='flex gap-4 mb-5'>
            <span className='text-[1.75rem] leading-[2.375rem] text-white uppercase'>Send us a message</span>
            <div className='h-9'>
              <Image alt='logo' preview={false} src={LogoIcon} />
            </div>
          </div>
          <form ref={form} onSubmit={handleSubmit} className='flex flex-col space-y-2'>
            <label className='mt-2'>Name</label>
            <input type="text" 
                   name="cust_name" 
                   placeholder='Cong ty TNHH ABC, Nguyen Van A,...' 
                   className='text-[16px] border border-gray-300 rounded-md bg-white bg-opacity-10 py-4 px-4 text-white' 
                   required
                   value={custName}
                   onChange={(e) => setCustName(e.target.value)}/>
            
            <label className=' mt-2'>Email</label>
            <input type="text" 
                   name="cust_email" 
                   placeholder='abc@gmail.com' 
                   className='text-[16px] border border-gray-300 rounded-md bg-white bg-opacity-10 py-4 px-4 text-white' 
                   required
                   value={custEmail}
                   onChange={(e) => setCustEmail(e.target.value)}/>
            
            <label className=' mt-2'>Phone Number</label>
            <input type="text" 
                   name="cust_phone_number" 
                   placeholder='XXXX-XXX-XXX' 
                   className='text-[16px] border border-gray-300 rounded-md bg-transparent py-4 px-4 mt-2' 
                   required
                   value={custPhoneNumber}
                   onChange={(e) => setCustPhoneNumber(e.target.value)}/>
            
            <label className=' mt-2'>Message</label>
            <textarea name="cust_message" 
                      className='text-[16px] border border-gray-300 rounded-md pb-24 pt-2 px-4 text-white bg-white bg-opacity-10'
                      value={custMessage}
                      onChange={(e) => setCustMessage(e.target.value)}/>
            
            <button className='cursor-pointer bg-[#70baa4] text-white font-light py-3 px-4 rounded uppercase text-lg hover:bg-[#5e9d8a]' type="submit">Send Message </button>
          </form>
          {/* <Form
            name='form-send-us-message'
            onFinish={() => handleSubmit()}
            onFinishFailed={() => {}}
            autoComplete='off'
            layout='vertical'
            ref={form}
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
            </Row> */}
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
          {/* </Form> */}
        </div>
      </div>
    </>
    
  )
}
