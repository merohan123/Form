import React, { useState } from 'react';

function UserForm({ onAddUser }) {
  const [formData, setFormData] = useState({
    userid:'',
    name: '',
    address: '',
    mobileno: '',
    email: '',
    gender: '',
    city : ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddUser(formData);
    setFormData({
      userid : '',
      name: '',
      address: '',
      mobileno:'',
      email: '',
      gender: '',
      city:''
    });
  };

  return (
    <div className="user-form">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="userid">UserId</label>
        <input
          type="number"
          id="userid"
          name="userid"
          value={formData.userid}
          onChange={handleChange}
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
         <label htmlFor="mobileno">Mobile No</label>
        <input
          type="text"
          id="mobileno"
          name="mobileno"
          value={formData.userid}
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" onChange={handleChange}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="city">City</label>
        <select id="city" name="city" onChange={handleChange}>
          <option value="">Select city</option>
          <option value="ahmedabad">Ahmedabad</option>
          <option value="rajkot">Rajkot</option>
          <option value="Surat">Surat</option>
          <option value="Bhavnagar">Bhavnagar</option>
          <option value="Junagadh">Junagadh</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Sign Up</button>
        
      </form>
    </div>
  );
}

export default UserForm;
