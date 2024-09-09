import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) {
    return <div>Select a user to see their profile</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
};

export default UserProfile;