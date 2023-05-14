import React, { useState } from 'react';
import axios from 'axios';


function PostContent() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [genre, setGenre] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      const response = await axios.post('/api/content', {
        name,
        rating,
        genre,
        review
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      // Do something with the response, such as displaying a success message
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };

  return (
    <div className='loginForm'>
    <form className="loginContrast" onSubmit={handleSubmit}>
      <label>
        Title: &nbsp;
        <input className="label" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Rating: &nbsp;
        <input className="label" type="number" max={10} value={rating} onChange={(e) => setRating(e.target.value)} />
      </label>
      <br />
      <label>
        Genre: &nbsp;
        <input className="label" type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
      </label>
      <br />
      <label>
        Review: &nbsp;
        <textarea className="label" value={review} onChange={(e) => setReview(e.target.value)} />
      </label>
      <br />
      <button onClick="myFunction(creatediv)" type="submit">Submit</button>
    </form>
    </div>
  );
}

export default PostContent;
