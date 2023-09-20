import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error =useRouteError();
    console.log(error);
    return (
        <div className="user">
            <h2>.......Oops !!!!!!</h2>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found ..... Go Back Home</h3>
                </div>
                
            }
            <Link to={"/"}><button>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;