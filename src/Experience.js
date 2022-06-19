import './Experience.css'
import Workbox from './Workbox';
import UCA from './Media/UCA.jpg';
import EK from './Media/ekanyone.jfif';
import ZAS from './Media/zas.jfif';
import SYEP from './Media/syep.png';

const Experience = () => {
    return(
        <div className="experience">
            <h1 className="experience__title">
                Work Experience
            </h1>
            <Workbox 
                title="Undergraduate Course Assistant @ Binghamton University"
                pic={UCA}
                description="Most recently, I was an undergraduate course assistant 
                for a class called Junior Design at Binghamton University. This 
                course used C programming to program hardware like microcontrollers. 
                I helped students with questions that they had in regards to lab 
                assignments and projects where they had to program the soft 
                microprocessor MicroBlaze. I was also available for electronic 
                assistance via email and helped the students in the conceptual 
                development of their final projects."
                link="https://www.binghamton.edu/electrical-computer-engineering/index.html"
                view="Company"
            />
            <Workbox 
                title="Software Engineering Intern @ eKanyone"
                pic={EK}
                description="During my Summer '21 internship at eKanyone, I got 
                to work on a team of interns where I vastly improved my skills and 
                knowledge on both front and backend programming. I got to contribute 
                to the design and development of a full stack CRUD ecommerce website 
                using ReactJS and Django."
            />
            <Workbox 
                title="Technology/Web Dev Intern @ Zen Art Soul"
                pic={ZAS}
                description="During my internship at Zen Art Soul I greatly improved 
                my HTML,CSS, and JavaScript skills, as I was responsible for keeping 
                the store and company websites updated and fresh. The company used 
                Weebly, however I constantly found myself editing code to change 
                templates and designs. I also worked with the photography intern 
                to keep a fresh and changing gallery of art displayed on the website."
                link="http://zenartssoul.com/index.html"
                view="Company"
            />
            <Workbox 
                title="Digital Art Intern @ SYEP"
                pic={SYEP}
                description="During my internship at SYEP @ Laguardia Community College, 
                I learned problem solving skills and polished my creativity with 
                various projects throughout the summer. For my final project, I created 
                a website that compiled the final projects of all my other fellow 
                interns. I published the website to GitHub Pages and my supervisor 
                used my final project to present to the administration."
                link="https://www1.nyc.gov/site/dycd/services/jobs-internships/summer-youth-employment-program-syep.page"
                view="Company"
            />
        </div>
    );
}

export default Experience