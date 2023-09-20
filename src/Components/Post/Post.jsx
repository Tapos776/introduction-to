import { Link, useNavigate } from "react-router-dom";

const Post = ({posts}) => {
    const {id,userId,title}=posts;
    const navigate =useNavigate()
    const handleShowDetail = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div>
            <div className="userAll">
                <h2>Id :{ id}</h2>
                <h3>UserId: {userId}</h3>
                <h4>Title : { title}</h4>
                <Link to={`/post/${id}`}><button>Post Details</button></Link><br/>
                <button onClick={handleShowDetail}>Click to See Details</button>
            </div>
        </div>
    );
};

export default Post;