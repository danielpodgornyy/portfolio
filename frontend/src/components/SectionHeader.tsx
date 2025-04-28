
interface SectionHeaderProps {
  sectionName: string;
}

function SectionHeader({ sectionName }: SectionHeaderProps) {

  return(
    <div className='section-header'>
      <h1>{sectionName}</h1>
      <div className='hug-bottom'>
      </div>
    </div>
  )
}

/*
        <div className='util-header'>
          <h3>tags</h3>
          <button>+</button>
        </div>
        */

export default SectionHeader;
