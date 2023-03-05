import React from 'react';
import { Link } from 'react-router-dom';

const MangaItem = ({ manga }) => {
  return (
    <div>
      <Link to={`/manga/${manga._id}`}>
        <h3>{manga.title}</h3>
      </Link>
      <p>{manga.description}</p>
    </div>
  );
};

export default MangaItem;
