
import {Link} from "react-router-dom";


const BackButton = () => {
    const destination = '/';
    return(
        <div>
            <Link to={destination}>
                <h3>Back</h3>
            </Link>
        </div>
    )
}

export default BackButton;