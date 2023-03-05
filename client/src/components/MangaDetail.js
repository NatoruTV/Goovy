import React, { useState, useEffect } from 'react';

const MangaDetail = ({ match }) => {
  const [manga, setManga] = useState({});

  useEffect(() => {
    const fetchManga = async () => {
      const res = await fetch(`/api/manga/${match.params.id}`);
      const data = await res.json();
      setManga(data);
    };

    fetchManga();
  }, [match.params.id]);

  return (
    <div>
      <h2>{manga.title}</h2>
      <img src={manga.image} alt={manga.title} />
      <p>{manga.description}</p>
      <p>Author: {manga.author}</p>
      <p>Genre: {manga.genre}</p>
      <p>Status: {manga.status}</p>
      <p>Chapters: {manga.chapters}</p>
      <p>Rating: {manga.rating}</p>
    </div>
  );
};

export default MangaDetail;
