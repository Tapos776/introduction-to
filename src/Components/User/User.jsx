import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id ,name ,email, phone}=user ;
    return (
        <div className="userAlls" >
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;