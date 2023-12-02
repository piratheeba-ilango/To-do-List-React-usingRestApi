import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import Header from "./components/Heading";
import { useEffect, useState } from 'react'
import SearchItem from "./components/SearchItem";
import Content from "./components/Content";

const App = () => {
  const API_URL = 'http://localhost:3500/items'
  const [todo,setToDo] = useState([])
  const [newItem ,setNewItem] = useState('')
  const [search,setSearch] = useState('')
  // for store error message
  const [fetchError,setFetchError] = useState(null)
  const [isLoading,setIsLoading] =useState(true)
  useEffect (() =>{
    const fetchItems = async () => {

      try{
          const response = await fetch(API_URL);
          if(!response.ok) throw Error("data not received")
          const listItems = await response.json();
          console.log(listItems)
          setToDo(listItems)
          setFetchError(null)

      }catch(err){
        setFetchError(err.message)
      }finally{
        setIsLoading(false)
      }
    }
  setTimeout(()=>{
    (async () => await fetchItems())()
  },1000)
    
  },[])
  // add item
  const addItem = (item) => {
    const id = todo.length ? todo[todo.length - 1].id +1 :1; 
    //it indicates that the need to add the item with the existing array so id also increase from 3 to 4 
    // if id length is 3 is true means in that array  o 1 2 length(3) -1 is true +1means 3 id = 4 otherwise 1
    const addNewItem =  { id, checked:false,item};
    const listItems = [...todo ,addNewItem]
    setToDo(listItems)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')    
  }
  // search
  const handleSearch = (e) =>{
    e.preventDefault();
    console.log("submitted")
  }
  const handleChange = (id)  => {
   const listitems = todo.map((todos) =>  
    todos.id === id ? {...todos,checked:!todos.checked} : todos
    )
   setToDo(listitems)
  }
  
  const handleDelete = (id) => {
    const listDelete = todo.filter(todos =>todos.id !== id)
    .map((todos) => todos
  )
    setToDo(listDelete)
  
  
  }

  return (
    <>
    <div className="App">
    <Header title = "List of Items" />
    <AddItem  
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit ={handleSubmit}

    />
    <SearchItem 
      search = {search}
      setSearch ={setSearch}
      handleSearch ={handleSearch}
    />
    <main>
    {isLoading && <p>{`loading...`}</p> }
    {fetchError && <p>{`Error:${fetchError}`}</p>}
    {!isLoading && !fetchError &&<Content  
     todo = {todo.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleChange = {handleChange}
      handleDelete = {handleDelete}
     />}
    </main>
    
     <Footer length = {todo.length}/>
    
    </div>
    
    </>
  
  );
};

export default App;