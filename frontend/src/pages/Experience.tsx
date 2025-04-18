import experience from '@/styles/Experience.module.css';

function Experience() {

  return (
    <div className='center-content'>
        <div className={`container ${experience.pdfContainer}`}>
          <embed src='/pdfs/resume.pdf' width='816px' height='1054px'/>
      </div>
    </div>
  )
}

export default Experience;
