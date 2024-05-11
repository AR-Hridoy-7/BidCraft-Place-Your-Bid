import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/MyProfile.css';

const MyProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('accessToken'); // Assuming token is stored in localStorage
        if (!token) {
          console.error('Access token not found');
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get('http://localhost:8000/user/show_my_profile', config);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-profile">
      <div className="profile-header">
        <h2>My Profile</h2>
      </div>
      <div className="profile-details">
        <div className="profile-info">
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Overall Rating: {userData.overall_rating}</p>
        </div>
        <div className="profile-items">
          <h3>My Items:</h3>
          {userData.items.map((item) => (
            <div key={item.id} className="item-card">
              <img src={`data:image/jpeg;base64,${item.pic}`} alt={item.name} />
              <p>Name: {item.name}</p>
              <p>Category: {item.category}</p>
              <p>Start Date: {item.auction_start_date}</p>
              <p>End Date: {item.auction_end_date}</p>
              {/* Add more item details here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
