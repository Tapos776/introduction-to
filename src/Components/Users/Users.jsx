import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'
const Users = () => {
    const users =useLoaderData();
    return (
        <div className="user">
            <h2> Our Users: {users.length}</h2>
            <p>All Users Are Honest and More Humanity</p>
            <div className="users">
                {
                    users.map((user,indx) =><User key={indx} user={user}></User> )
                }
            </div>
        </div>
    );
};

export default Users;