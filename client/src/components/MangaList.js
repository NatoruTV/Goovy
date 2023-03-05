import React, { useState, useEffect } from 'react';
import MangaItem from './MangaItem';

const MangaList = () => {
  const [manga, setManga] = useState([]);

  useEffect(() => {
    const fetchManga = async () => {
      const res = await fetch('/api/manga');
      const data = await res.json();
      setManga(data);
    };

    fetchManga();
  }, []);

  return (
    <div>
      {manga.map((mangaItem) => (
        <MangaItem key={mangaItem._id} manga={mangaItem} />
      ))}
    </div>
  );
};

export default MangaList;
