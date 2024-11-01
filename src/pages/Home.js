import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [roomID, setRoomId] = useState('');
 
  const navigate = useNavigate();

  // Function to handle room ID change
  const handleRoomIdChange = (event) => {
    setRoomId(event.target.value);
  };

  // Function to handle joining the room
  const joinRoom = () => {
    if (roomID.trim()) {
      // Navigate to the room route using the entered room ID
      navigate(`/room/${roomID}`);
    } else {
      alert("Please enter a valid Room ID.");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Enter a Room</h1>
      
      {/* Input field for Room ID */}
      <input
        type="text"
        placeholder="Enter Room ID"
        value={roomID}
        onChange={handleRoomIdChange}
        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
      />
      
      {/* Button to join the Room */}
      <button onClick={joinRoom} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Join Room
      </button>
    </div>
  );
}

export default Home;
