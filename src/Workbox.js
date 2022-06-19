import './Workbox.css'

const Workbox = (props) => {
    if (props.view){
        return(
            <div className="workbox">
                <div className="workbox__titleBox">
                    <p className="workbox__title">{props.title}</p>
                </div>
                <div className="workbox__contentBox">
                    <div className="workbox__picBox">
                        <img src={props.pic} className="workbox__pic" />
                    </div>
                    <div className="workbox__description">
                        <p>
                            {props.description}
                        </p>
                    </div>
                </div>
                <div className="workbox__clickBox">
                    <a href={props.link} target="_blank">
                        <button className="workbox__click">
                            View {props.view}
                        </button>
                    </a>
                </div>
                <br />
            </div>
        );
    }
    else{
        return(
            <div className="workbox">
                <div className="workbox__titleBox">
                    <p className="workbox__title">{props.title}</p>
                </div>
                <div className="workbox__contentBox">
                    <div className="workbox__picBox">
                        <img src={props.pic} className="workbox__pic" />
                    </div>
                    <div className="workbox__description">
                        <p>
                            {props.description}
                        </p>
                    </div>
                </div>
                <br /> <br />
            </div>
        );
    }
}

export default Workbox