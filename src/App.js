import "./App.css";
import allContacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 6));
  function addContacts() {
    const randomNumber = Math.floor(allContacts.length * Math.random());
    const randomContact = allContacts[randomNumber];
    const newContact = [...contacts, randomContact];
    setContacts(newContact);
  }
  function sortByPopularity() {
    const sortedPopularity = [...contacts].sort((a, b) => a - b);
    setContacts(sortedPopularity);
  }

  function sortByName() {}
  const sortedNames = [...contacts].sort;
  setContacts(sortedNames);

  // function deleteContact() {
  //   const contactsToDelete =
  // }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContacts}>Add random</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
