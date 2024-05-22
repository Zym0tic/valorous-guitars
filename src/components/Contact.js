import React, { useState } from 'react';
import { send } from 'emailjs-com';
//import contact data
import { contactData } from '../data';

const Contact = () => {
  //destructure contact data
  const { info, form } = contactData;

  //form submission
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Kevin Parnow',
    message: '',
    reply_to: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToSend((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage(''); // Clear error message on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    if (!toSend.from_name || !toSend.reply_to || !toSend.message) {
      setErrorMessage('Please fill out all fields.');
      return;
    }
    send('service_f05kigw', 'template_bxdws9f', toSend, 'dPcxST3zI0_MhNt05')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <section className="section pt-[160px] lg:pt-[220px]" name="contact">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          {/* text */}
          <div className="flex-1 font-bold">
            {/* info items */}
            {info.map((item, index) => {
              //destructure item
              const { subtitle, email } = item;
              return (
                <div key={index}>
                  {/* subtitle */}
                  <div className="mb-6 text-accent2">
                    {subtitle}
                  </div>
                  {/* address, phone and email */}
                  <div className="flex flex-col gap-y-3 mb-8">
                    {/* email */}
                    <div className="flex items-center gap-[10px]">
                      <div>{email.icon}</div>
                      <div className="text-accent font-bold">{email.address}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* form */}
          <div className="flex-1 xl:pl-[40px] flex justify-center items-center">
            <form className="flex flex-col gap-y-10 w-full" onSubmit={handleSubmit}>
              <input
                className="border-b border-dark placeholder:text-accent2 bg-accent trackingg-[0.06em] outline-none pb-4"
                placeholder={form.name}
                type="text"
                name="from_name"
                value={toSend.from_name}
                onChange={handleChange}
                required
              />
              <input
                className="border-b border-dark placeholder:text-accent2 bg-accent trackingg-[0.06em] outline-none pb-4"
                placeholder={form.email}
                type="email"
                name="reply_to"
                value={toSend.reply_to}
                onChange={handleChange}
                required
              />
              <textarea
                className="border-b border-dark placeholder:text-accent2 bg-accent trackingg-[0.06em] outline-none pb-4"
                placeholder={form.message}
                name="message"
                value={toSend.message}
                onChange={handleChange}
                required
              />
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              {/* button */}
              <button
                type="submit"
                className="bg-accent hover:bg-header text-accent2 font-bold py-2 px-4 rounded"
                disabled={isSubmitted}
              >
                {isSubmitted ? 'SENT!' : form.btnText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

