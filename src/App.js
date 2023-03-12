import './App.css';
import { useState,useEffect } from 'react';
import Header from './Header';
import User from './User';
import Footer from './Footer';
import AddUser from './AddUser';
import apiRequest from './apiRequest';

function App() {
  const api_url='http://localhost:3500/users'
  const [users,setUsers]=useState([]);
  const [userName,setUserName]=useState('');
  const [userSurname,setUserSurame]=useState('');
  const [userAge,setUserAge]=useState(0);
  const [fetchError, setFetchError] = useState(null);
  const [bookGenre,setBookGenre]=useState('');
  const [bookTitle,setBookTitle]=useState('');
  const [bookAuthor,setBookAuthor]=useState('');


  /*Fetching Users from json-server */
  useEffect(()=>{
    const fetchUsers=async()=>{
      const res=await(fetch(api_url))
      const data=await(res.json())
      setUsers(data)
      console.log(data);
    }

    fetchUsers()
  },[])



/*Adding new user to json */
  const addNewUser=async(newUserName,newUserSurname,newUserAge)=>{
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser={id:id,name:newUserName,surname:newUserSurname,age:newUserAge,books:[]}
    const listUsers=[...users,newUser]
    setUsers(listUsers)
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }
    const result = await apiRequest(api_url, postOptions);
    if (result) setFetchError(result);
  }


/*Deleting Users from json-server */
  const deleteUser=async(id)=>{
    const newUser=users.filter(user=>user.id!==id)
    setUsers(newUser)

    const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${api_url}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  }


  /*Submiting form for adding new user*/
  const handleSubmit=(e)=>{
    e.preventDefault()
    addNewUser(userName,userSurname,userAge)
    setUserName('')
    setUserSurame('')
    setUserAge(0)
  }


/*Adding new book to user and updating json file*/
  const handleAddBook=async(id,genre,title,writer)=>{
    const randomId=Math.floor(Math.random()*1000000)
    const myUsers=users.filter((user) => user.id === id ? user.books.push({id:randomId,genre:genre,title:title,author:writer}):user)
    setUsers(myUsers)
    setBookGenre('')
    setBookTitle('')
    setBookAuthor('')
    const myNewUser = users.filter((user) => user.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ books: myNewUser[0].books })
    };
    const reqUrl = `${api_url}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }


  /*Deleting book from user and updating json file */
  const deleteBook=async(userId,bookId)=>{
    const newUsers=users.filter(user=>user.id===userId ? user.books.splice(user.bookId,1):user)
    setUsers(newUsers)

    const myNewUser = users.filter((user) => user.id === userId);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ books: myNewUser[0].books })
    };
    const reqUrl = `${api_url}/${userId}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }

  return (
    <div className="App">
      <Header/>
      <AddUser 
        userName={userName} 
        setUserName={setUserName} 
        userSurname={userSurname} 
        setUserSurame={setUserSurame}
        userAge={userAge}
        setUserAge={setUserAge}
        handleSubmit={handleSubmit}
      />
      <User 
        users={users}
        bookGenre={bookGenre}
        setBookGenre={setBookGenre}
        bookTitle={bookTitle}
        setBookTitle={setBookTitle}
        bookAuthor={bookAuthor}
        setBookAuthor={setBookAuthor}
        handleAddBook={handleAddBook}
        deleteBook={deleteBook}
        deleteUser={deleteUser}
      />
      <Footer/>
    </div>
  );
}

export default App;
