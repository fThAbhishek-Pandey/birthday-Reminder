import { useState } from 'react'
import  List  from './Component/listing';
import Friends from "./Component/Data"
import './App.css'
console.log("list : ",List);
console.log("freind : ",Friends);
function App() {
  console.log("I am in app function");
  const [friends, setFriends] = useState(Friends);
  console.log("my love : ",friends);
  return (
    <>
      <section className='container relative'>
        <h3>{friends.length} Birthdays today</h3>
        <List people={friends}/>
        <button onClick ={() =>setFriends([])}>Clear all</button>
      </section>
    
    </>
  )
}

export default App;
