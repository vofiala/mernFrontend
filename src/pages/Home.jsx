import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import {Link} from "react-router-dom";


const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
        .get('http://localhost:8000/books')
        .then((response) => {
            setBooks(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });

    }, []);

    return (
        <div>
            <div>
                <h1>Books List</h1>
                <Link to='/books/create'><p>create</p></Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th><h2>no</h2></th>
                            <th><h2>Title</h2></th>
                            <th><h2>Author</h2></th>
                            <th><h2>Operations</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id}>
                                <td>{index + 1}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>
                                    <div>
                                        <Link to={`/books/details/${book._id}`}>
                                            <h3>info</h3>
                                        </Link>
                                        <Link to={`/books/edit/${book._id}`}>
                                            <h3>edit</h3>
                                        </Link>
                                        <Link to={`/books/delete/${book._id}`}>
                                            <h3>delete</h3>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Home;