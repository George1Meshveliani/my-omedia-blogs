import React, { useState } from 'react';

import './UserComment.css';

const UserComment = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    clear();
  };

  const clear = () => {
    setUserName('');
    setEmail('');
  };

  return (
    <form className="UserComment" onSubmit={handleSubmit}>
      <label htmlFor="userName">User Name</label>
      <input
        id="userName"
        name="userName"
        type="text"
        value={userName}
        required
        onChange={event => {
          setUserName(event.target.value);
        }}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        required
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <label htmlFor="comment">Write your comment: </label>
      <input
        id="comment"
        name="comment"
        type="comment"
        value={comment}
        required
        onChange={event => {
          setComment(event.target.value);
        }}
      />
      <input type="Submit" />
    </form>
  );
};

export default UserComment;