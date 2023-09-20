import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user =useLoaderData();
    const {name,website,phone}=user ;
    return (
        <div className="userAlls">
            <h2><u>Details About User</u></h2>
            <h2>Name: { name}</h2>
            <h2>Website: { website}</h2>
            <h2>Phone: { phone}</h2>
            <h2>Address: { user.address.city}</h2>
            <h2>Company: { user.company.name}</h2>
            <h2>CatchPhrase: { user.company.catchPhrase}</h2>
            <h2>BS: { user.company.bs}</h2>
        </div>
    );
};

export default UserDetails;