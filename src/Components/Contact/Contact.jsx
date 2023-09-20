import { useLoaderData } from "react-router-dom";
import Call from "./Call/Call";

const Contact = () => {
    const contact=useLoaderData()
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <p>We are one call away</p>
            <div className="users">
                {
                    contact.map((contact ,indx)=><Call key={indx} contact={contact}></Call>)
                }
            </div>
        </div>
    );
};

export default Contact;