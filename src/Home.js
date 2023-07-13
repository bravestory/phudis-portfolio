import github from "./image/github.png";
import linkedin from "./image/LinkedIn.png";
import './App.css';
import TypeWriterEffect from 'react-typewriter-effect';
import MovingGif from "./image/magewalk.gif";

function App() {
    return (
      <div className="App">
        <header className="Home-header">
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
          <p className="animate slideUptoBot animate--slow head">
            Hi There! I am Phudis Rangsisuriyachai
          </p>
          <p className="animate slideUptoBot">
          I'm a passionate 
          </p>
          <a className="font">
            <TypeWriterEffect
              textStyle={{
                fontFfamily: 'Press Start 2P',
                color: '#27fe27',
                fontSize: '1.5em',
              }}
              startDelay={500}
              cursorColor = "#3F3D56"
              multiText={[
                '"Web Designer"',
                '"Gamer"',
                '"Software Developer"',
                '"RPG Maker"'
              ]}
              multiTextDelay={1000}
              typeSpeed={30}
              multiTextLoop
            />
          </a>
          <p className="animate slideUptoBot animate--fast">
            I am an incoming Bachelor of Science student in Computer Science at the University of California, Santa Cruz. I have strongly interested in Mobile Application developer, Full-Stack Web Designer, and Machine learning.
          </p>
        </header>
        <div className="logo-container">
          <a href="https://github.com/bravestory"  target="_blank" rel="noopener noreferrer" >
            <img src={github} className="git-logo" alt="logo" />
          </a>
          <a href="https://www.linkedin.com/in/phudis-rangsisuriyachai" target="_blank" rel="noopener noreferrer" >
            <img src={linkedin} className="linked-logo" alt="logo" />
          </a>
        </div>
        <div className="moving-gif-container">
          <img src={MovingGif} alt="Moving GIF" className="moving-gif" />
        </div>
      </div>
    );
  }
  
  export default App;
  