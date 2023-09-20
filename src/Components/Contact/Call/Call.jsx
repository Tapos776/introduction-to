import { Link } from "react-router-dom";

const Call = ({contact}) => {
    const {id,title ,body}= contact
    return (
        <div className="userAlls">
            <h3>Title : {title}</h3>
            <p>{body}</p>
            <Link to={`contact/${id}`}>Show More</Link>
        </div>
    );
};

export default Call;