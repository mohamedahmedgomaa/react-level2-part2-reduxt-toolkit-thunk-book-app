import React from 'react';
import {deleteBook, getBook} from "../../store/bookSlice";

const BooksList = ({isLoading, books, isLoggedIn, deleteBook, dispatch, getBookId}) => {
    const bookList = books.length > 0 ? books.map(book => (
            <li className='list-group-item d-flex  justify-content-between align-items-center' key={book.id}>
                <div>{book.title}</div>
                <div className='btn-group' role='group'>
                    <button type='button' className='btn btn-primary m-1' onClick={() => getBookId(book.id)}>
                        Read
                    </button>
                    <button type='button' className='btn btn-danger m-1' disabled={!isLoggedIn}
                            onClick={() => dispatch(deleteBook(book))
                                .unwrap()
                                .then((data) => {
                                    console.log(data);
                                }).catch((error) => {
                                    console.log(error);
                                })
                    }>
                        Delete
                    </button>
                </div>
            </li>
        ))
        : (
            <div className='alert alert-secondary' role='alert'>
                There is no books available
            </div>
        );

    return (
        <div>
            <h2>Books List</h2>
            {
                isLoading ? (
                    'loading...'
                ) : (
                    <ul className='list-group'>
                        {bookList}
                    </ul>
                )
            }

        </div>
    );
};

export default BooksList;