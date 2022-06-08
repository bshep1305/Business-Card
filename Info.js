import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMailBulk} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
const element = <FontAwesomeIcon icon={faLinkedin} />
const element2 = <FontAwesomeIcon icon={faMailBulk} />



export default function Info() {
    const url = "https://media-exp1.licdn.com/dms/image/C4E03AQHZ2zRBnf_h2w/profile-displayphoto-shrink_400_400/0/1517594528771?e=1660176000&v=beta&t=J1TcL9jYAyTujkCFZwx3DAM0odmOoCCDurrR6ZEtcuY"
    
    return (
        <div className="infocontainer">
                    <img className="profile-picture" src={url} alt="me, randon Shepard" />
                     <h2 className="myname display-4">Brandon Shepard</h2>
                    <p className="jobtitle h6">Frontend Developer</p>
        
            <div className="buttoncontainer">
                    <a className="button button1 btn-secondary" href="mailto:bshep1305@gmail.com"> {element2} Email</a>
                     <a className="button button2 btn-secondary" href="https://www.linkedin.com/in/brandon-shepard-b99181b3" target="_blank" rel='noreferrer'>{element} LinkedIN</a>
            </div>
        </div>
        
    )
    
}