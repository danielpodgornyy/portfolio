import contactme from '@/styles/ContactMe.module.css'

function CopyEmailButton() {
  function copyEmailToClipboard(e) {
    let email = import.meta.env.VITE_EMAIL;

    navigator.clipboard.writeText(email);
  }

  return (
    <button className={contactme.emailButton} onClick={copyEmailToClipboard}>
      <img src='/images/copy.png'></img>
      email
    </button>
  )
}

export default CopyEmailButton;
