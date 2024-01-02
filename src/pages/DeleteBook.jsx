import {useState} from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBooks = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const handleDeleteBook = () => {
        setLoading(true);
        axios
        .delete(`https://mern-server2-oj5n.onrender.com/books/${id}`)
        .then(() => {
            setLoading(false);
            navigate('/');
        })
        .catch((error) => {
            setLoading(false);
            alert('An error happend. Please Check console');
            console.log(error);
        });
    };
    return (
        <div>
            <BackButton />
            <h1>Delete Book</h1>
            {loading ? <Spinner /> : ''}
            <div>
                <h3>Are you sure you want to delete this book?</h3>

                <button onClick={handleDeleteBook}>
                    yes, delete it
                </button>
            </div>
        </div>
    )
};

export default DeleteBooks;