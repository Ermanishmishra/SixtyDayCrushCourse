// src/components/ProfileUpdater.jsx

import { useState } from "react";

function ProfileUpdater() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "", // Added phone number field
    Email : ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={profile.firstName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={profile.lastName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={profile.phoneNumber}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="Email"
        placeholder="Email id"
        value={profile.Email}
        onChange={handleInputChange}
      />
      <p>First Name: {profile.firstName}</p>
      <p>Last Name: {profile.lastName}</p>
      <p>Phone Number: {profile.phoneNumber}</p>
      <p>Phone Email: {profile.Email}</p>
    </div>
  );
}

export default ProfileUpdater;
