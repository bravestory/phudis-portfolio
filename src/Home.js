import github from "./github.png";
import linkedin from "./LinkedIn.png";
import './App.css';
import TypeWriterEffect from 'react-typewriter-effect';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hi There! I am Phudis Rangsisuriyachai
          </p>
          <a>
          I'm a passionate 
          </a>
          <TypeWriterEffect
            textStyle={{
              fontFfamily: 'Red Hat Display',
              color: 'white',
              fontWeight: 500,
              fontSize: '1.5em',
            }}
            startDelay={2000}
            cursorColor = "#3F3D56"
            multiText={[
              'Web Designer',
              'Gamer',
              'Software Developer',
              'Final Fantasy Enjoyer'
            ]}
            multiTextDelay={1000}
            typeSpeed={30}
            multiTextLoop
          />
        </header>
        <div className="logo-container">
          <a href="https://github.com/bravestory"  target="_blank" rel="noopener noreferrer" >
            <img src={github} className="git-logo" alt="logo" />
          </a>
          <a href="https://www.linkedin.com/in/phudis-rangsisuriyachai" target="_blank" rel="noopener noreferrer" >
            <img src={linkedin} className="linked-logo" alt="logo" />
          </a>
        </div>
      </div>
    );
  }
  
  export default App;
  