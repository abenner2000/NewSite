import './Education.css';
import Workbox from './Workbox';
import BX from './Media/BxSci.jpeg';
import BING from './Media/bing.png'
import BOSTON from './Media/boston.png'

const Education = () => {
    return(
        <div className="education">
            <h1 className="experience__title" id="grad">
                Graduate Studies
            </h1>
            <Workbox 
                title="Master of Science in Software Development at Boston University"
                pic={BOSTON}
                description="I am currently a graduate student at Boston University where I
                received a scholarship to study Software Development. I do this part time as 
                I am also a grad student at Binghamton University and Research Assistant. I 
                am doing this because I want to continue to develop my software development skills
                as I progress throughout my life and career."
                link="https://www.bu.edu/met/degrees-certificates/ms-software-development/"
                view="Program"
            />
            <Workbox 
                title="Master of Science in Electrical and Computer Engineering at Binghamton University"
                pic={BING}
                description="I am currently a graduate student at Binghamton University. I
                received a full scholarship to study Electrical and Computer Engineering 
                and conduct Machine Learning Research assistant work with my M.S advisor, 
                Dr. Jian Li. My coursework leans heavily towards machine learning, 
                cybersecurity, and computer architecture."
                link="https://www.binghamton.edu/electrical-computer-engineering/graduate/index.html"
                view="Program"
            />
            <h1 className="experience__title" id="undergrad">
                Undergraduate Studies
            </h1>
            <Workbox 
                title="Bachelor of Science in Computer Engineering at Binghamton University"
                pic={BING}
                description="In May of 2022 I graduated from Binghamton University with
                a Bachelor of Science in Computer Engineering. I learned about a vast 
                assortment of topics such as computer networks, operating systems, digital 
                logic, circuits, and more. However, I chose most of my courses to focus on
                embedded systems design and C programming. I throughly enjoyed writing embedded
                C to program microcontrollers, robots, and other pieces of hardware."
                link="https://www.binghamton.edu/electrical-computer-engineering/undergraduate/index.html"
                view="Program"
            />
            <h1 className="experience__title" id="hs">
                High School
            </h1>
            <Workbox 
                title="High school diploma from The Bronx High School of Science"
                pic={BX}
                description="In June of 2018 I received my high school diploma from The
                Bronx High School of Science. It is a specialized high school and a public 
                magnet that helped me to build my foundation in STEM subjects. It introduced
                me to computer science and programming and sparked my curiosity to explore 
                that field more."
                link="https://www.bxscience.edu/"
                view="School"
            />
        </div>
    );
}

export default Education