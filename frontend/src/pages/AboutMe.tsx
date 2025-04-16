import '@/styles/aboutme.css';

function AboutMe() {

  return(
    <div className='center-content'>
      <div className='aboutme-container'>
        <h1>About me</h1>
        <div className='container aboutme-desc'>
          <p>As an avid software engineer, I personally believe that curiosity is the most important trait that I have in my aresenal. I love getting pulled into rabbit holes of new subjects that really open up my perspective and give me new ways to look at problems that may not on the surface seem to be related. Like how burdock burrs inspired the invention of Velcro I believe it is vital for a truly excellent engineer to be knowledgeable in a whole manner of subjects.</p>
          <br></br>
          <p>I’m currently attending the University of North Texas pursuing a B.S. in computer science with an expected graduation date in December, 2025. While I’m currently working on my skill set for full-stack web development, I also have working knowledge in computer organization and architecture, computer networking, systems programming, parallel programming, application development,  mathematics, the Linux ecosystem, and a litany of programming languages and concepts for other miscellaneous tasks</p>
        </div>
        <div className='socials-container'>
          <h3>Socials</h3>
          <div className='container socials-links'>
            <a href="https://github.com/danielpodgornyy">
              <img src="/images/github.svg" alt="github-logo" className="social-img"></img>
            </a> 
            <a href="https://www.linkedin.com/in/daniel-podgornyy-956b52213/">
              <img src="/images/linkedin.svg" alt="github-logo" className="social-img"></img>
            </a> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
