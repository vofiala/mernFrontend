import { useState } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveBook = () => {

        if (!title || !author) {
            alert('Please fill in both title and author fields.');
            return;
        }

        const data = {
            title,
            author,
        };
        setLoading(true)
        axios
        .post('https://stately-truffle-59bf0c.netlify.app/books', data)
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
            <h1>Create Book</h1>
            {loading ? <Spinner /> : ''}
            <div>
                <div>
                    <label >Title
                    <input 
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                        
                        
                    /></label>
                </div>
                <div>
                    <label >Author
                    <input 
                        type="text"
                        name="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        
                        
                    /></label>
                </div>
                <button type="button" onClick={handleSaveBook}>
                    <a href="/">Save</a>
                </button>
            </div>
        </div>
    );
};

export default CreateBooks;
