import { PAGE_KEYS } from '@/layout/constants'
import Card from '../card-recruitment'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {  Modal  } from "antd";
import emailjs from '@emailjs/browser';
const Recruitment = () => {
  const [jobData, setJobData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/jobs', {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_KEY}` // Thêm Bearer Token vào headers
          }
        });
        setJobData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const sendEmail = (e : any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8qglzi5', 'template_lordib4', form.current, {
        publicKey: '-2L4J3ExT7EaWkUnD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const handleOk = () => {
    emailjs
      .sendForm('service_8qglzi5', 'template_lordib4', form.current, {
        publicKey: '-2L4J3ExT7EaWkUnD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    setIsModalOpen(false);
  };
  return (
    <div id={PAGE_KEYS.CARRER} className='mx-auto'>
      <h1 className='text-black text-3xl text-center uppercase mt-10 mb-10'>Our available jobs</h1> 
      <div className='grid grid-cols-2 gap-4 mt-10 mb-10'>
      {jobData.map((job : any) => <Card key={job.id} job={job} onClick={showModal}/>)}
      </div>
      <Modal title="Send Infomation" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
          <label className=' mt-2'>Full Name</label>
          <input type="text" name="user_name" placeholder='Le Trong Tinh' className='border border-gray-300 rounded-md py-2 px-4 mt-2'/>
          <label className=' mt-2'>Email</label>
          <input type="text" name="user_email" placeholder='abc@gmail.com' className='border border-gray-300 rounded-md py-2 px-4'/>
          <label className=' mt-2'>Message</label>
          <textarea name="message" className='border border-gray-300 rounded-md py-2 px-4'/>
          <label className=' mt-2'>Attach CV</label>
          <input type="file" 
                className='block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-sky-50 file:text-sky-700
        hover:file:bg-sky-100 mb-3 cursor-pointer'/>
          {/* <input className='cursor-pointer bg-green-700 text-white font-bold py-2 px-4 rounded' type="submit" value="Send" /> */}
        </form>
      </Modal>
    </div>
  )
}

export default Recruitment