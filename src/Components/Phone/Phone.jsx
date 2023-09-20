import { useLoaderData } from "react-router-dom";
import Phones from "../Phones/Phones";


const Phone = () => {
    const phone =useLoaderData()
    const phones =phone.data
    
    return (
        <div>
            <h2>All Phone : {phones.length}</h2>
            <div className="users">
            {
                phones.map((phones ,indx)=> <Phones key={indx} phones={phones}></Phones>)
            }
            </div>
        </div>
    );
};

export default Phone;