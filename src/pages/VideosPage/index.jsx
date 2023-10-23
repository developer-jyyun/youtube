import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoItem from "../../components/main/VideoItem";

export default function VideosPage({}) {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: async () => {
      console.log("🔥fetching...");
      return fetch(`/mockdata/${keyword ? "search" : "popular"}.json`)
        .then((res) => {
          console.log("res::", res);
          return res.json();
        })
        .then((data) => {
          console.log("data::", data);
          console.log("data.items::", data.items);
          return data.items;
        });
    },
    staleTime: 1000 * 60 * 5,
  });

  return (
    <section>
      <h1>📺 Videos Page</h1>
      <h2>{keyword ? "🔍 search : " + keyword : "🔥 Hot Trend"} Videos</h2>

      <div className="video-data">
        {isLoading && <p>loading...</p>}
        {error && <p>error...</p>}
        {videos ? (
          <ul>
            {videos.map((vid) => (
              <VideoItem key={vid.id} vid={vid} />
            ))}
          </ul>
        ) : (
          <p>⚠ 검색 결과가 없습니다</p>
        )}
      </div>
    </section>
  );
}
