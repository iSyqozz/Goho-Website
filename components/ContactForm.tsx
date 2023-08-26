'use client'
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isGood, setIsGood] = useState(true);
  const [resVis, setResVis] = useState(false)


  const showRes = (isGood: boolean) => {

    setIsGood(isGood);
    setResVis(true);

    setTimeout(() => {

      setResVis(false);
      setIsGood(false)

    }, 3000);

  }


  const handleSubmit = async (e: React.FormEvent) => {
    // Handle form submission logic here

    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });


      if (response.ok) {
        showRes(true)
      } else {
        showRes(false)
      }
    } catch (error) {
      // Handle fetch error
      showRes(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=" text-primary w-[40vw] max-w-md max-md:min-w-full p-6 rounded shadow-md">

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" text-darkest w-full p-2 border rounded focus:outline-none bg-light1"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" text-darkest w-full p-2 border rounded focus:outline-none bg-light1 "
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className=" text-darkest w-full p-2 border rounded focus:outline-none bg-light1"
            required
          />
        </div>

        <button type="submit" className=" w-[100%]  transition-all bg-primary text-darkest py-2 rounded hover:bg-darkest hover:text-primary">
          Submit
        </button>
        {
          resVis &&
          <h2 className={(isGood ? ' text-primary' : ' text-red-800') + ` flex items-center justify-center w-full mt-6 text-2xl font-semibold text bg-center`} >{isGood ? 'Form submitted Successfully' : 'Failed to Submit Form'}</h2>
        }
      </form>
    </>
  );
};

export default ContactForm;