import TelephoneIcon from "../../assets/images/telephone.png";
import EmailIcon from "../../assets/images/mail.png";
import LocationIcon from "../../assets/images/location-pin.png"


export function ContactInfo () {
    return (
        <div className="contact--info-half">
                <h2>Contact Info</h2>
                <p>Hello, feel free to contact us through filing the following form</p>
                <div className="subinfo--wrapper">
                    <div className="contact--icon--wrapper">
                        <img className="subinfo--icon" src = {TelephoneIcon} alt="telephone"/>
                        <span>+55 (51) 3321745</span>
                    </div>
                    <div className="contact--icon--wrapper" >
                        <img className="subinfo--icon" src = {EmailIcon} alt ="email"/>
                        <span>contact@example.com</span>
                    </div>
                    <div className="contact--icon--wrapper">
                        <img className="subinfo--icon" src = {LocationIcon} alt ="location"/>
                        <span>Belgrade/Serbia</span>
                    </div> 
                </div>
            </div>
    )
}