
import React,{useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const inputE1 = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const getSearchTerm = ()=>{
    props.searchKeyword(inputE1.current.value);
  };
const totalContacts = props.totalContacts;
return (
    <div>
      {/* only show heading and search if there are contacts */}
      {totalContacts === 0 ? (
        <div className="empty-state">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
          </svg>
          <p>No contacts yet. Add your first one!</p>
          <Link to="/add">+ Add Contact</Link>
        </div>
      ) : (
        <div>
          <div className="page-heading">
            <h3>All Contacts</h3>
            <span>{totalContacts} {totalContacts === 1 ? "contact" : "contacts"}</span>
          </div>

          <div className="ui search">
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search Contacts"
                className="prompt"
                value={props.term}
                onChange={getSearchTerm}
                ref={inputE1}
              />
              <i className="search icon"></i>
            </div>
          </div>

          {/* no search results message */}
          {props.contacts.length === 0 && props.term ? (
            <p style={{ textAlign: "center", color: "#9099b8", marginTop: "40px" }}>
              No contacts found for "{props.term}"
            </p>
          ) : (
            <div className="ui celled list">
              {props.contacts.map((contact) => (
                <ContactCard
                  contact={contact}
                  clickHandler={deleteContactHandler}
                  key={contact.id}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactList;
