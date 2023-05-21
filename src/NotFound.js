import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h1>404 not found</h1>
            <p>The page you are looking for does not exist</p>
            <Link to="/">Go back to home</Link>
        </div>
     );
}
 
export default NotFound;