import React, { useState } from "react";
const initialForm = {
  artist: "",
  song: "",
};
const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song) {
      alert("Datos incompletos");
      return;
    }
    handleSearch(form);
    setForm(initialForm);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="my-form">
        <input
          type="text"
          name="artist"
          placeholder="Nombre del intérprete"
          onChange={handleChange}
          value={form.artist}
          className="input-field"
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la canción"
          onChange={handleChange}
          value={form.song}
          className="input-field"
        />
        <input type="submit" value="Enviar" className="submit-button" />
      </form>
    </>
  );
};

export default SongForm;
