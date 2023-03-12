import React from 'react'

const AddBook = ({bookGenre,setBookGenre,bookTitle,setBookTitle,bookAuthor,setBookAuthor,id,handleAddBook}) => {
  return (
    <form className='addBook' onSubmit={(e)=>e.preventDefault()}>
        <input className={id} type='text' value={bookGenre} onChange={e=>setBookGenre(e.target.value)} placeholder='book genre...'/>
        <input className={id} type='text' value={bookTitle} onChange={e=>setBookTitle(e.target.value)} placeholder='book title...'/>
        <input className={id} type='text' value={bookAuthor} onChange={e=>setBookAuthor(e.target.value)} placeholder='book author...'/>
        <button className='addBtn' onClick={()=>handleAddBook(id,bookGenre,bookTitle,bookAuthor)} type='submit'>Add Book</button>
    </form>
  )
}

export default AddBook