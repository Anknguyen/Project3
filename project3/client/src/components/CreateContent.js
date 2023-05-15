import React, { useState } from 'react';
import { ADD_CONTENT } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


function CreateContent() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [genre, setGenre] = useState('');
  const [review, setReview] = useState('');

  const [addContent, { error }] = useMutation(ADD_CONTENT)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

  const url = title.split(" ").map(w => w.tolowercase()).join("");

      const {data} = await addContent ({
        variables: {
        url,
        title,
        rating,
        genre,
        review}
      });


      console.log(data);
      navigate(`/Content/${url}`);
      // Do something with the response, such as displaying a success message
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };

  return (
    <div cltitle='loginForm'>
    <form cltitle="loginContrast" onSubmit={handleSubmit}>
      <label>
        Title: &nbsp;
        <input cltitle="label" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Rating: &nbsp;
        <input cltitle="label" type="number" max={10} value={rating} onChange={(e) => setRating(e.target.value)} />
      </label>
      <br />
      <label>
        Genre: &nbsp;
        <input cltitle="label" type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
      </label>
      <br />
      <label>
        Review: &nbsp;
        <textarea cltitle="label" value={review} onChange={(e) => setReview(e.target.value)} />
      </label>
      <br />
      <button onClick="myFunction(creatediv)" type="submit">Submit</button>
    </form>
    </div>
  );
}


export default CreateContent;
