import { useLoaderData } from "react-router-dom";

const CallDetails = () => {
    const contact =useLoaderData();
  
 const {userId,id,title,body}=contact;
    return (
        <div className="userAlls">
            <h2>UserId : { userId}</h2>
            <h2>Id : { id}</h2>
            <h3>Title : { title}</h3>
            <p>Comment : { body}</p>
        </div>
    );
};

export default CallDetails;