import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();
  const [isSent, setIsSent] = useState(false);    // is our msg sent or not??
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_rjt3scg",   // Service ID 
      "template_i5avc9a",                 // templete ID
      form.current, 
      "wo09g9Uaa40ctMUYq"                 // Api Key
    )
    .then(() => {
      setIsSent(true)
      form.current.reset()                // to reset all fields after sumbitting email to me by user
      toast.success("Message sent successfully !!!" ,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          theme: 'light',
        });
      },
      (error) => {
        toast.error("Error Sending Message!!!", error);
        toast.error("Failed to send message! Plz try again" ,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          theme: 'light',
        });
      }
    )                
    }
  return (
    <section
    id='contact'
    className='flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'
    >
      <ToastContainer />
      {/* Contact title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Contact</h2>
        <div className="w-34 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
      </div>

      {/* Contact form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">Connect with me!</h3>

        <form
        ref={form}
        onSubmit={sendEmail} 
        className='mt-4 flex flex-col space-y-4'>
          <input type="name" name='username' placeholder='Enter your name' required
            className='w-full p-3 rounded-md text-white border border-gray-600'
          />
          <input type="email" name='useremail' placeholder='Enter your email' required
            className='w-full p-3 rounded-md text-white border border-gray-600'
          />
          <input type="text" name='subject' placeholder='Enter subject' required
            className='w-full p-3 rounded-md text-white border border-gray-600'
          />
          <textarea name="msg" placeholder='Type your message...' 
            className='w-full p-3 rounded-md text-white border border-gray-600'
          ></textarea>

          {/* send btn */}
          <button type='submit'
          className='w-1/2 bg-white text-black rounded p-2 items-center mx-auto block  transition duration-200 transform hover:scale-105'
          >Send message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact