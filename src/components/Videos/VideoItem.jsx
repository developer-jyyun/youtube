import React from "react";

export default function VideoItem({ vid }) {
  return (
    <li key={vid.id}>
      <img src={vid.snippet.thumbnails.default.url} alt={vid.snippet.title} />
      <h3>{vid.snippet.title}</h3>
      <p>{vid.snippet.description}</p>
    </li>
  );
}
