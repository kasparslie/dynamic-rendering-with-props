import React from "react";
import Contact from "./components/Contact";

const Data = [
  {
  id : 1,
  fullName: 'John Dick',
  online: false,
  image: "https://i.ibb.co/VqNQKWj/lizars.jpg"
  },
  {
  id : 2,
  fullName: 'Jan Nasty',
  online: true,
  image: "https://i.ibb.co/gMTxjFc/EXHIB-Mr-Nasty-1.jpg"
  },
  {
    id : 3,
  fullName: 'Willy Grinch',
  online: false,
  image: "https://i.ibb.co/VLxCcjW/grinch-1.jpg"
  }
];


function App() {
  return (
    <div className="App">
          {Data.map((e) =>{
          return ( <Contact
      id = {e.id}
      avatar = {e.image}
      fullname = {e.fullName}
      online = {e.online}
      />
      );
    })}
    </div>
  );
}

export default App;
