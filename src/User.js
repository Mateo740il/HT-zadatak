import React from 'react'
import AddBook from './AddBook'
import {FaTrashAlt} from 'react-icons/fa'

const User = ({users,bookGenre,setBookGenre,bookTitle,setBookTitle,bookAuthor,setBookAuthor,handleAddBook,deleteBook,deleteUser}) => {

  return (
    <main className='main'>
        <div className='main__users'>
            { /*Maping users list*/}
            {users.map(user=>(
                <div className='main__users__user' key={user.id}>
                    <div className='user'>
                        <h3>{user.name} {user.surname} {user.age}</h3>
                        <button className='delBtn' onClick={()=>deleteUser(user.id)}>Delete {user.name}</button> 
                    </div>
                    <h3>Books:</h3>
                    { /*Maping user books list*/}
                    {user.books.map(book=>(
                        <div key={book.id} className='book'>
                            <p>{book.title} by {book.author}</p>
                            <FaTrashAlt className='delBook' id={book.id} onClick={()=>deleteBook(user.id,book.id)}/>
                        </div>
                        
                    ))}
                    { /*Form for adding book*/}
                    <AddBook
                        bookGenre={bookGenre}
                        setBookGenre={setBookGenre}
                        bookTitle={bookTitle}
                        setBookTitle={setBookTitle}
                        bookAuthor={bookAuthor}
                        setBookAuthor={setBookAuthor}
                        handleAddBook={handleAddBook}
                        id={user.id}
                    />
                </div>
            ))}
        </div>
    </main>
  )
}

export default User