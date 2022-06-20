import './Home.css'
import Linkedin from './Media/linkedin.jpeg'
import Github from './Media/github.png'
import Headshot from './Media/headshot.jpg'

const Home = () => {
    return (
        <div className="home">
            <div className="home__picBox">
                <div className="home__picBoxSpecific">
                    <img src={Headshot} className="home__pic" />
                </div>
                <div className="home__contact">
                    <p className="home__title">
                        Electrical and Computer Engineering Grad
                        Student at Binghamton University | Machine Learning 
                        Research Assistant
                    </p>
                    <p className="home__title">
                        Machine Learning | Full Stack Development | Embedded Systems
                    </p>
                    <div className="home__logoBox">
                        <a href="https://www.linkedin.com/in/andrew-benner1/" target="_blank">
                            <img src={Linkedin} className="home__logoBoxPic" />
                        </a>
                        <a href="https://github.com/abenner2000" target="_blank">
                            <img src={Github} className="home__logoBoxPic" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="home__textBox">
                <p className="home__text">
                Hello, thank you for taking the time to visit my website.
                My name is Andrew Benner and I am an Electrical and 
                Computer Engineering Graduate student at Binghamton
                University. I received a full scholarship to pursue my 
                Master's Degree as a Machine Learning Research Assistant
                to Dr. Jian Li. On my website please find my work experience
                history, personal side projects, school projects, facts
                about me and more.
                </p>
            </div>
        </div>
    );
}

export default Home