import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import "./App.css";
import { supabase } from './supabaseClient'

function App() {
  
  const [contacts,setContacts]= useState([]);
  const [searchTerm,setSearchTerm] = useState("");
  const [searchResults,setSearchResults] = useState([]);

  // For Local Storage
  // const LOCAL_STORAGE = "contacts";
  // const [loaded, setLoaded] = useState(false);
  // const addContactHandler = (contact) => {
  //   console.log(contact);
  //   setContacts([...contacts, { id: Date.now(), ...contact }]);
  // };

  // const removeContactHandler = (id)=>{
  //   const newContactList = contacts.filter((contact)=>{
  //       return contact.id !== id;
  //   })
  //   setContacts(newContactList);
//   // }
// useEffect(() => {
//     const retrieveContacts = JSON.parse(
//         localStorage.getItem(LOCAL_STORAGE)
//     );

//     if (retrieveContacts) {
//         setContacts(retrieveContacts);
//     }
//     setLoaded(true);
// }, []);

//   useEffect(()=>{
//     if (!loaded) return; 
//     localStorage.setItem(LOCAL_STORAGE,JSON.stringify(contacts));
//   },[contacts,loaded]);


  // For Supabase
  const addContactHandler = async (contact) => {
  const { data, error } = await supabase
    .from('contacts')
    .insert([contact])
    .select()
  
  if (error) console.log(error)
  else setContacts([...contacts, data[0]])
}

// delete contact
const removeContactHandler = async (id) => {
  const { error } = await supabase
    .from('contacts')
    .delete()
    .eq('id', id)
  
  if (error) console.log(error)
  else setContacts(contacts.filter((c) => c.id !== id))
}
  
  const searchHandler = (searchTerm)=>{
    setSearchTerm(searchTerm);
    if(searchTerm !==""){
      const newContactList = contacts.filter((contact)=>{
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    }
    else{
      setSearchResults(contacts);
    }

    }
useEffect(() => {
  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: true })
    
    if (error) console.log(error)
    else setContacts(data)
  }
  fetchContacts()
}, [])
  

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={ <AddContact addContactHandler={addContactHandler}/> } />
          <Route path="/" element={ <ContactList contacts={searchTerm.length < 1 ? contacts:searchResults} getContactId={removeContactHandler} term = {searchTerm} searchKeyword={searchHandler} totalContacts={contacts.length}/>  } />
        </Routes>
      </Router>
    </div>
  );

}
export default App;

