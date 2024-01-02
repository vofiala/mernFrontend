import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const ShowBooks = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:8000/books/${id}`)
        .then((response) => {
            setBook(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });

    }, []);
    
    return (
        <div>
            <div>
                <BackButton />
                <h1>Show Book</h1>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <div> 
                        <span>Id</span> <br />
                        <span>{book._id}</span>
                    </div>
                    <div>
                        <span>Title</span><br />
                        <span>{book.title}</span>
                    </div>
                    <div>
                        <span>Author</span><br />
                        <span>{book.author}</span>
                    </div>
                    <div>
                        <span>Create Time</span><br />
                        <span>{new Date(book.createdAt).toString()}</span>
                    </div>
                    <div>
                        <span>Last Update Time</span><br />
                        <span>{new Date(book.updatedAt).toString()}</span>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ShowBooks;