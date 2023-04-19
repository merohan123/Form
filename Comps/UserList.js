import React from 'react';

function UserList({ data, onEditUser, onDeleteUser }) {
  const handleEditClick = (index, data) => {
    onEditUser(index, data);
  };

  const handleDeleteClick = index => {
    onDeleteUser(index);
  };

  return (
    <div className="user-list">
      <h2>User Details</h2>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Name</th>
              <th>Address</th>
              <th>Mobile No.</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.userid}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.mobileno}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.city}</td>
                <td>
                  <button onClick={() => handleEditClick(index, user)}>Edit</button>
                  <button onClick={() => handleDeleteClick(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UserList;
