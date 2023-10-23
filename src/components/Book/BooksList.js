import React from 'react';

const BooksList = ({isLoading, books}) => {

    const bookList = books.length> 0 ? books.map(book => (
        <li className='list-group-item d-flex  justify-content-between align-items-center' key={book.id}>
            <div>{book.title}</div>
            <div className='btn-group' role='group'>
                <button type='button' className='btn btn-primary'>
                    Read
                </button>
                <button type='button' className='btn btn-danger'>
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