import './Projects.css'
import FRDM from './Media/FRDM.PNG'
import POL from './Media/Pololu.PNG'
import MERN from './Media/MERN.PNG'
import HANGMAN from './Media/Hangman.PNG'
import YT from './Media/youtube.png'
import Workbox from './Workbox'
import Logic from './Media/Logic.PNG'
import DEEP from './Media/DEEP.PNG'

const Projects = () => {
    return(
        <div className="projects">
            <h1 className="projects__title" id="web">
                Web Applications
            </h1>
            <Workbox 
                title="MERN E-Commerce Website" 
                pic={MERN}
                description="I developed this Full Stack website 
                using a MERN stack. I used Firestore database (NoSQL) 
                from Firebase instead of MongoDB. This website handles 
                user authentication through Firebase, a secure method 
                of payment processing through integration of the Stripe 
                API, and provides a user order history breakdown through 
                the connection with the Cloud Firestore database. 
                Alongside this, the user cart can be manipulated through 
                editing global variables with React hooks and state."
                link="https://ecommerce-site-3c042.web.app/"
                view="Project"
            />
            <Workbox 
                title="Hangman Challenge" 
                pic={HANGMAN}
                description="I developed this Hangman game using React.JS 
                (similar to how I developed this website). I used components 
                to easily construct the UI, and coded functionality that 
                entails: choosing a difficulty level, drawing the hangman, 
                handling correct/incorrect/repeated guesses, and more. Click 
                the image to be taken to the app."
                link="https://abenner2000.github.io/Hangman/"
                view="Project"
            />
            <Workbox 
                title="Hangman Bot"
                pic={YT}
                description="This bot was built using the Selenium framework, 
                on Python. You can play the video to see a demo. The bot works 
                by first guessing all vowels, and then guessing random letters 
                (excluding previously guessed letters)."
                link="https://www.youtube.com/watch?v=_QI0u8PDYSc&feature=youtu.be"
                view="Project"
            />
            <Workbox 
                title="Logic Gate Calculator"
                pic={Logic}
                description="This is a logic gate calculator that I initally 
                created using VanillaJS. It takes a logic gate and multiple 
                binary inputs, and then outputs the correct binary output. I 
                rebuilt this using ReactJS to improve my skills and to make it 
                easier to host on Github Pages. Click the image to be taken to 
                the app."
                link="https://abenner2000.github.io/LogicGateReact/"
                view="Project"
            />
            <h1 className="projects__title" id="embedded">
                Embedded Systems Projects
            </h1>
            <Workbox
                title="FRDM KL25Z Board Project"
                pic={FRDM}
                description="This was the final project for a course I took in my 
                senior year at SUNY Binghamton (EECE 458 - Embedded Systems Design). 
                Using drivers to interact with the hardware of the board, I made use 
                of a built in accelerometer to allow the user to create a color and 
                display it on the LED. Holding the board at varying angles on different 
                planes (picked up by the accelerometer) will display a color that the 
                user can choose by pressing the button. Once three colors have been 
                picked, a final button press will display the color that all three 
                chosen colors create once combined. Click on the picture to be taken 
                to a YouTube demo. The code can be found in my GitHub."
                link="https://www.youtube.com/watch?v=cULHY6uY5r8&feature=youtu.be"
                view="Project"
            />
            <Workbox
                title="Pololu 3pi Robot Project"
                pic={POL}
                description="This was the final project for a course I took in my 
                junior year at SUNY Binghamton (EECE 387 - Junior Design). I created 
                drivers to interact with the hardware of the Pololu 3PI robot and 
                then programmed it to completely navigate a maze, detect all mines 
                (paper pieces) and return to the start. Click on the picture to be 
                taken to a YouTube demo. The code can be found in my GitHub."
                link="https://www.youtube.com/watch?v=VpMcMdAtS50&feature=youtu.be"
                view="Project"
            />
            <h1 className="projects__title" id="machine">
                Machine Learning Projects
            </h1>
            <Workbox
                title="AWS Bing DeepRacers: Play to Learn Machine Learning"
                pic={DEEP}
                description="This was the final project for a course I took in my 
                senior year at SUNY Binghamton (EECE 489 - Senior Project). My team
                and I built machine learning models to help train the DeepRacer in 
                a virtual track environment hosted on Amazon Web Services. My team 
                also constructed a physical track where we programmed the best ML model
                onto the physical racer to watch it race in real life. We eventually entered
                our best model into a tournament hosted by Amazon and placed in the top
                50% of racers."
                link="https://youtu.be/ZaxIAwWj1Gg"
                view="Project"
            />
        </div>
    );
}

export default Projects