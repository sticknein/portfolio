import './App.css';
import prof_pic from './images/prof_pic.jpg';
import spotify_logo from './images/spotify-logo.png';
import cranium_tile from './images/cranium.png';
import roland_logo from './images/roland_logo.png';
import weather_logo from './images/weather_logo.jpeg';
import wiki_logo from './images/wiki_logo.png';

function App({ active }) {
  return (
    <div className='App'>
      <div id='col-1'>
        <a href='https://holophonemusic.com/' target='_blank'>
        <img 
            className='prof-pic'
            src={prof_pic} 
            alt='Profile Picture' 
        />
      </a>
      </div>
      <div id='col-2'>
        <div className='about-me'>
            <h1 id='salutation'>Hi, I'm Nick Stein</h1>
            <h3 id='subtitle'>Full-Stack Web Developer</h3>
            <p id='bio'>
              I’m a former professional musician who discovered a love of coding during the pandemic.  Let's build things!
            </p>
            <h4>Explore my current project:</h4>
            <div className='projects'>
              <div className='project'>
                <a
                id='listener'
                href='https://sticknein-listener.herokuapp.com'
                target='_blank' 
              >
                <img className='app-tile' alt='Listener App' src={spotify_logo} />
                <figcaption>listener - share your listening activity with friends</figcaption>
              </a>
              </div>
            </div>
            <div className='contact-container'>
              <a 
              href='mailto:sticknein@gmail.com'
              className='contact-button-small'
            >
              Email Me
            </a>
            </div>
        </div>   
      </div>
      <div id='col-3'>
        <a 
        href='mailto:sticknein@gmail.com'
        className='contact-button'
      >
        Email Me
      </a>
    </div>
  </div>
  );
}

export default App;
