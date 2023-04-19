import React, { useState } from 'react';
import UserForm from './Comps/UserForm';
import UserList from './Comps/UserList';
import './App.css';

function App() {
  const [userData, setUserData] = useState([]);

  const handleAddUser = data => {
    setUserData(prevState => [...prevState, data]);
  };

  const handleEditUser = (index, data) => {
    setUserData(prevState => {
      const newData = [...prevState];
      newData.splice(index, 1, data);
      return newData;
    });
  };

  const handleDeleteUser = index => {
    setUserData(prevState => {
      const newData = [...prevState];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div>
      <UserForm onAddUser={handleAddUser} />
      <UserList
        data={userData}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
      />
    </div>
  );
}

export default App;
