import './App.css';
import prof_pic from './images/prof_pic.jpg';
import cranium_tile from './images/cranium.png';

function App({ active }) {
  return (
    <div className='App'>
        <img 
            className='prof-pic'
            src={prof_pic} 
            alt='Profile Picture' 
        />
      <div className='about-me'>
            <h1 id='salutation'>Hi, I'm Nick Stein</h1>
            <h3 id='subtitle'>Full-Stack Web Developer</h3>
            <p id='bio'>
              I’m a former professional musician who discovered a love of coding during the pandemic and decided to pursue a career in tech. 
              I posses a BA in Business and have experience delivering results from small teams with limited resources in a variety of environments. 
              I’m looking for an opportunity to join a tech company and apply my relevant business knowledge, operations experience, and growing technical expertise.
            </p>
            <h4>Explore some of my projects:</h4>
            <div className='projects'>
              <div className='project-column'>
                <div className={`project ${active && 'project--active'}`} id='cranium'>
                  <img className='app-tile' alt='Cranium App' src={cranium_tile} />
                  <figcaption>Cranium | Ticketing App</figcaption>
                </div>
                <div className='project' id='stick909'>
                  <img className='app-tile' alt='Cranium App' src={cranium_tile} />
                  <figcaption>Cranium | Ticketing App</figcaption>
                </div>
              </div>
              <div className='project-column'>
                <div className='project' id='weather'>
                <img className='app-tile' alt='Cranium App' src={cranium_tile} />
                <figcaption>Cranium | Ticketing App</figcaption>
              </div>
              <div className='project' id='wiki'>
                <img className='app-tile' alt='Cranium App' src={cranium_tile} />
                <figcaption>Cranium | Ticketing App</figcaption>
              </div>
              </div>
            </div>
      </div>    
    </div>
  );
}

export default App;
