import React from 'react'

const AddUser = ({userName,setUserName,userSurname,setUserSurame,userAge,setUserAge,handleSubmit}) => {
  return (
    <>  
      <h2>Add Users</h2>
      <form className='addUser' onSubmit={e=>handleSubmit(e)}>
          <input required type='text' value={userName} onChange={e=>setUserName(e.target.value)} placeholder='New name....'/>
          <input required type='text' value={userSurname} onChange={e=>setUserSurame(e.target.value)} placeholder='New surname....'/>
          <input required type='text' value={userAge} onChange={e=>setUserAge(e.target.value)} placeholder='User age....'/>
          <button className='addBtn' type='submit'>ADD</button>
      </form>
    </>
  )
}

export default AddUser