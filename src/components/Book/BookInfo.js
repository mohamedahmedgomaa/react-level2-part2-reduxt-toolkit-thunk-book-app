import React, {Fragment} from 'react';

const BookInfo = ({bookInfo}) => {
    return (
        <Fragment>
            <h2>Book Details</h2>
            {!bookInfo && (
                <div className='alert alert-secondary' role='alert'>
                    There is no book selected yet. Please select!
                </div>
            )}
            {bookInfo && (
                <div>
                    <p className='fw-bold'>Title: {bookInfo.title}</p>
                    <p className='fw-light'>Description: {bookInfo.description}</p>
                    <p className='fst-italic'>Price: {bookInfo.price}</p>
                </div>
            )
            }
        </Fragment>
    );
};

export default BookInfo;