// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const { useState } = require("react")

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [isError, setIsError] = useState('');

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         setIsError('Error fetching data');
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Axios in React</h1>
//       {isError && <h3>{isError}</h3>}
//       <div>
//         {users.map((user) => (
//           <div key={user.id}>
//             <h3>{user.name}</h3>
//             <p>{user.email}</p>
//             <p>{user.phone}</p>
//             <p>{user.website}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useEffect } from "react"
import axios from 'axios';
const App=()=>{
  const [posts, setPosts]=useState([])
  const fetchPosts = async()=>{
    try{
      const response  = await axios.get('https://jsonplaceholder.typicode.com/users')
      setPosts(response.data);
    }catch(error){
      console.log('error')
    }
  }
  useEffect(()=>{
    fetchPosts();
  },[])
}