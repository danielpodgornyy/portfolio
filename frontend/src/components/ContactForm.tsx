import { useState, ChangeEvent, FormEvent } from 'react';
import api from '@/utils/api'

import { InputFields } from '@/types.js'
import contactme from '@/styles/ContactMe.module.css';

type Status = 'SUCCESS' | 'FAILURE' | 'IDLE';

function ContactForm() {
  const [inputs, setInputs] = useState<InputFields>({
    fullname: '',
    email: '',
    message: '',
  });
  const [messageStatus, setMessageStatus] = useState<Status>('IDLE')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setInputs(values => ({...values, [name]: value}))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setMessageStatus('IDLE');

    try {
      const response = await api.post('/api/contact', inputs);
      console.log(response.data);

      setMessageStatus((response.status == 200) ? 'SUCCESS': 'FAILURE');
    } catch (error) {
      console.error(error);
      setMessageStatus('FAILURE')
    }
    // Check for if the email gives the correct form
  }


  return (
    <>
      <div className={
        messageStatus == 'SUCCESS' ? contactme.successResponse : contactme.failureResponse // I don't have to take into account idle because there is no text to format anyways
      }>{
        messageStatus == 'SUCCESS' ? "SUCCESS: Message has been sent! I'll get back to you as soon as possible."
        : messageStatus == 'FAILURE' ? "FAILURE: An error has occured and no response was set"
        : ''

      }</div>
      <form className={`container ${contactme.contactForm}`} onSubmit={handleSubmit}>
        <div className={contactme.nameAndEmail}>
          <div>
            <label>
              Name<br></br>
              <input type="text" name="fullname" value={inputs.fullname || ''} onChange={handleChange} required/>
            </label>
          </div>
          <div>
            <label>
              Email<br></br>
              <input type="email" name="email" value={inputs.email || ''} onChange={handleChange} required/>
            </label>
          </div>
        </div>
        <label className={contactme.message}>
          Message<br></br>
          <textarea name="message" value={inputs.message || ''} onChange={handleChange} required/>
        </label>
        <button>
          Submit
        </button>
      </form>
    </>
  )
}

export default ContactForm;
