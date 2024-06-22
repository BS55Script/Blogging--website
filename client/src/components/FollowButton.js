import React, { useState } from 'react';

const FollowButton = ({ bloggerId, userId }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = async () => {
    try {
      const response = await fetch(`/api/user/follow/${bloggerId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
      const data = await response.json();
      setIsFollowing(true); // Update UI to indicate user is following this blogger
      console.log(data.message); // Log success message
    } catch (error) {
      console.error('Error following blogger:', error);
    }
  };

  return (
    <button onClick={handleFollow}>
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  );
};

export default FollowButton;
