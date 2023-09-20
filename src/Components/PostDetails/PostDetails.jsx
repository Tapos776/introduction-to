import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const details = useLoaderData();
    const goBack=useNavigate();
    const handelGoBack =()=>{
        goBack(-1)
        // goBack(`/posts`) //Same Kaj Hobe
    }

    return (
        <div className="user">
            <h3>Post Details</h3>
            <h2>Id :{details.id}</h2>
            <h3>UserId: {details.userId}</h3>
            <h4>Title : {details.title}</h4>
            <h2>{details.body}</h2>
            <button onClick={handelGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;