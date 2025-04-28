import { useState, ChangeEvent, FormEvent } from 'react';
import api from '@/utils/api'

import contactme from '@/styles/ContactMe.module.css';

interface InputFields {
  fullname: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [inputs, setInputs] = useState<InputFields>({
    fullname: '',
    email: '',
    message: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setInputs(values => ({...values, [name]: value}))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(inputs)

    try {
      const response = await api.post('/api/contact', inputs);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    // Check for if the email gives the correct form
  }


  return (
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
  )
}

export default ContactForm;
