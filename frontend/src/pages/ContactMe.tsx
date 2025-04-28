import CopyEmailButton from '@/components/CopyEmailButton'
import ContactForm from '@/components/ContactForm';

import contactme from '@/styles/ContactMe.module.css';

function ContactMe() {

  return(
    <div className='center-content'>
      <div className={contactme.contactmeContainer}>
        <h1>Contact Me</h1>
        <p>
          Feel free to shoot an <CopyEmailButton /> or submit the form below.
        </p>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactMe;
