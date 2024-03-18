import { React, useState } from 'react';
//import contact data
import { contactData } from '../data';
import { send } from 'emailjs-com';

const Contact = () => {
  //destructure contact data
  const { title, info, form } = contactData;
  //form submission
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'HVMANE',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    /* --- METHOD TO SEND THE MAIL --- */
    send('service_98j0v1c', 'template_gjue3ls', toSend, 'zFjF65dKnY3EQpxPK')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section className="section pt-[160px] lg:pt-[220px]" name="contact">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          {/* text */}
          <div className="flex-1 font-bold">
            {/* title */}
            <h2 className="h2 max-w-[490px]">{title}</h2>
            {/* info items */}
            {info.map((item, index) => {
              //destructure item
              const { title, subtitle, email } = item;
              return (
                <div key={index}>
                  {/* title */}
                  <div className="font-primary uppercase text-xl mb-3">
                    {title}
                  </div>
                  {/* subtitle */}
                  <div className="mb-6 text-dark">
                    {subtitle}
                  </div>
                  {/* address, phone and email */}
                  <div className="flex flex-col gap-y-3 mb-8">
                    {/* email */}
                    <div className="flex items-center gap-[10px]">
                      <div>{email.icon}</div>
                      <div className="font-medium text-accent font-bold">{email.address}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* form */}
          <div className="flex-1 xl:pl-[40px] flex justify-center items-center">
            <form className="flex flex-col gap-y-10 w-full" onSubmit={onSubmit}>
              <input
                className="border-b border-dark placeholder:text-dark bg-header italic trackingg-[0.06em] outline-none pb-4"
                placeholder={form.name}
                type="text"
                name="from_name"
                value={toSend.from_name}
                onChange={handleChange}
              />
              <input
                className="border-b border-dark placeholder:text-dark bg-header italic trackingg-[0.06em] outline-none pb-4"
                placeholder={form.email}
                type="text"
                name="reply_to"
                value={toSend.reply_to}
                onChange={handleChange}
              />
              <input
                className="border-b border-dark placeholder:text-dark bg-header italic trackingg-[0.06em] outline-none pb-4"
                placeholder={form.message}
                type="text"
                name="message"
                value={toSend.message}
                onChange={handleChange}
              />
              {/* button */}
              <button className="btn btn-sm btn-dark self-start">
                {form.btnText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
