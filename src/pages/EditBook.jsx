import React from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const EditBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const handleEditBook = () => {
        const data = {
            title,
            author,
        };
        setLoading(true);
        axios
        .put(`https://mern-server2-oj5n.onrender.com/books/${id}`, data)
        .then((response) => {
                setAuthor(response.data.author);
                setTitle(response.data.title);
                setLoading(false);
                navigate("/");
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
            <h1>Edit Book</h1>
            {loading ? <Spinner /> : ''}
            <div>
                <div>
                    <label>Title</label>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Author</label>
                    <input 
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} 
                    />
                </div>
                <button onClick={handleEditBook}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditBooks;