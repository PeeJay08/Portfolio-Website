/* eslint-disable no-undef */
import React from "react";
import AOS from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css"
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
    emailjs.sendForm('service_bduvpad', 'service_bduvpad', form.current, '0tLaPJSXl9P2BJDT6')
      .then((result) => {
        console.log(result.text)
        console.log("Message sent")
          e.target.reset();
      }, (error) => {
          console.log(error.text)
      });
  };
  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])
  
  return (
    <div name="contact" className="w-full h-screen bg-[#0D1F3C] flex justify-center items-center p-4 text-center ">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col max-w-[1200px] w-full shadow-md shadow-[#040c16] p-4 md:text-left mt-20 text-center animation" data-aos="fade-up">
        <div className="pb-8 ">
          <p className="text-5xl font-bold inline border-b-4 border-[#A47E3B] text-[#F0F0F0]">
            Contact
          </p>
          <p className="text-[#F0F0F0] py-2">Submit the form below </p>
        </div>

        <input className="bg-light-gray p-2 md:mx-20 sm:mx-10" type="text" placeholder="Name" name="name" required/>
        <input className="my-4 p-2 bg-light-gray md:mx-20 sm:mx-10" type="email" placeholder="Email" name="email" required/>
        <textarea className="bg-light-gray p-2 md:mx-20 sm:mx-10" name="message" cols="30" rows="10" placeholder="Message"></textarea>
        <input type="submit" value="Submit" className="text-[#F0F0F0] text-lg rounded-lg border-2 cursor-pointer hover:bg-[#A47E3B] hover:border-[#A47E3B] px-5 py-3 my-8 mx-auto flex item-center"/>
      </form>
    </div>
  );
};

export default Contact;
