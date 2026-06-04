import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import "./App.css";

function App() {
  const LOCAL_STORAGE = "contacts";

  const [contacts,setContacts]= useState([]);
  const [searchTerm,setSearchTerm] = useState("");
  const [searchResults,setSearchResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact)=>{
        return contact.id !== id;
    })
    setContacts(newContactList);
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
    const retrieveContacts = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE)
    );

    if (retrieveContacts) {
        setContacts(retrieveContacts);
    }
    setLoaded(true);
}, []);

  useEffect(()=>{
    if (!loaded) return; 
    localStorage.setItem(LOCAL_STORAGE,JSON.stringify(contacts));
  },[contacts,loaded]);

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

