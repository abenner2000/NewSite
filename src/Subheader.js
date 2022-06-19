import './Subheader.css'
import Linkedin from './Media/linkedin.jpeg'
import Github from './Media/github.png'

const Subheader = (props) => { 
    if(props.type == "base"){
        return (
            <div className="subheader">
                <div className="subheader__container">
                    <p className="subheader__text">
                        Email: andrewbenner918@gmail.com
                    </p>
                </div>
            </div>
        );
    }
    else if(props.type == "education"){
        return(
            <div className="subheader">
                <div className="subheader__container">
                    <a href="#grad">
                        <p className="subheader__text">
                            Graduate Studies
                        </p>
                    </a>
                    <a href="#undergrad">
                        <p className="subheader__text">
                            Undergraduate Studies
                        </p>
                    </a>
                    <a href="#hs">
                        <p className="subheader__text">
                            High School
                        </p>
                    </a>
                </div>
            </div>
        );
    }
    else if(props.type == "projects"){
        return(
            <div className="subheader">
                <div className="subheader__container">
                    <a href="#web">
                        <p className="subheader__text">
                            Web Applications
                        </p>
                    </a>
                    <a href="#embedded">
                        <p className="subheader__text">
                            Embedded Systems Projects
                        </p>
                    </a>
                    <a href="#machine">
                        <p className="subheader__text">
                            Machine Learning Projects
                        </p>
                    </a>
                </div>
            </div>
        );
    }
}

export default Subheader