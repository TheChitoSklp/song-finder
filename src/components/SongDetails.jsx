import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "./Message";
const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;
  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message msg={`Error:no existe la cancion ${search.song}`} bgColor="#dc3545" />
      ) : (
        <SongLyric />
      )}
      {bio.artits ? (
        <SongArtist />
      ) : (
        <Message
          msg={`Error:no existe el interprete ${search.artits}`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
