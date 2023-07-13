import './App.css';
import Card from './CardComponents/Card';
import CardSMC from './CardComponents/CardSMC';
import CardUCSC from './CardComponents/CardUCSC';
import highschoolpic from './image/HighSchool.jpg';
import SMCbuilding from './image/smc-building.jpg';
import ucsclogo from './image/UCSC.jpg';
import highschoolgif from './image/HighSchool.gif';
import smcgif from './image/SMCstudent.gif';
import UCSCgif from './image/graduationpic.gif';

function App() {
  /*
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting)
      {
        entry.target.classList.add('show');
      }
      else
      {
        entry.target.classList.remove('show')
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((element) => observer.observe(element))
  */
 
    return (
      <div className="Education">
        <section className="hidden">
          <div>
            <img src={highschoolgif} alt="HighSchool GIF" className="highschool-gif" />
          </div>
          <div className="highschool-card">
            <Card
              title='Satriwittaya 2'
              imageUrl={highschoolpic}
              body='High School Diploma'
            />
          </div>
        </section>
        <section className="hidden">
          <div>
            <img src={smcgif} alt="SMC GIF" className="SMC-gif" />
          </div>
          <div className="smc-card">
            <CardSMC
                title='Santa Monica College'
                imageUrl={SMCbuilding}
                body='Transfer College Student To UCSC'
              />
          </div>
        </section>
        <section className="hidden">
          <div>
            <img src={UCSCgif} alt="UCSC GIF" className="UCSC-gif" />
          </div>
          <div className="ucsc-card">
            <CardUCSC
                title='University of California, Santa Cruz'
                imageUrl={ucsclogo}
                body='Expected to graduate as a bachelor of science on Computer Science in 2023'
              />
          </div>
        </section>
      </div>
    );
  }
  
  export default App;
  
  